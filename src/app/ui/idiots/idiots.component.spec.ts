import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiotsComponent } from './idiots.component';

describe('IdiotsComponent', () => {
  let component: IdiotsComponent;
  let fixture: ComponentFixture<IdiotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
