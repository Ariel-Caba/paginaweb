import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteInicioComponent } from './route-inicio.component';

describe('RouteInicioComponent', () => {
  let component: RouteInicioComponent;
  let fixture: ComponentFixture<RouteInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
