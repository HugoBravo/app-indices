import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MindicadorService } from './mindicador.service';

describe('MindicadorService', () => {
  
  let service: MindicadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MindicadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
