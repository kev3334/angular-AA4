import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarralatComponent } from './barralat.component';

describe('BarralatComponent', () => {
  let component: BarralatComponent;
  let fixture: ComponentFixture<BarralatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarralatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarralatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
