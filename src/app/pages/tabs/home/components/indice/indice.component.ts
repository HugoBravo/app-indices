import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IndiceData } from '../../../../../interfaces/mindicador';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.scss'],
})
export class IndiceComponent implements OnInit{

  @Input('indice') indice: IndiceData;
  loading:any;

  constructor( private router: Router) { }

  ngOnInit() {}

  getDetail( indice: string ){
    this.router.navigate([`tabs/home/detail/${ indice }`]);
  }

}
