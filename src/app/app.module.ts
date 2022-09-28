import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { PassService } from './services/pass.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
