import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePerfilComponent } from './route-perfil.component';

describe('RoutePerfilComponent', () => {
  let component: RoutePerfilComponent;
  let fixture: ComponentFixture<RoutePerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutePerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
