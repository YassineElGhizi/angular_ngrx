import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {PersonModule} from "./person/person.module";

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./person/home/home.component";
import {SecondPageComponent} from './secondPage/second-page/second-page.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'second_page', component: SecondPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    PersonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
