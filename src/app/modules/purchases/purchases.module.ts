import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    MaterialModule
  ]
})
export class PurchasesModule { }
