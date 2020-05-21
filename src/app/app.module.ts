import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentWithTableExampleComponent } from './component-with-table-example/component-with-table-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentWithTableExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
