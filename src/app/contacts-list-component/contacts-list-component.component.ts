import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CONTACTS, Contact } from '../contacts-component/contacts-component.component';

@Component({
  selector: 'app-contacts-list-component',
  templateUrl: './contacts-list-component.component.html',
  styleUrls: ['./contacts-list-component.component.css']
})
export class ContactsListComponentComponent implements OnInit {

  public contacts = CONTACTS;

  @Output() selectedContact = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(contact: Contact): void {
    this.selectedContact.emit(contact);
  }
}
