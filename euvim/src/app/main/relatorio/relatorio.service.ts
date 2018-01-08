import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class RelatorioService {

  constructor(private _httpClient:HttpClient ) { }

  private _urlRelatorio = environment.URL+"relatorio";

  getPresencaDisciplina(filter){
    let httpParams = new HttpParams().append("dataInicio",filter.dataInicio)
                                     .append("dataFim",filter.dataFim);
    return this._httpClient.get<Array<any>>(this._urlRelatorio+"/"+filter.disciplina, {params:httpParams});
  }
}