import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GregDateService {
  private url = 'http://localhost:8080/api/';

  public constructor(private httpClient: HttpClient) {
  }

  public convert(date: any): Observable<any> {
    return this.httpClient.post<any>(
      this.url + date.getFullYear() + '/' + date.getMonth() + '/' + date.getDay(),
      null,
      {withCredentials: false}
    );
  }

}
