import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutBreedComponent } from './about-breed/about-breed.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { ModalModule } from './_modal';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import appRoutes from './routerConfig';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutBreedComponent,
    CatDetailComponent,
    GalleryComponent,
    SearchComponent,
    WelcomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ModalModule,
    LeafletModule.forRoot()
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
