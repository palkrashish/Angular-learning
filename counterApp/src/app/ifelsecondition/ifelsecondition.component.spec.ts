import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseconditionComponent } from './ifelsecondition.component';

describe('IfelseconditionComponent', () => {
  let component: IfelseconditionComponent;
  let fixture: ComponentFixture<IfelseconditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfelseconditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfelseconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
