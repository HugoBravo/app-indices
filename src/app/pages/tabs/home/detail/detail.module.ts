import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { GraphComponent } from './components/graph/graph.component';
import { TableComponent } from './components/table/table.component';

import { DetailPage } from './detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
  ],
  declarations: [
    DetailPage,
    TableComponent,
    GraphComponent
  ]
})
export class DetailPageModule {}
