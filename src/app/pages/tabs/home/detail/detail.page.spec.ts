import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { DetailPage } from './detail.page';

describe('DetailPage', () => {
  let component: DetailPage;
  let fixture: ComponentFixture<DetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([]), HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPage);
    component = fixture.componentInstance;
    component.indice="dolar"
    fixture.detectChanges();

  }));

  it('should create', () => {
    component.indice="dolar";
    expect(component).toBeTruthy();
  });
});
