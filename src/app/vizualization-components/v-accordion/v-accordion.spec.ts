import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAccordion } from './v-accordion';

describe('Accordion', () => {
  let component: VAccordion;
  let fixture: ComponentFixture<VAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VAccordion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VAccordion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
