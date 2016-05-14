import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class ShareAmountService {
  constructor(private _http: Http) { }

 public getMembers() {
   return this._http.get('http://localhost:50528/Sampleservice.svc/creategroup')
      .map((response: Response) => {
        alert(response);
        let grpnm = response.json();
        return grpnm;
      })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
