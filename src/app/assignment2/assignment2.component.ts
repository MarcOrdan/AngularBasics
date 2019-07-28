import { Component } from '@angular/core';

@Component({
  selector: 'assignment2',
  templateUrl: './assignment2.component.html',
})
export class Assignment2Component {
  userName = '';
  allowButton = true;

  clearText() {
    this.userName = '';
  }
}
