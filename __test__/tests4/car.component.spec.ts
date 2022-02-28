import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CarComponent } from 'src/app/page/car/car.component';

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarComponent ],
      imports: [
        RouterTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button should exist', () => {
    const button = fixture.debugElement.nativeElement.querySelector(
      'button.btn-primary'
    );
    expect(button).toBeTruthy();
  });
});
