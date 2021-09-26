import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeiroNetService {
  private readonly baseUrl: string = 'https://localhost:44325/api/NeiroNet/';

  constructor(private readonly http: HttpClient) { }

  public recognizeText(): Observable<any> {
    return this.http.post(`${this.baseUrl}Recornize`, {});
  }

  public learnSymbol(): Observable<any> {
    return this.http.post(`${this.baseUrl}Learn`, {});
  }
}
