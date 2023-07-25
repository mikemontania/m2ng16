import { TestBed, async, inject } from '@angular/core/testing';

import { VerificaTokenGuard } from './verifica-token.guard';

describe('VerificaTokenGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificaTokenGuard]
    });
  });

  it('should ...', inject([VerificaTokenGuard], (guard: VerificaTokenGuard) => {
    expect(guard).toBeTruthy();
  }));
});
