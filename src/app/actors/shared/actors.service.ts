import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

import { CONFIG } from "../../config";
import { IActor } from "../../shared/interfaces";

const actorsUrl = CONFIG.baseUrls.users;

@Injectable()
export class ActorsService {


  constructor(private http: Http) {   }


  getActors(): Observable<IActor[]> {
    return this.http.get(actorsUrl).
    map(res => this.extractData<IActor[]>(res))
  }

  //Usage of generics to calculate data
  private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }

    const body = res.json ? res.json() : null;

    return <T>(body && body.data || {});
  }


}
