import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteRegistroComponent } from './route-registro.component';

describe('RouteRegistroComponent', () => {
  let component: RouteRegistroComponent;
  let fixture: ComponentFixture<RouteRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
