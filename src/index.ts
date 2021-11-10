import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { userObject, addressObject } from './interfaces';
import { maxValue } from './constants';

of(1, 2, 3).pipe(map(x => {
    console.log(x);
    return x + '!!!';
})).subscribe(); // etc

console.log(maxValue());

let user: userObject = {};

user.firstName = 'AA';
user.lastName = 'BBBB';

const address: addressObject = {
    streetName: 'Margaretha Turnorlaan',
    houseNumber: '12'
}

console.log(user, address);