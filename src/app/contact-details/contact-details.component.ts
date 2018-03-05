import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contacts-component/contacts-component.component';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input() displayedContact: Contact;

  constructor() { }

  ngOnInit() {
  }
}
