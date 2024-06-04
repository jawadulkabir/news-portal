import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularNewsComponent } from './regular-news.component';

describe('RegularNewsComponent', () => {
  let component: RegularNewsComponent;
  let fixture: ComponentFixture<RegularNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularNewsComponent]
    });
    fixture = TestBed.createComponent(RegularNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
