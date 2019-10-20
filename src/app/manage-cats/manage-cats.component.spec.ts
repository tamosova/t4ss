import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCatsComponent } from './manage-cats.component';

describe('ManageCatsComponent', () => {
  let component: ManageCatsComponent;
  let fixture: ComponentFixture<ManageCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
