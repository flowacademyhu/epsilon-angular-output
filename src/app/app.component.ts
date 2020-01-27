import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'outputPractice';

  public simpleValueeeee: number;
  public writeValue: string;
  public checkBoxValue: boolean;
  public changeValue: string;

  // #1
  handleSimpleValue(value) {
    this.simpleValueeeee = value;
    console.log(this.simpleValueeeee);
  }

  // #2
  handleWriteValue(value) {
    this.writeValue = value;
    console.log(value);
  }

  // #3
  handleCheckBox(value) {
    this.checkBoxValue = value;
    console.log('checkbox', value);
  }

  // #4
  handleChange(value) {
    this.changeValue = value;
    console.log(value);
  }
}
