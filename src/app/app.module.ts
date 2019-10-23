import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';


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
import { FilterPipe } from './filter.pipe';
import { ManageCatsComponent } from './manage-cats/manage-cats.component';
import { TailsGeneticsComponent } from './tails-genetics/tails-genetics.component';
import { ParentSelfValidatorDirective } from './_validators/parents-self.directive';
import { BirthdayFutureValidatorDirective } from './_validators/birthday-future.directive';
import { NameUniqueValidatorDirective } from './_validators/name-unique-validator-directive.directive';
import { CatPreviewComponent } from './cat-preview/cat-preview.component';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';


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
    FilterPipe,
    ManageCatsComponent,
    TailsGeneticsComponent,
    ParentSelfValidatorDirective,
    BirthdayFutureValidatorDirective,
    NameUniqueValidatorDirective,
    CatPreviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ModalModule,
    LeafletModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MasonryGalleryModule
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
