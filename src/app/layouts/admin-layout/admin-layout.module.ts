import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';
import {NgxPaginationModule} from 'ngx-pagination';  
import { Ng2SearchPipeModule } from 'ng2-search-filter';  
import { HomeComponent } from '../../home/home.component';
import { QlbcComponent } from '../../qlbc/qlbc.component';
import { QlspComponent } from '../../qlsp/qlsp.component';
import { QluserComponent } from '../../qluser/qluser.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { QllsgdComponent } from '../../qllsgd/qllsgd.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})
  ],
  declarations: [
    HomeComponent,
    QlbcComponent,
    QlspComponent,
    QluserComponent,
    IconsComponent,
    MapsComponent,
    QllsgdComponent
  ]
})

export class AdminLayoutModule {}
