import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IdeasPage } from '../pages/ideas/ideas';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    IdeasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsPlacement:'bottom'}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IdeasPage
  ],
  providers: [
  { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
