import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  question: string = '';
  response: string = '';
  loading: boolean = false;

  constructor(private apiService: ApiService) { }

  ask() {
    this.response = ''
    this.loading = true;
    this.apiService.ask(this.question).subscribe((data: any) => {
      this.loading = false;
      this.response = data.response;
    }, (error) => {
      this.loading = false;
      console.error(error);
    });
  }
}
