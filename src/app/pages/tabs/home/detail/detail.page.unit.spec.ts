import { LastValues } from './../../../../interfaces/mindicador';
import { Component } from '@angular/core';
import { DetailPage } from './detail.page';

import { MindicadorService } from './../../../../services/mindicador.service';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';

import mockLastValues from 'src/mocks/lastValues';

class FakeActivatedRoute extends ActivatedRoute {
    params:Observable<any> = of('indice');
  }
  class MockActivatedRoute extends ActivatedRoute {
    constructor() {
        super();
        this.params = of({indice: "dolar"});
    }
}
describe('DetailPage Unit', () => {

  let page: DetailPage;
  let serviceAPI = new MindicadorService( null );

  beforeEach( () => {
    page = new DetailPage(new MockActivatedRoute, serviceAPI, null );
  });

  it('should call to server when getIndiceDataFromApi() is called', () => {

    const spy = spyOn( serviceAPI, 'getLast30Values').and.callFake(() => of(null));

    page.getDataFromApi('dolar');

    expect( spy ).toHaveBeenCalled();

  });

  it('should return array when extractGraphData() is called', () => {

    const response = page.extractGraphData( mockLastValues );

    expect( response.length  ).toBeGreaterThanOrEqual(1);

  });

});
