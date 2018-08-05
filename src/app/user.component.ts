import { Component } from '@angular/core';
@Component({
  selector: 'app-user',
  template: `
  <p>Hello {{ name }} from another Component</p>
  <input type="text" (input)="OnUserInput($event)">
  `

})
export class UserComponent {
name = 'faiz';
OnUserInput(event) {
  this.name = event.target.value;
}

}
