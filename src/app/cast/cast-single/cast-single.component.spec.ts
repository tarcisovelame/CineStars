import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastSingleComponent } from './cast-single.component';

describe('CastSingleComponent', () => {
  let component: CastSingleComponent;
  let fixture: ComponentFixture<CastSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
