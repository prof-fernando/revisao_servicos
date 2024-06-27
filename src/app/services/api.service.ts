import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public listarCursos(nomecurso?: string): Observable<any> {
    // listar todos os curso do IFFAr
    let url = 'https://dados.iffarroupilha.edu.br/api/v1/cursos.json';
    if (nomecurso) {
      url = url + '?nome=' + nomecurso;
    }

    return this.http.get<any>(url);
  }
}
