import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor,fakeBackendProvider } from './_helpers';


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
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { FilterPipe} from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutBreedComponent,
    CatDetailComponent,
    GalleryComponent,
    SearchComponent,
    WelcomeComponent,
    MapComponent,
    LoginComponent,
    UpdateCatComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ModalModule,
    LeafletModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
