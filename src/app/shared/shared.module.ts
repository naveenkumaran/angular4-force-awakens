import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CapsPipe } from './caps.pipe';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  /** Export modules that has to be used by other components */
  exports: [
    CommonModule, FormsModule, CapsPipe
  ],
  declarations: [CapsPipe]
})
export class SharedModule { }
