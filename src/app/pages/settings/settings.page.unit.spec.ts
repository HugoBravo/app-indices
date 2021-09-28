import { Storage } from '@ionic/storage-angular';
import { of } from 'rxjs';
import mockIndiceConfig from 'src/mocks/indiceConfig';
import mockIndices from 'src/mocks/indiceConfig';
import { SettingsService } from './../../services/settings.service';
import { SettingsPage } from './settings.page';

describe('SettingsPage Unit', () => {

  let page: SettingsPage;
  let s = new Storage();
  let serviceStorage = new SettingsService( s );

  beforeEach( () => {
    page = new SettingsPage( serviceStorage );
  });

  it('should set theme mode in localstorage when changeThemeMode is called', async () => {

    const spy = spyOn( serviceStorage, 'setThemeMode').and.callFake(() => (null));

    let event = {
      detail:{
        checked: true
      }
    }
    
    page.changeThemeMode( event );

    expect( spy ).toHaveBeenCalled();

    event = {
      detail:{
        checked: false
      }
    }
    
    page.changeThemeMode( event );

    expect( spy ).toHaveBeenCalled();

  });

  it ('should set value show for indice in localstorage when changeIndice() is called', () => {

    const spy = spyOn( serviceStorage, 'set').and.callFake(() => (null));

    page.indices = mockIndiceConfig;
   
    let event = {
      detail:{
        checked: true
      }
    }

    page.changeIndice(event,'dolar')


    expect( spy ).toHaveBeenCalled();



  })


/* 
  it('should calculate when calculate() is called', () => {

    page.indiceData = {
      codigo: 'dolar',
      nombre: 'dolar',
      unidad_medida: 'pesos',
      fecha: new Date(),
      valor: 700
    }
    page.input = 5;
    const resp = page.calculate();

    expect( resp ).toEqual(3500);

  });

  it('should calculate when changeInput() is called', () => {

    page.indiceData = {
      codigo: 'dolar',
      nombre: 'dolar',
      unidad_medida: 'pesos',
      fecha: new Date(),
      valor: 700
    }
    page.input = 5;

    const startResult = page.calculate();

    page.input = 10;

    page.changeInput();

    expect( page.result ).toEqual(7000);

  }); */

});
