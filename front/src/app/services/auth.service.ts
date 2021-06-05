import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged$ = new BehaviorSubject(true);

  constructor() { }
}
