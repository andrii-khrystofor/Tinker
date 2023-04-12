import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContactsPipe } from './pipes/search-contacts/search-contacts.pipe';

const DECLARATIONS = [
  SearchContactsPipe
]

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule
  ],
  exports: DECLARATIONS
})
export class SharedModule { }
