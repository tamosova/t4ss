import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPreviewComponent } from './cat-preview.component';

describe('CatPreviewComponent', () => {
  let component: CatPreviewComponent;
  let fixture: ComponentFixture<CatPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
