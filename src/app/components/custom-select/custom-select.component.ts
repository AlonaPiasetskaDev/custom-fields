import { Component, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ESelectData } from 'src/app/consts/data';


@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomSelectComponent),
    multi: true
  }]
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() selectedItem?: string;
  items: string[];
  show = false;
  title: string = "Select item";

  toArray(en: any) {
    return Object.keys(en).map(key => en[key])
  }

  constructor() {
    this.value = "";
    this.items = this.toArray(ESelectData);
    console.log(this.items);
  }


  onChange: any = () => { }
  onTouch: any = () => { }
  toggle: any = () =>  {
    this.show = !this.show;
  };

  touched = false;
  disabled = false;
  value: string;

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setOption(value: string): void {
    this.value = value;
    this.title = value;
    this.onChange(this.value);
    this.toggle();
    console.log(value);
  }
}
