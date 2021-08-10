import { RouterTestingModule } from "@angular/router/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers, Storage } from '@ionic/storage';

describe('AppComponent', () => {
  
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports:[
        RouterTestingModule.withRoutes([]),
        IonicStorageModule.forRoot({
          name: '__indicesdb',
          driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
        }), 
      ],
      providers: [
        { provide: Router, useValue: mockRouter},
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it ('should redirect to About Page', () =>{

    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    component.goToAbout();

    expect (mockRouter.navigate).toHaveBeenCalledWith (['/about']);

  })

  it ('should redirect to Settings Page', () =>{

    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    component.goToSettings();

    expect (mockRouter.navigate).toHaveBeenCalledWith (['/settings']);

  })

});
