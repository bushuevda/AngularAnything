import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAp } from './c-ap';

describe('CAp', () => {
  let component: CAp;
  let fixture: ComponentFixture<CAp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CAp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
