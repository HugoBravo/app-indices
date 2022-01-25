import { Component, ElementRef, ViewChild, Input, AfterViewInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements AfterViewInit {

  @ViewChild('lineCanvas') public lineCanvas: ElementRef;
  
  lineChart: any;

  @Input() labels: string[];
  @Input() serie:number[];
  @Input() indice: string;

  constructor() { 
    // Necesary for work chart
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    if (this.labels && this.serie && this.indice){
      this.lineChartMethod((this.labels), this.serie);
    }
  }

  lineChartMethod(labels: string[], serie: number[]) {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: this.indice ,
            fill: true,
            // lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.serie,
            spanGaps: false,
          },
        ],
      },
    });
  }
}
