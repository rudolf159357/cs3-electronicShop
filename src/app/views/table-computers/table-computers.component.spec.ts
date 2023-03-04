import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComputersComponent } from './table-computers.component';

describe('TableComputersComponent', () => {
  let component: TableComputersComponent;
  let fixture: ComponentFixture<TableComputersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComputersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComputersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
