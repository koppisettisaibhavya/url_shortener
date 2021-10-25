import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrartComponent } from './srart.component';

describe('SrartComponent', () => {
  let component: SrartComponent;
  let fixture: ComponentFixture<SrartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
