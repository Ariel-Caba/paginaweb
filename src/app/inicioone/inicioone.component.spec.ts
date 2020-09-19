import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciooneComponent } from './inicioone.component';

describe('IniciooneComponent', () => {
  let component: IniciooneComponent;
  let fixture: ComponentFixture<IniciooneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciooneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciooneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
