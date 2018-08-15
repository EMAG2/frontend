import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserXhr } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarMenuComponent } from './dashboard/sidebar-menu/sidebar-menu.component';
import { SuportComponent } from './dashboard/suport/suport.component';
import { GeneratorComponent } from './dashboard/generator/generator.component';
import { Error404ComponentComponent } from './dashboard/error404-component/error404-component.component';
import { BreadcrumbComponent } from './dashboard/breadcrumb/breadcrumb.component';
import { DoYouNeedHelpComponent } from './do-you-need-help/do-you-need-help.component';
import { SuportService } from './dashboard/suport/suport.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CustExtBrowserXhr } from './utils/custExtBrowserXhr.model';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarMenuComponent,
    SuportComponent,
    GeneratorComponent,
    Error404ComponentComponent,
    BreadcrumbComponent,
    DoYouNeedHelpComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: BrowserXhr, useClass: CustExtBrowserXhr },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    SuportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
