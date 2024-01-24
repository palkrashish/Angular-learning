import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikecommentComponent } from './likecomment.component';

describe('LikecommentComponent', () => {
  let component: LikecommentComponent;
  let fixture: ComponentFixture<LikecommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikecommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LikecommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
