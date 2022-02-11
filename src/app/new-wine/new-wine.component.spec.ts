import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWineComponent } from './new-wine.component';

describe('NewWineComponent', () => {
  let component: NewWineComponent;
  let fixture: ComponentFixture<NewWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
