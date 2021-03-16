import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  // define your fields
  // this keeps reference to the local storage
  localStorage: Storage;
  result!: any;

  constructor() {
    // set it here, when do we store things in the constructor?
    // when we want access to the variable i guess, ok
    // does it matter if it's private or public?
    this.localStorage = window.localStorage;
  }

  // this method checks if local storage is supported by the browser
  get isLocalStorageSupported(): boolean {
    // this.localStorage may or may not return something i guess
    // so this.localStorage might originally return, say, an object
    // however we want it to be a boolean, which is why we use !! (type coerces)
    return !!this.localStorage;
  }

  // for the rest of the methods, we need to always check if local storage is supported before we continue
  // first time upon visitng page, we'll set it
  // then when we get, it's based on how many we said we'll get
  // set and remove return boolean types, just so we know if it went thru

  // when you set you have to stringify
  set(key: string, value: any) {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }

  // when you get you have to parse the info
  get(key: any): any {
    if (this.isLocalStorageSupported) {
      // return type can return string or null
      // since jsonparse needs a string, should try to test result before it is used
      this.result = JSON.parse(this.localStorage.getItem(key));
      return this.result;
    }
  }

  // all of this will be injected in the app
}
