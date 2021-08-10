import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { IndiceComponent } from './indice.component';
import { Router } from '@angular/router';

describe('IndiceComponent', () => {

  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  let component: IndiceComponent;
  let fixture: ComponentFixture<IndiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiceComponent ],
      imports: [IonicModule.forRoot(),
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        { provide: Router, useValue: mockRouter},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IndiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should redirect to detail Page', () =>{

    const fixture = TestBed.createComponent(IndiceComponent);
    const component = fixture.componentInstance;
    const indice = 'dolar';
    component.getDetail( indice );

    expect (mockRouter.navigate).toHaveBeenCalledWith ([`tabs/home/detail/${ indice }`]);

  })

});
