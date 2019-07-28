import { Component } from '@angular/core';

@Component({
  selector: 'assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  displayText = false;
  displayMessage = 'Message is now showing';
  log = [];
  onToggleDisplay() {
    this.displayText = !this.displayText;
    this.log.push(this.log.length + 1);
  }
}
