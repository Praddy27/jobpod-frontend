/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ProfileCandidateComponent} from './dashboard/profilecandidate/profile.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent} from './dashboard/component/panels/panels.component';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { LoginCompanyComponent } from './page/logincompany/login.component';
import { LockComponent } from './page/lock/lock.component';
import { RegisterComponent } from './page/register/register.component';
import { RegisterEmployeeComponent } from './page/registeremployee/register.component';

import { CompanyPodPageComponent } from './dashboard/component/company-pod-page/company-pod-page.component';
import { ViewPodUsersComponent } from './dashboard/component/view-pod-users/view-pod-users.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'loginCompany', component: LoginCompanyComponent},
  {path: 'lock', component: LockComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'registerCompany', component: RegisterEmployeeComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profileCompany', component: ProfileComponent},
    {path: 'profileCandidate', component: ProfileCandidateComponent},
    {path: 'table', component: TableComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'alert', component: SweetAlertComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'components/price-table', component: PriceTableComponent},
    {path: 'components/company-pod-page', component: CompanyPodPageComponent},
    {path: 'components/view-pod-users', component: ViewPodUsersComponent},
    {path: 'components/panels', component: PanelsComponent},
    {path: 'components/wizard', component: WizardComponent}
  ]}
];

export const routing = RouterModule.forRoot(routes);

