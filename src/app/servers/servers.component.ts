import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', //element type- best
    //selector:'[app-servers]',//attribute type
    selector:'.app-servers',//class type
 // templateUrl: './servers.component.html'
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
