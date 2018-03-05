import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactsComponentComponent } from './contacts-component/contacts-component.component';
import { ContactsListComponentComponent } from './contacts-list-component/contacts-list-component.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactToStringPipe } from './contact-to-string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponentComponent,
    ContactsListComponentComponent,
    ContactDetailsComponent,
    ContactToStringPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
