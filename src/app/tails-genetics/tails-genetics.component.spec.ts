import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailsGeneticsComponent } from './tails-genetics.component';

describe('TailsGeneticsComponent', () => {
  let component: TailsGeneticsComponent;
  let fixture: ComponentFixture<TailsGeneticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailsGeneticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailsGeneticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
