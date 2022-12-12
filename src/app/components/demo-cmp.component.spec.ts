import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCmpComponent } from './demo-cmp.component';

describe('DemoCmpComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoCmpComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DemoCmpComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('p').innerHTML).toBe(
      'demo-cmp works!'
    );
  });
});
