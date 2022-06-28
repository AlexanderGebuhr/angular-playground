import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [CommonModule, MatIconModule, FormsRoutingModule],
  declarations: [FormsComponent],
})
export class FormsModule {}
