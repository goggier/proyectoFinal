import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

//MATERIAL
import { AngularMaterialModule } from '../../material/angular-material/angular-material.module';


@NgModule({
  declarations: [
    //AdminComponent,
    LayoutComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class AdminModule { }
