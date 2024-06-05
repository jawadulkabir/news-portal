import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  links: Category[] = [
    { name: 'Latest', url: '/latest', isActive: false },
    { name: 'Business', url: '/category/business', isActive: false },
    { name: 'Crime', url: '/category/crime', isActive: false },
    { name: 'Politics', url: '/category/politics', isActive: false },
    { name: 'Education', url: '/category/education', isActive: false },
    { name: 'Tourism', url: '/category/tourism', isActive: false },
    { name: 'Science', url: '/category/science', isActive: false },
    { name: 'Sports', url: '/category/sports', isActive: false },
    { name: 'Food', url: '/category/food', isActive: false },
    { name: 'Health', url: '/category/health', isActive: false },
  ];
}
