import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private username: string;
  private client_id = '718afbc8f75f826c5658';
  private client_secret = 'cea932fd5b52a21afbb960b47a7f3e1de14c2704';

  constructor(private _http: HttpClient )  {
      this.username = 'samuel830';
  }

  getUser()  {
      return this._http.get('https://api.github.com/users/' + this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .pipe(map(res => res));
  }

  getRepos(){
      return this._http.get('https://api.github.com/users/' + this.username + '/repos'+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .pipe(map(res => res));
  }

  updateUser(username: string){
    this.username = username;
  }
}
