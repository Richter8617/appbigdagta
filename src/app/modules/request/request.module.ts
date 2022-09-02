import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { DialogComponent, RequestComponent } from './components/request/request.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    RequestComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    MaterialModule,
  ]
})
export class RequestModule { }
