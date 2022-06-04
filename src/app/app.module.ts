import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DescriptionBarComponent } from './components/description-bar/description-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { DescriptionCardComponent } from './components/description-card/description-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavbarComponent,
    DescriptionBarComponent,
    SearchPipe,
    DescriptionCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
