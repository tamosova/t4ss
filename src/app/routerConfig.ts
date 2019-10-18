import { Routes } from '@angular/router';
import { AboutBreedComponent } from './about-breed/about-breed.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchComponent } from './search/search.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component'
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { UpdateCatComponent } from './update-cat/update-cat.component';
import { AddCatComponent } from './add-cat/add-cat.component';

const appRoutes: Routes = [
  { path: 'home', 
    component: WelcomeComponent 
  },
  {
    path: 'about',
    component: AboutBreedComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'detail/:id',
    component: CatDetailComponent
  },
  {
    path: 'catteries-map',
    component: MapComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'update',
    component: UpdateCatComponent
  },
  {
    path: 'add',
    component: AddCatComponent
  }
];
export default appRoutes;