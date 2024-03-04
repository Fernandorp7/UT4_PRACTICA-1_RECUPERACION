import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profesores } from './profesores';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ConexionJsonService {
  private profesoresUrl = 'http://localhost:3000/profesores';
  constructor(private http: HttpClient, private headers: HttpHeaders) {}

  getProfesores(): Observable<Profesores[]> {
    return this.http.get<Profesores[]>(this.profesoresUrl);
  }

  getProfesor(id: string): Observable<Profesores> {
    const url = `${this.profesoresUrl}/${id}`;
    return this.http.get<Profesores>(url);
  }
  
}
