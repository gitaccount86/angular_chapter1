import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistItemComponent } from './artist-item/artist-item.component';
import { SearchArtistPipe } from './search-artist.pipe';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistItemComponent,
    SearchArtistPipe,
    ArtistDetailsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
