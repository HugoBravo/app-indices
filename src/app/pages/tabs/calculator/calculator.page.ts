import { IndiceData } from './../../../interfaces/mindicador';
import { Component, OnInit } from '@angular/core';

import { SettingsService } from 'src/app/services/settings.service';
import { MindicadorService } from './../../../services/mindicador.service';

import { IndiceConfig } from './../../../interfaces/settings';
import { map } from 'rxjs/operators'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  public result    : number = 0;
  public input     : number ;
  public indiceList: IndiceConfig[];
  public selectedIndice: string;
  public indiceData: IndiceData;
  public unit: number;
  public onLine: boolean = false;

  private loading;

  constructor(private localdataService: SettingsService,
              private mindicadorService: MindicadorService,
              private loadingCtrl: LoadingController) {}

  async ngOnInit() {

    await this.presentLoading('Cargando... ');
        
    await this.localdataService.init();
    
    this.indiceList = await this.getIndices();

    this.selectedIndice = await this.getDefaultIndice();

    this.indiceData = await this.getIndiceData( this.selectedIndice );

    await this.loading.dismiss();

  }

  async getDefaultIndice(): Promise<string> {

    let defaultIndice: string = await this.localdataService.get(
      'lastIndiceCalculator'
    );

    if (defaultIndice === null) {
      defaultIndice = 'dolar';
      await this.localdataService.set('lastIndiceCalculator', defaultIndice);
    }

    return defaultIndice;
  }

  async getIndices(): Promise<IndiceConfig[]> {
    
    const indicesAll: IndiceConfig[] = await this.localdataService.get('indices');
    const indicesFiltered: IndiceConfig[] = indicesAll.filter( resp => resp.calculator == true)
    indicesFiltered.sort((a, b) =>
    a.code < b.code ? -1 : a.code > b.code ? 1 : 0
  );
    return indicesFiltered;
  }

  compareWith(o1: IndiceConfig, o2: IndiceConfig | IndiceConfig[]) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((u: IndiceConfig) => u.code === o1.code);
    }

    return o1.code === o2.code;
  }

  async selectIndice(e: string) {
    this.selectedIndice = e;
    this.indiceData = await this.getIndiceData( this.selectedIndice );
    this.result = this.calculate();
  }

  async getIndiceData(indiceCode: string): Promise<IndiceData> {
    return new Promise((resolve, reject) => {
      this.mindicadorService.getValues()
      .pipe( map(resp => resp[indiceCode]) )
      .subscribe( resp => {
        resolve( resp);
      });
    })

  }

  calculate(): number {
    return this.indiceData.valor * this.input;
  }
  
  changeInput() {
    this.result = this.calculate();
  }

  private async presentLoading( message: string ) {
    this.loading = await this.loadingCtrl.create({
      message
    });
    await this.loading.present();
  }

}
