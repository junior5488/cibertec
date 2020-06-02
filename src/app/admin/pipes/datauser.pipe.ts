import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'datauser',
})
export class DataUserPipe implements PipeTransform {
  transform(user) {
    console.log('Cabecera... ', user);
    //return 'lol';
    return `${user.name} ${user.lastName} - ${user.role}`;
  }
}
