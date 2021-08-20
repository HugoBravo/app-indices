import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers, Storage } from '@ionic/storage';

import { SettingsService } from './settings.service';

import defaultConfig from 'src/app/data/defaultConfig';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot({
          name: '__indicesdb',
          driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
        })
      ],
    });
    service = TestBed.inject(SettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should call to storage when restoreIndiceConfigDefault() is called', () => {

    const spy = spyOn( service, 'restoreIndiceConfigDefault').and.callFake(() => new Promise(null) );

    service.restoreIndiceConfigDefault();

    expect( spy ).toHaveBeenCalled();

  });

  it('should return false when indices key not exist in Storage', async() => {

    const spy = spyOn( service, 'get').and.callFake(() => new Promise( (resolve, reject ) => 
    {resolve( null ) }));

    const has = await service.hasIndiceConfigData();
    
    expect( has ).toBeFalse();

  });

  it('should return true when indices key exist in Storage', async() => {

    const spy = spyOn( service, 'get').and.callFake(() => new Promise( (resolve, reject ) => 
    {resolve( defaultConfig ) }));

    const has = await service.hasIndiceConfigData();
    
    expect( has ).toBeTrue();

  });

});
