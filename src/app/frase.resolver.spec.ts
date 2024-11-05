import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { fraseResolver } from './frase.resolver';

describe('fraseResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => fraseResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
