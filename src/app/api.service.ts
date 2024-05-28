import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ask(question: string) {
    return this.http.post(`${this.apiUrl}/ask`, { message: question });
  }

  download() {
    return this.http.get(`${this.apiUrl}/download_knowledge_base`, { responseType: 'blob' });
  }

  upload(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/upload_knowledge_base`, formData);
  }
}
