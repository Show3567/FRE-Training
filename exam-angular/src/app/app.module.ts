import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { DisplayResultComponent } from './display-result/display-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Material } from './libs';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, SearchArtistComponent, DisplayResultComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    Material,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [Material],
})
export class AppModule {}
