import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileMo } from '../model/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private readonly server = 'http://localhost:8080/files';

  constructor(private http : HttpClient) { }

  getAllFiles() : Observable<FileMo[]> {
    return this.http.get<FileMo[]>(`${this.server}`);
  }

  upload(file : FormData) : Observable<FormData> {
    return this.http.post<FormData>(this.server, file);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.server}/${id}`);
  }

}
