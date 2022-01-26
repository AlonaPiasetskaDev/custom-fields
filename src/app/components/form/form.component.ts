import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidationService } from './services/validation.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private fb: FormBuilder, private _validation: ValidationService) {

  }
  public reviewForm: FormGroup;

  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'pattern': 'Please provide valid Email'
    },
    'name': {
      'required': 'Name is required.',
      'pattern': 'Please provide valid name'
    },
    'customComment': {
      'required': 'Comment is required.',
      'pattern': 'Comment should contain min 20 symbols.'
    },
  };



  public formErrors = {};

  ngOnInit() {
    this.reviewForm = this.fb.group({
      // Use explicit form controls
      email: new FormControl('', [Validators.required, Validators.pattern(this._validation.regex.email)]),
      comment: ['', Validators.required],
      name: ['', [Validators.required, Validators.pattern(this._validation.regex.name)]],
      rateItem: ['', Validators.required],
      rateService: ['', Validators.required],
      rateDelivery: ['', Validators.required],
      customComment: ['', [Validators.required, Validators.pattern(this._validation.regex.customComment)]],
      selectedSpaceship: ['', Validators.required]
    });

    this.reviewForm.valueChanges.subscribe(
      (value: any) => {
        this.logValidationErrors();
      }
    )
  }

  logValidationErrors() {
    this.formErrors = this._validation.getValidationErrors(this.reviewForm, this.validationMessages);
  }

  onSubmit() {
    console.log(this.reviewForm.value)
  }

}
