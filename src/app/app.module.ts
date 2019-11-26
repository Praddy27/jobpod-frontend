import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule,
  MatCheckboxModule, MatDialogModule, MatDatepickerModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { LoginComponent } from './page/login/login.component';
import { LoginCompanyComponent } from './page/logincompany/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { RegisterEmployeeComponent } from './page/registeremployee/register.component';

import { ProfileCandidateComponent} from './dashboard/profilecandidate/profile.component';
import { LockComponent } from './page/lock/lock.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { CompanyPodPageComponent } from './dashboard/component/company-pod-page/company-pod-page.component';
import { PodCreateFormComponent } from './dashboard/component/pod-create-form/pod-create-form.component';
import { ViewPodUsersComponent } from './dashboard/component/view-pod-users/view-pod-users.component';
import { PanelsComponent } from './dashboard/component/panels/panels.component';

import { SettingsService } from './services/settings.service';
import { ApiService } from './services/api.service';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';

import { HttpClientModule } from '@angular/common/http';
import { SidebarCompanyComponent } from './sidebar-company/sidebar-company.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    LoginCompanyComponent,
    RootComponent,
    RegisterComponent,
    RegisterEmployeeComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent,
    ProfileCandidateComponent,
    SidebarCompanyComponent,
    CompanyPodPageComponent,
    PodCreateFormComponent,
    ViewPodUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule
  ],
  providers: [SettingsService, ApiService],
  entryComponents: [PodCreateFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
