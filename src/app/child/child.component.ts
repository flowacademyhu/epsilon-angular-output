import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {

  // #1 sima EventEmitterrel való felküldés a szülő komponensnek, ami elkapja az adatod, majd kiíratja a konzolra
  @Output() simpleValue = new EventEmitter();
  editedValue = 0;

  // #2 inputba beírt adatok, gombnyomásra való felküldése a szülő komponensnek
  @Output() writeValue = new EventEmitter();
  writeVal: string;

  // #3 checkbox value felküldésre a szülő komponensnek, a labelre kattintva
  @Output() checkValue = new EventEmitter();
  checkBoxVal;

  // #4 input mező értékének felküldése ngOnChange segítségével
  @Output() writeChange = new EventEmitter();
  changeVal: string;

  constructor() { }

  ngOnInit() {
  }

  // #1
  public addValue() {
    this.editedValue = this.editedValue + 10;
    this.simpleValue.emit(this.editedValue);
  }

  // #2
  public write() {
    this.writeValue.emit(this.writeVal);
  }

  // #3
  public check() {
    this.checkValue.emit(!this.checkBoxVal);
  }

  // #4
  public changeWrite(value) {
    this.writeChange.emit(value);
  }
}
