import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.css']
})
export class KnowledgeBaseComponent {
  constructor(private apiService: ApiService) { }

  download() {
    this.apiService.download().subscribe((data) => {
      const blob = new Blob([data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    }, (error) => {
      console.error(error);
    });
  }

  upload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.apiService.upload(file).subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.error(error);
      });
    }
  }
}
