import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { KakapoComponent } from './kakapo/kakapo.component';
import { FairyTernComponent } from './fairy-tern/fairy-tern.component';
import { TakaheComponent } from './takahe/takahe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    KakapoComponent,
    FairyTernComponent,
    TakaheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
