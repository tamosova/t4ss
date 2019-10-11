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

import appRoutes from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    AboutBreedComponent,
    CatDetailComponent,
    GalleryComponent,
    SearchComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ModalModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
