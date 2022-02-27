import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { DestinationHalifaxComponent } from './destination-halifax/destination-halifax.component';
import { DestinationMonctonComponent } from './destination-moncton/destination-moncton.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'halifax', component: DestinationHalifaxComponent },
  { path: 'moncton', component: DestinationMonctonComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
