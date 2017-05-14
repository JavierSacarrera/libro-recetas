import { TestBed, inject } from '@angular/core/testing';

import { RecetaService } from './receta.service';

describe('RecetaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecetaService]
    });
  });

  it('should ...', inject([RecetaService], (service: RecetaService) => {
    expect(service).toBeTruthy();
  }));
});
