import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoInferiorComponent } from './conteudo-inferior.component';

describe('ConteudoInferiorComponent', () => {
  let component: ConteudoInferiorComponent;
  let fixture: ComponentFixture<ConteudoInferiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoInferiorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
