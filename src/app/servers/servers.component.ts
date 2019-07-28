import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*For selectors you can use [app-servers] or .app-servers then put it into a e.g div in app.component.html file */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
