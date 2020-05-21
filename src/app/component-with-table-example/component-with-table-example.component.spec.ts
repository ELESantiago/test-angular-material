import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithTableExampleComponent } from './component-with-table-example.component';

describe('ComponentWithTableExampleComponent', () => {
  let component: ComponentWithTableExampleComponent;
  let fixture: ComponentFixture<ComponentWithTableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentWithTableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
