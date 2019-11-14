import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CleanUnusualCharactersDirective } from '../directives/clean-unusual-characters.directive';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, CleanUnusualCharactersDirective],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
