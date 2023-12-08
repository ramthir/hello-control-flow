import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionWithButtonComponent } from './interaction-with-button.component';

describe('InteractionWithButtonComponent', () => {
  let component: InteractionWithButtonComponent;
  let fixture: ComponentFixture<InteractionWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionWithButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractionWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
