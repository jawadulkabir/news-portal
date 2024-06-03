import { Component } from '@angular/core';

import { MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  links = [
    { name: 'Latest', url: '/top', isActive: false },
    { name: 'Business', url: '/business', isActive: false },
    { name: 'Crime', url: '/crime', isActive: false },
    { name: 'Domestic', url: '/domestic', isActive: false },
    { name: 'Education', url: '/education', isActive: false },
    { name: 'Entertainment', url: '/entertainment', isActive: false },
    { name: 'Environment', url: '/environment', isActive: false },
    { name: 'Food', url: '/food', isActive: false },
    { name: 'Health', url: '/health', isActive: false },
    { name: 'Lifestyle', url: '/lifestyle', isActive: false }

  ];
}
