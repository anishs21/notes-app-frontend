
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './note.model';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class NotesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.apiUrl}/notes`, note);
  }

  updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/notes/${note._id}`, note);
  }

  deleteNote(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/notes/${id}`);
  }
}
