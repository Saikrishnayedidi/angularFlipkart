import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterheaderComponent } from './filterheader.component';

describe('FilterheaderComponent', () => {
  let component: FilterheaderComponent;
  let fixture: ComponentFixture<FilterheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
