import { TestBed } from '@angular/core/testing';

import { ConexionJsonService } from './conexion-json.service';

describe('ConexionJsonService', () => {
  let service: ConexionJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
