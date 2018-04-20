import { EditDialogComponent } from './dialogs/edit-dialog/edit-dialog.component';
import { Datastore } from './services/datastore';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonApiModule } from 'angular2-jsonapi';
import { LoginComponent } from './components/login/login.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AppRoutingModule } from './components/app-routing/app-routing.module';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserReadComponent } from './components/user-read/user-read.component';
import { UserService } from './services/userService/user-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { LocationService } from './services/location.service';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { LocationListComponent } from './components/home/location-list/location-list.component';
import { RemoveDialogComponent } from './dialogs/remove-dialog/remove-dialog.component';
import { CreateDialogComponent } from './dialogs/create-dialog/create-dialog.component';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: []
})
export class AngularMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserReadComponent,
    HomeComponent,
    LocationListComponent,
    EditDialogComponent,
    RemoveDialogComponent,
    CreateDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonApiModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFDAhXM4QGRxQIUJBV3702hUnYdm-p4w0'
    })
  ],
  entryComponents: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserReadComponent,
    LocationListComponent,
    EditDialogComponent,
    RemoveDialogComponent,
    CreateDialogComponent
  ],
  providers: [
    Datastore,
    UserService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }