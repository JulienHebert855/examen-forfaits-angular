import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import pour aller à l'API
import { HttpClientModule } from '@angular/common/http';
import { ForfaitService } from './forfait.service';

//import modules Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { HalifaxPipe } from './halifax.pipe';
import { VedettePipe } from './vedette.pipe';
import { DestinationHalifaxComponent } from './destination-halifax/destination-halifax.component';
import { DestinationMonctonComponent } from './destination-moncton/destination-moncton.component';
import { MonctonPipe } from './moncton.pipe';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitCompletComponent,
    HalifaxPipe,
    VedettePipe,
    DestinationHalifaxComponent,
    DestinationMonctonComponent,
    MonctonPipe,
    NavComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
