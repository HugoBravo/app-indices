import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';

import { CalculatorPage } from './calculator.page';
import { HttpClientModule } from '@angular/common/http';

describe('CalculatorPage', () => {
  let component: CalculatorPage;
  let fixture: ComponentFixture<CalculatorPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorPage ],
      imports: [IonicModule.forRoot(),
        HttpClientModule,
        IonicStorageModule.forRoot({
          name: '__indicesdb',
          driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
        }),]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ion-title').textContent).toContain('Calculadora');
  });

  
});
