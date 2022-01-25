
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Chart } from 'chart.js';

import { GraphComponent } from './graph.component';

describe('GraphComponent', () => {
  let component: GraphComponent;
  let fixture: ComponentFixture<GraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit ('should create an instance of Chart when lineChartMethod is called', () =>{

    const fakeLabels = ['uno', 'dos', 'tres'];
    const fakeSerie = [1, 2, 3];
    component.indice = 'USD';
    


    component.lineChartMethod( fakeLabels, fakeSerie );
    console.log('component.lineChart',component.lineChart);
    
    expect( component.lineChart instanceof Chart).toBeTruthy();

  });

});
