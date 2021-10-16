import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LearnSymolModel } from '../shared/models/learn-symbol.model';
import { RecognizeTextModel } from '../shared/models/recognize-text.model';

@Injectable({
  providedIn: 'root'
})
export class NeiroNetService {
  private readonly baseUrl: string = 'https://localhost:44325/api/NeiroNet/';

  constructor(private readonly http: HttpClient) { }

  public recognizeText(model: RecognizeTextModel): Observable<any> {
    return this.http.post(`${this.baseUrl}Recornize`, model);
  }

  public learnSymbol(model: LearnSymolModel): Observable<any> {
    return this.http.post(`${this.baseUrl}Learn`, model);
  }
}
