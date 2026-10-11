import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashComponent } from './shared/component/post-dash/post-dash.component';
import { PostFormComponent } from './shared/component/post-form/post-form.component';
import { PostCardComponent } from './shared/component/post-card/post-card.component';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GetConfirmComponent } from './shared/component/getcomponent/getcomponent.component';
import { MatButtonModule } from '@angular/material/button';
// import { GetcomponentComponent } from './shared/component/getcomponent/getcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDashComponent,
    PostFormComponent,
    PostCardComponent,
    GetConfirmComponent
    // GetcomponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

