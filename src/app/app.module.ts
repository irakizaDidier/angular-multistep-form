import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { StepTwoComponent } from './pages/step-two/step-two.component';
import { StepThreeComponent } from './pages/step-three/step-three.component';
import { StepFourComponent } from './pages/step-four/step-four.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    AsideNavComponent,
    ThankYouComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
