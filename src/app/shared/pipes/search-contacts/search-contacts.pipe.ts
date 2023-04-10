import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchContacts'
})
export class SearchContactsPipe implements PipeTransform {

  transform(contacts: any, searchKey: string): any {
    return contacts.filter((contact: { username: string | string[]; }) => contact.username?.includes(searchKey));
  }

}
