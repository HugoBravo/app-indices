import { Component, OnInit, Input } from '@angular/core';


import { LastValuesSerie } from 'src/app/interfaces/mindicador';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

@Input() data: LastValuesSerie[];

  constructor() { }

  ngOnInit() {}

}
