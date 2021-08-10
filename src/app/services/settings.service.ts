import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import defaultConfig from '../data/defaultConfig';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }
  
  public async hasIndiceConfigData(): Promise<boolean> {
    
    const indices = await this.get('indices');
    
    if (!indices){
      return false;
    }

    if (indices.length > 0) {
      return true;
    } else {
      return false;
    }

  }
  
  public async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  public async get(key: string ) {
    // return await this._storage?.keys();
    return await this._storage?.get(key);
  }

  public async  restoreIndiceConfigDefault(){
    await this._storage.set('indices', defaultConfig );
  }
  
  // Appearance

  setThemeMode( mode: string):void { 
    document.body.setAttribute('color-theme', mode)
    this._storage.set('color-theme', mode);
  }

  async getThemeMode() {

    let ret = await this._storage.get('color-theme');

    if ( !ret ){
      ret = 'ligth';
    }

    return ret;

  }

  async loadThemeFromSettings() {

    const mode = await this.getThemeMode();

    this.setThemeMode( mode );

  }

}
