import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { switchMap, EMPTY } from 'rxjs';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss'],
})
export class CarEditorComponent {
  constructor(
    private carService: CarService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  isDelHidden: boolean = true;

  carForm = this.formBuilder.group({
    id: ['', [Validators.required]],
    model: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(15),
        Validators.pattern(/^[A-Z].*/),
      ],
    ],
    make: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[A-Za-z]*$/),
      ],
    ],
    year: ['', [Validators.required, Validators.pattern(/^[1-9]*$/)]],
    price: ['', [Validators.required, Validators.pattern(/^[0-9]{3,4,5}$/)]],
    stock: [
      '',
      [Validators.required, Validators.pattern(/^(?:[1-9]|[1-4][0-9]|50)$/)],
    ],
    active: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          if (params['id'] !== '0') {
            this.isDelHidden = false;
            return this.carService.get(params['id']);
          } else {
            return EMPTY;
          }
        })
      )
      .subscribe((car) => {
        this.carForm.setValue(car);
      });
  }

  onUpdate() {
    this.carService.update(this.carForm.value).subscribe(() => {});
  }
}
