import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDisplayComponent } from './comment-display.component';

describe('CommentDisplayComponent', () => {
  let component: CommentDisplayComponent;
  let fixture: ComponentFixture<CommentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
