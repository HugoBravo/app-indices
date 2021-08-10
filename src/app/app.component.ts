import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Network } from '@capacitor/network';

import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{

  public alert;

  constructor(private menu: MenuController,
              private router:Router,
              private _settings: SettingsService,
              private alertCtrl: AlertController) 
    {
      this.getDefaultsSettings();

    }

    ngOnInit(): void {

      Network.addListener('networkStatusChange', async status => {
        if (status.connected === false){
          this.alertOffLine();
        }else{
          await this.alert.dismiss();
        }
      });
    }

    ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements ' to the class.
      Network.removeAllListeners();
    }
    
    async alertOffLine(){
      this.alert = await this.alertCtrl.create({
        // cssClass: 'my-custom-class',
        header: 'Sin Internet',
        // subHeader: 'Subtitle',
        message: 'Revisa tu conexión a internet e intenta nuevamente.',
        backdropDismiss: false
    });
      await this.alert.present();
    }

  async getDefaultsSettings(){
    await this._settings.init();
    await this._settings.loadThemeFromSettings();
  }

  goToAbout(){
    this.router.navigate(['/about']);
    this.closeMenu();
  }

  goToSettings(){
    this.router.navigate(['/settings']);
    this.closeMenu();
  }
  
  closeMenu(){
    this.menu.close();
  }
  
}
