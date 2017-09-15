import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from "angular2-token";

@Injectable()
export class BaseService {

  constructor(public authTokenService: Angular2TokenService) { 
  }

  // Set URL Headers
	public headers = new Headers({ 
		'Content-Type': 'application/json', 
		'access-token': this.authTokenService.currentAuthData.accessToken,
		'client': this.authTokenService.currentAuthData.client,
		'expiry': this.authTokenService.currentAuthData.expiry,
		'uid': this.authTokenService.currentAuthData.uid
	});
	public options = new RequestOptions({ headers: this.headers });

	// Access Id of signed in user
  public userId = this.authTokenService.currentUserData.id;

  // API Error handling
	public handleError (error: Response | any) {
		console.error('ApiService::handleError', error);
		alert(error.status + ' : ' + error._body);
		return Observable.throw(error);
	}

}
