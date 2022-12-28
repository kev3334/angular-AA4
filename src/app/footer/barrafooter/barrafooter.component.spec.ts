import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrafooterComponent } from './barrafooter.component';

describe('BarrafooterComponent', () => {
  let component: BarrafooterComponent;
  let fixture: ComponentFixture<BarrafooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarrafooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarrafooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
