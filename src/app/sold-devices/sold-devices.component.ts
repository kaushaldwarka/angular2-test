import { Component, OnInit } from '@angular/core';
import {SoldDevicesService} from "./sold-devices.service";
import {SoldDevices} from "./sold-devices";

@Component({
  selector: 'app-sold-devices',
  templateUrl: './sold-devices.component.html',
  styleUrls: ['./sold-devices.component.css']
})
export class SoldDevicesComponent implements OnInit {

  devices: SoldDevices[];
  constructor(private soldDeviceService: SoldDevicesService) {  }

  getSoldDevices(): void {
    this.soldDeviceService.getSoldDevices().subscribe(
      (response) =>
      {
        this.devices = response}
    );
  }
  ngOnInit(): void {
    this.getSoldDevices();
  }

}
