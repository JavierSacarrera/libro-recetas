import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRecetaComponent } from './inicio-receta.component';

describe('InicioRecetaComponent', () => {
  let component: InicioRecetaComponent;
  let fixture: ComponentFixture<InicioRecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioRecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
