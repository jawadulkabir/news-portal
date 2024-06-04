import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = "";
  constructor(private router: Router) {}

  onClick(): void {
    if(this.searchTerm)
      this.router.navigate(['/search',this.searchTerm]);
  }

  onInputBlur(): void {
    
  }
}
