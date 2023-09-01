import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GlobalStatusBarComponent } from './global-status-bar/global-status-bar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GlobalStatusBarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
