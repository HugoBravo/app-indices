import { Storage } from '@ionic/storage-angular';
import { of } from 'rxjs';
import { MindicadorService } from 'src/app/services/mindicador.service';
import { SettingsService } from './../../../services/settings.service';
import { CalculatorPage } from './calculator.page';

describe('CalculatorPage Unit', () => {

  let page: CalculatorPage;
  let s = new Storage();
  let serviceStorage = new SettingsService( s );
  let serviceAPI = new MindicadorService( null );

  beforeEach( () => {
    page = new CalculatorPage( serviceStorage, serviceAPI, null );
  });

  it('should return dolar when storage.lastIndiceCalculator = null when getDefaultIndice() is called', async () => {

    const spy = spyOn( serviceStorage, 'get').and.callFake(() => (null));

    const defaultIndice = page.getDefaultIndice();

    expect(await defaultIndice == 'dolar' ).toBeTrue;

  });

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

  });

});
