import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '/', component: HomeComponent },
  { path: '/about-us', component: AboutUsComponent },
  { path: '/contact-us', component: ContactUsComponent },
  { path: '/login', component: LoginComponent },
  { path: '**', redirectTo: '' } // Redirects any unknown paths to Home
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
