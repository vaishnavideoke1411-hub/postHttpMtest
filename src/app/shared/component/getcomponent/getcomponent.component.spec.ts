import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcomponentComponent } from './getcomponent.component';

describe('GetcomponentComponent', () => {
  let component: GetcomponentComponent;
  let fixture: ComponentFixture<GetcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
