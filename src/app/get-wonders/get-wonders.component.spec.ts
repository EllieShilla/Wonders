import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWondersComponent } from './get-wonders.component';

describe('GetWondersComponent', () => {
  let component: GetWondersComponent;
  let fixture: ComponentFixture<GetWondersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetWondersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
