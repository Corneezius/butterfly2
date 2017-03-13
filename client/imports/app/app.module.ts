import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IdeasPage } from '../pages/ideas/ideas';
import { MyApp } from './app.component';
// import { NewIdeaComponent } from '../pages/ideas/new-idea';


@NgModule({
  declarations: [
    MyApp,
    IdeasPage,
    // NewIdeaComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsPlacement:'bottom'}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IdeasPage,
    // NewIdeaComponent
  ],
  providers: [
  { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
