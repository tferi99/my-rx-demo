import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './component/page-header/page-header.component';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule],
  exports: [PageHeaderComponent],
})
export class SharedModule {}
