import { IndiceHead } from './../../interfaces/mindicador';
import { SettingsService } from '../../services/settings.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  public apiUrl: string = environment.MIN_URL_BASE;

  public apiHead: IndiceHead;

  constructor( private dataLocalservice: SettingsService ) { }

  ngOnInit() {
    this.getApiHead();
  }

  async getApiHead(){
    this.apiHead = await this.dataLocalservice.get('head')
  }


}
