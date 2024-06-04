import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularNewsCardComponent } from './regular-news-card.component';

describe('RegularNewsCardComponent', () => {
  let component: RegularNewsCardComponent;
  let fixture: ComponentFixture<RegularNewsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegularNewsCardComponent]
    });
    fixture = TestBed.createComponent(RegularNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
