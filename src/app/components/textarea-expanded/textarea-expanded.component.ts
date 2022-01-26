import { Component, forwardRef, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const EXPANDED_TEXTAREA_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextareaExpandedComponent),
  multi: true,
};

@Component({
  selector: 'app-textarea-expanded',
  providers: [EXPANDED_TEXTAREA_VALUE_ACCESSOR],
  templateUrl: './textarea-expanded.component.html',
  styleUrls: ['./textarea-expanded.component.scss']
})
export class TextareaExpandedComponent implements ControlValueAccessor {
  @ViewChild('textarea') textarea: any;

  onChange: any = () => { };
  onTouched: any = () => { };
  touched = false;
  disabled = false;
  value: string;
  label: string = "Title";

  ngAfterViewInit() {
    let div = this.textarea.nativeElement;
    this.renderer.setProperty(div, 'textContent',  this.value);
  }
  constructor(private renderer: Renderer2) {
    this.value = "";
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  change($event: any) {
    if (this.onChange) {
      this.onChange($event.target.textContent);
      this.value = $event.target.textContent;
      this.onChange(this.value);
    }

  }

  setDisabledState(isDisabled: boolean): void {
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }
}
