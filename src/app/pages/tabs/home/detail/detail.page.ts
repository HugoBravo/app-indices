import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { format } from 'date-fns'

import { LastValues } from './../../../../interfaces/mindicador';
import { MindicadorService } from './../../../../services/mindicador.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public indice: string;

  public data  : LastValues;

  public labels: string[];
  public serie : number[];
  
  private loading: any;

    constructor(
      private route: ActivatedRoute,
      private mindicadorService: MindicadorService,
      private loadingCtrl: LoadingController
    ) {
    this.route.params.subscribe((params: any) => {
      if (params['indice']) {
        this.indice = params['indice'];
      }
    });
  }

  async ngOnInit() {
    await this.presentLoading('Cargando... ');
    this.data = await this.getDataFromApi();
    const [ arrLabels,arrSerie ] = await this.extractGraphData(this.data);

    this.labels = arrLabels.map(value => value);
    this.serie = arrSerie.map(value => value);

    await this.loading.dismiss();
  }

  getDataFromApi(): Promise<LastValues> {
    return new Promise((resolve, reject) =>{
      this.mindicadorService.getLast30Values(this.indice).subscribe((resp) => {
        resolve( resp );
      });
    })
  }

  extractGraphData( data: LastValues ) {

    let l: string[] = [];
    let s: number[] = [];

    data.serie.forEach((e) => {
      
      const formatedDate = format(new Date(e.fecha), 'dd/MM/yyyy');

      l.push(formatedDate);
      s.push(e.valor);

    });

    return ([ l, s ]);

  }

  private async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
  }
}
