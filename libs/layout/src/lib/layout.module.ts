import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TuiRootModule, TuiThemeNightModule } from '@taiga-ui/core';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [CommonModule, RouterModule, TuiRootModule, TuiThemeNightModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
