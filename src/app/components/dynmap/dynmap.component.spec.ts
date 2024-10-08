import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynmapComponent } from './dynmap.component';

describe('DynmapComponent', () => {
  let component: DynmapComponent;
  let fixture: ComponentFixture<DynmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
