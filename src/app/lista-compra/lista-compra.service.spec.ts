import { TestBed, inject } from '@angular/core/testing';

import { ListaCompraService } from './lista-compra.service';

describe('ListaCompraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaCompraService]
    });
  });

  it('should ...', inject([ListaCompraService], (service: ListaCompraService) => {
    expect(service).toBeTruthy();
  }));
});
