import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contacts-component/contacts-component.component';

@Pipe({
  name: 'contactToString'
})
export class ContactToStringPipe implements PipeTransform {

  transform(value: Contact, args?: any): string {
    return `${value.name} ${value.surname}`;
  }

}
