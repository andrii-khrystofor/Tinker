import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureExampleComponent } from './feature-example.component';

describe('FeatureExampleComponent', () => {
  let component: FeatureExampleComponent;
  let fixture: ComponentFixture<FeatureExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
