import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { ApiserviceService } from './apiservice.service';

describe('ApiserviceService', () => {
  let service: ApiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({      imports: [RouterTestingModule,HttpClientModule],
    });
    service = TestBed.inject(ApiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
