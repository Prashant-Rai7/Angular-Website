import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { TvComponent } from './product/tv/tv.component';
import { WmComponent } from './product/wm/wm.component';
import { AcComponent } from './product/ac/ac.component';
import { CoolerComponent } from './product/cooler/cooler.component';
import { FanComponent } from './product/fan/fan.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DesignutilityService } from './appServices/designutility.service';
import { SubjectComponent } from './subject/subject.component';
import {Comp1Component} from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { HooksComponent } from './hooks/hooks.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component'

const appRoutes:Routes=[

  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'product', component: ProductComponent, children:[

    {path:'laptop', component: LaptopComponent},
    {path:'mobile', component: MobileComponent},
    {path:'tv', component: TvComponent},
    {path:'ac', component: AcComponent},
    {path:'fan', component: FanComponent},
    {path:'cooler', component: CoolerComponent},
    {path:'washingmachine', component: WmComponent}
  ]},
  {path:'contact', component: ContactComponent},
  {path:'cart', component: ParentComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'forgot', component: ForgotpassComponent},
  {path:'subject', component: SubjectComponent},
  {path: '**', component: NotfoundComponent} //wild card route

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    NotfoundComponent,
    ProductComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    WmComponent,
    AcComponent,
    CoolerComponent,
    FanComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    HooksComponent,
    SignupComponent,
    ForgotpassComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
