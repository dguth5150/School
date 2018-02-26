import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Rule } from './rule.model';

@Injectable()
export class RuleService {

  selectedRule: Rule;
  ruleList: Rule[];
  constructor(private http: Http) { }

  postRule(rle: Rule) {
    var body = JSON.stringify(rle);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post('http://localhost:49975/api/Rules', body, requestOptions).map(x => x.json());
  }

  putRule(id, rle) {
    var body = JSON.stringify(rle);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Put, headers: headerOptions});
    return this.http.put('http://localhost:49975/api/Rules/' + id, 
    body, 
    requestOptions).map(res => res.json());
  }

  getRuleList(){
    this.http.get('http://localhost:49975/api/Rules')
    .map((data: Response) => {
      return data.json() as Rule[];
    }).toPromise().then(x => {
      this.ruleList = x;
    })
  }

  deleteRule(id: number) {
    return this.http.delete('http://localhost:49975/api/Rules/' + id).map(res => res.json());
  }
}
