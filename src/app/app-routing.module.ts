import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'}, 
  {path:'home',canActivate:[AuthenticationGuard], component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',canActivate:[AuthenticationGuard],component:AboutComponent},
  {path:'movies',canActivate:[AuthenticationGuard],component:MoviesComponent},
  {path:'moviesDetails',canActivate:[AuthenticationGuard],component:MoviesDetailsComponent},
  {path:'tv',canActivate:[AuthenticationGuard],component:TvComponent},
  {path:'people',canActivate:[AuthenticationGuard],component:PeopleComponent},
  {path:'network',canActivate:[AuthenticationGuard],component:NetworkComponent},
  {path:'moviedetails/:type/:id',component:MoviesDetailsComponent},
  {path:'**',component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
