import { Component, OnInit } from '@angular/core';

import { SettingsService } from 'src/app/services/settings.service';
import { IndiceConfig } from './../../interfaces/settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public indices: IndiceConfig[];

  public themeMode: string;
  public themeModeToggle: boolean;

  constructor(private _settings: SettingsService) {}

  async ngOnInit() {
    await this._settings.init();

    if (await this._settings.hasIndiceConfigData() == false){
      await this._settings.restoreIndiceConfigDefault();
    }  

    this.getThemeMode();
    this.indices = await this.getIndices();
    this.indices.sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0
    );
  }

  async getIndices(): Promise<IndiceConfig[]> {
    return await this._settings.get('indices');
  }

  async changeIndice( e, code: string ) {

    //Find index of specific object using findIndex method.    
    const objIndex = this.indices.findIndex((obj => obj.code == code ));

    const show: boolean = e.detail.checked;
    this.indices[objIndex].show = show;
    
    this._settings.set('indices', this.indices);

  }

  async getThemeMode(){

    this.themeMode = await this._settings.getThemeMode();

    if (this.themeMode == 'dark'){
      this.themeModeToggle = true;
    }else{
      this.themeModeToggle = false;
    }
  }

  changeThemeMode( event ) {
    if (event.detail.checked){
        this._settings.setThemeMode('dark');
    }else{
      this._settings.setThemeMode('ligth');
    }
  }
}
