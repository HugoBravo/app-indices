import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { IndiceConfig } from './../../../interfaces/settings';
import { SettingsService } from 'src/app/services/settings.service';
import { IndiceData, IndiceHead } from '../../../interfaces/mindicador';
import { MindicadorService } from '../../../services/mindicador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public  indiceHead: IndiceHead;
  public  indiceData: IndiceData[] = [];
  private loading   : any;

  constructor(private mindicadorService: MindicadorService,
              private localdataService: SettingsService,
              private loadingCtrl: LoadingController) {}

  async ngOnInit() {

    await this.presentLoading('Cargando...');
  
    await this.localdataService.init();

    if (await this.localdataService.hasIndiceConfigData() == false){
      await this.localdataService.restoreIndiceConfigDefault();
    }   
    
    this.indiceData = await this.getIndices();

    await this.loading.dismiss();
  }

  async getIndicesToShow(): Promise<String[]> {

    const indiceConfig: IndiceConfig[] = await this.localdataService.get('indices');
    
    let arrCodes: String[] = [];
    
    indiceConfig.forEach(e => {
      if ( e['show'] == true ){
        arrCodes.push( e['code'] );
      }   
    });

    return arrCodes;
  }

  getIndiceDataFromApi(): Promise<IndiceData> {
    return new Promise( (resolve, reject) =>{
      this.mindicadorService.getValues().subscribe((resp: IndiceData) => {
        resolve(resp);
      });
    });
  }

  async getIndices(): Promise<IndiceData[]> {
    
    const indicesToShow = await this.getIndicesToShow();

    const indicesFromAPI = await this.getIndiceDataFromApi();

    let dataToShow: IndiceData[] = []; 
    let k: keyof typeof indicesFromAPI;
    for (k in indicesFromAPI) {
      if (typeof indicesFromAPI[k]) {
        const v: any = indicesFromAPI[k];
        if ( indicesToShow.includes( indicesFromAPI[k]['codigo'] ) ) {
            dataToShow.push(v);
        }          
      }
    }
  
    dataToShow.sort((a, b) =>
      a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0
    );

    return dataToShow

  }

  async doRefresh( e ) {
    await this.ngOnInit();
    e.target.complete();
  }

  private async presentLoading( message: string ) {
    this.loading = await this.loadingCtrl.create({
      message
    });
    await this.loading.present();
  }

}
