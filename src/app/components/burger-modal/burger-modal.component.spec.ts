import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerModalComponent } from './burger-modal.component';

describe('BurgerModalComponent', () => {
  let component: BurgerModalComponent;
  let fixture: ComponentFixture<BurgerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
