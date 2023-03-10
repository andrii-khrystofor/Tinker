import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFeatureExampleComponent } from './modal-feature-example.component';

describe('ModalFeatureExampleComponent', () => {
  let component: ModalFeatureExampleComponent;
  let fixture: ComponentFixture<ModalFeatureExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFeatureExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFeatureExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
