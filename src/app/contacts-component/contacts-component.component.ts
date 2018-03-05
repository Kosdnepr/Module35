import { Component, OnInit } from '@angular/core';

export class Contact {
  name: string;
  surname: string;
}

@Component({
  selector: 'app-contacts-component',
  templateUrl: './contacts-component.component.html',
  styleUrls: ['./contacts-component.component.css'],
 
})
export class ContactsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedContact: Contact;

  displayContact($event) {
    this.displayedContact = $event;
  }
}

export const CONTACTS: Contact [] = [
  {name: "Ivan",  surname: "Krusenstern"},
  {name: "marilyn", surname: "manson"},
  {name: "Konstantin", surname: "Lupalo"},
  {name: "william", surname: "gates"},
  {name: "Brendan", surname: "Eich"}
];