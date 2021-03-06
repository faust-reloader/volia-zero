import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KokanRoutingModule } from './kokan-routing.module';
import { KokanComponent } from './kokan.component';
import { KokanModalComponent } from './kokan-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    KokanRoutingModule,
    SharedModule,
  ],
  declarations: [
    KokanComponent,
    KokanModalComponent,
  ]
})
export class KokanModule {
}
