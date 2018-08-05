import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-user',
  template: `
  <p>Hello {{ name }} from another Component</p>
  <input type="text" (input)="OnUserInput($event)" [value]="name">

  `
  // [(ngModel)]="name" angular will now bind in both direction two way biniding /
  // [value]="name" here we bind to the value property of the input element object
  // value="name" we set the value the attirbute to html
  // <input type="text" [(ngModel)]="name" >
  //
})
export class UserComponent {
@Input() name ;
@Output() nameChanged = new EventEmitter<String>();
OnUserInput(event) {
  // this.name = event.target.value;
  this.nameChanged.emit(event.target.value);
}

}
