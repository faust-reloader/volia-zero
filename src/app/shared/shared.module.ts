import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class SharedModule {
}
