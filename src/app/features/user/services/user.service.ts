import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../../core/models/user.model';
import { DUMMY_USERS } from '../../../core/data/dummy-user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): Observable<User[]> {
    return of (DUMMY_USERS);
  }

  constructor() { }
}
