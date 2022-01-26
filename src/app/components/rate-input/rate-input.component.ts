import { Component, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rate-input',
  templateUrl: './rate-input.component.html',
  styleUrls: ['./rate-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RateInputComponent),
    multi: true
  }]
})
export class RateInputComponent implements ControlValueAccessor {
  @Input() label?: string;

  constructor() {
    this.value = 0;
  }

  onChange: any = () => { }
  onTouch: any = () => { }
  touched = false
  disabled = false
  value: number;

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn
  }
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  setStar(index: number): void {
    this.value = index + 1;
    this.onChange(this.value)
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouch()
      this.touched = true
    }
  }


}
