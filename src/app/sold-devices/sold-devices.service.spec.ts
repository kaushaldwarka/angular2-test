/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SoldDevicesService } from './sold-devices.service';

describe('SoldDevicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoldDevicesService]
    });
  });

  it('should ...', inject([SoldDevicesService], (service: SoldDevicesService) => {
    expect(service).toBeTruthy();
  }));
});
