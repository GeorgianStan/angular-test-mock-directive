import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoCmpComponent } from './components/demo-cmp.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DemoCmpComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
