import { BrowserXhr } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CustExtBrowserXhr extends BrowserXhr {

  constructor() {
    super();
  }

  build(): any {
    const xhr = super.build();
    xhr.withCredentials = true;
    return <any>(xhr);
  }

}
