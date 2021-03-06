import { Routes } from '@angular/router';
import { AboutBreedComponent } from './about-breed/about-breed.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SearchComponent } from './search/search.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component'
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { ManageCatsComponent } from './manage-cats/manage-cats.component';
import { TailsGeneticsComponent } from './tails-genetics/tails-genetics.component';
import { AuthGuard } from './_helpers';

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
    path: 'manage',
    canActivate: [AuthGuard],
    component: ManageCatsComponent
  },
  {
    path: 'tails',
    component: TailsGeneticsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
export default appRoutes;