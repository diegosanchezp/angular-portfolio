import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './pages/about/about.component'
import {AcademicsComponent} from './pages/academics/academics.component';
import {CertificationsComponent} from './pages/certifications/certifications.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component'

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'academics', component: AcademicsComponent},
  {
    path: 'projects', 
    loadChildren: ()=> import('./pages/projects/projects.module')
    .then(m=>m.ProjectsModule)
  },
  {path: 'certifications', component: CertificationsComponent},
  {path: '',   redirectTo: '/about', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent }, // 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
