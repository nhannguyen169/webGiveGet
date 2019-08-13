import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { QlbcComponent } from '../../qlbc/qlbc.component';
import { QlspComponent } from '../../qlsp/qlsp.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'qlbc',           component: QlbcComponent },
    { path: 'qlsp',           component: QlspComponent },
    { path: 'typography',     component: TypographyComponent }

];
