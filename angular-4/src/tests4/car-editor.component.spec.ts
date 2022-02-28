import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

import { CarEditorComponent } from 'src/app/page/car-editor/car-editor.component';

import { callWithTester } from './utils';

const mockCar: Car = { "id": 44, "model": "Mazdaspeed 3", "make": "Mazda", "year": 2008, "price": 31250, "stock": 38, "active": true };

describe('CarEditorComponent', () => {
  let component: CarEditorComponent;
  let fixture: ComponentFixture<CarEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarEditorComponent],
      imports: [
        RouterTestingModule,
        FormsModule,
      ],
      providers: [
        {
          provide: CarService,
          useValue: {
            get(id: number): Observable<Car> {
              return of(mockCar);
            },
            update(entity: Car): Observable<Car> {
              return of(mockCar);
            },
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 44 }),
          },
        },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should exist', () => {
    const form = fixture.debugElement.nativeElement.querySelector(
      'form'
    );
    expect(form).toBeTruthy();
  });

  // VALIDATION

  // {"id":44,"model":"Mazdaspeed 3","make":"Mazda","year":2008,"price":31250,"stock":38,"active":true};
  it('model should not be empty', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input: HTMLInputElement = fixture.debugElement.nativeElement.querySelector(
      'form input[name=model]'
    );
    input.value = '';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );
    expect(sendButton.disabled).toBeTruthy();
  });

  it('model should be title case', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input: HTMLInputElement = fixture.debugElement.nativeElement.querySelector(
      'form input[name=model]'
    );
    input.value = 'hello';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );
    expect(sendButton.disabled).toBeTruthy();
  });

  it('model should be at least 2 chars long', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input: HTMLInputElement = fixture.debugElement.nativeElement.querySelector(
      'form input[name=model]'
    );
    input.value = 'H';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );
    expect(sendButton.disabled).toBeTruthy();
  });

  // {"id":44,"model":"Mazdaspeed 3","make":"Mazda","year":2008,"price":31250,"stock":38,"active":true};
  it('make should be validated', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.nativeElement.querySelector(
      'form input[name=make]'
    );

    input.value = '';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );
    expect(sendButton.disabled).toBeTruthy();
  });

  it('make should be title case', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.nativeElement.querySelector(
      'form input[name=make]'
    );

    input.value = 'hello';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );
    expect(sendButton.disabled).toBeTruthy();
  });

  it('make should be at least 3 chars long', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.nativeElement.querySelector(
      'form input[name=make]'
    );

    input.value = 'H';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );
    expect(sendButton.disabled).toBeTruthy();
  });

  // {"id":44,"model":"Mazdaspeed 3","make":"Mazda","year":2008,"price":31250,"stock":38,"active":true};
  it('year should be validated', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.nativeElement.querySelector(
      'form input[name=year]'
    );

    input.value = '';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );
    expect(sendButton.disabled).toBeTruthy();
  });

  // {"id":44,"model":"Mazdaspeed 3","make":"Mazda","year":2008,"price":31250,"stock":38,"active":true};
  it('price should be validated', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.nativeElement.querySelector(
      'form input[name=price]'
    );

    input.value = '';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );
    expect(sendButton.disabled).toBeTruthy();
  });

  // {"id":44,"model":"Mazdaspeed 3","make":"Mazda","year":2008,"price":31250,"stock":38,"active":true};
  it('stock should be validated', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.nativeElement.querySelector(
      'form input[name=stock]'
    );

    input.value = '';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );
    expect(sendButton.disabled).toBeTruthy();
  });

  it('onUpdate should be called with the car', async () => {
    callWithTester(fixture, 'form button', 'onUpdate', expect, mockCar);
    // fixture.detectChanges();
    // await fixture.whenStable();



    // const onUpdateSpy = jest.spyOn<CarEditorComponent, any>(component, 'onUpdate');

    // const sendButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector(
    //   'form button'
    // );
    // sendButton.click();

    // fixture.detectChanges();
    // await fixture.whenStable();

    // expect(onUpdateSpy).toHaveBeenCalledWith(mockCar);
  });

});
