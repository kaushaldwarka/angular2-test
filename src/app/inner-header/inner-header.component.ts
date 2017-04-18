import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'inner-header',
  templateUrl: './inner-header.component.html',
  styleUrls: ['./inner-header.component.css']
})
export class InnerHeaderComponent implements OnInit {

  constructor(private _location: Location) { }

  goBack():void{
    this._location.back();
  }

  ngOnInit() {
  }

}
