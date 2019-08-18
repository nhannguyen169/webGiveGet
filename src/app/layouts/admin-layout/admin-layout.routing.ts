import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { QlbcComponent } from '../../qlbc/qlbc.component';
import { QlspComponent } from '../../qlsp/qlsp.component';
import { QluserComponent } from '../../qluser/qluser.component';
import { MapsComponent } from '../../maps/maps.component';
import { QllsgdComponent } from '../../qllsgd/qllsgd.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'qlbc',           component: QlbcComponent },
    { path: 'qlsp',           component: QlspComponent },
    { path: 'qluser',     component: QluserComponent },
    { path: 'qllsgd',     component: QllsgdComponent }
];
