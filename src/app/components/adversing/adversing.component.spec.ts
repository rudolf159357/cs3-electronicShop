import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdversingComponent } from './adversing.component';

describe('AdversingComponent', () => {
  let component: AdversingComponent;
  let fixture: ComponentFixture<AdversingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdversingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdversingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
