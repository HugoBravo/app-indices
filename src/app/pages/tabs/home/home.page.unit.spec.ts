
import { HomePage } from './home.page';
import { MindicadorService } from '../../../services/mindicador.service';
import { of } from 'rxjs';

describe('HomePage Unit', () => {

  let page: HomePage;
  let serviceAPI = new MindicadorService( null );

  beforeEach( () => {
    page = new HomePage( serviceAPI, null, null );
  });

  it('should call to server when getIndiceDataFromApi() is called', () => {

    const spy = spyOn( serviceAPI, 'getValues').and.callFake(() => of(null));

    page.getIndiceDataFromApi();

    expect( spy ).toHaveBeenCalled();

  });

});
