import { MindicadorService } from './../../../../services/mindicador.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Observable, of } from 'rxjs';

import { DetailPage } from './detail.page';

class FakeActivatedRoute {
  params:Observable<any> = of('indice');
}

class FakeMindicadorService {
  getLast30Values(){}
}

describe('DetailPage', () => {
  let component: DetailPage;
  let fixture  : ComponentFixture<DetailPage>;
  let servicio = new MindicadorService(null);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([]), HttpClientModule],
      providers: [
        {provide:ActivatedRoute, useClass:FakeActivatedRoute},
        {provide:MindicadorService, use:servicio}
      ]
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
