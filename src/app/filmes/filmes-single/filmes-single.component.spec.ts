import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesSingleComponent } from './filmes-single.component';

describe('FilmesSingleComponent', () => {
  let component: FilmesSingleComponent;
  let fixture: ComponentFixture<FilmesSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
