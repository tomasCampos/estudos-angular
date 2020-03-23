import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _client: HttpClient) { }

  getBeer() {
    return this._client.get('https://api.openbrewerydb.org/breweries');
  }
}
