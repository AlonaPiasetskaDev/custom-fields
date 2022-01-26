import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextareaExpandedComponent } from './components/textarea-expanded/textarea-expanded.component';
import { FormComponent } from './components/form/form.component';
import { RateInputComponent } from './components/rate-input/rate-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    TextareaExpandedComponent,
    FormComponent,
    RateInputComponent,
    CustomSelectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
