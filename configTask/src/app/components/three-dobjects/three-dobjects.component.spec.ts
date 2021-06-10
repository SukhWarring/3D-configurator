import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDObjectsComponent } from './three-dobjects.component';

describe('ThreeDObjectsComponent', () => {
  let component: ThreeDObjectsComponent;
  let fixture: ComponentFixture<ThreeDObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
