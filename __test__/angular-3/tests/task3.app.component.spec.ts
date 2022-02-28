import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Construction } from 'src/app/model/construction';
import { ConstructionService } from 'src/app/service/construction.service';
import { AppComponent } from '../app/app.component';
import listMock from './list.mock';

import constructionList from './list.mock';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: ConstructionService,
          useValue: {
            getAll(): Observable<Construction[]> {
              return of(constructionList);
            }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('onDelete method should be exist', () => {
    expect(app.onDelete).toBeTruthy();
    expect(app.onDelete instanceof Function).toBeTruthy();
  });

  it('table should exist', async () => {
    const table = fixture.debugElement.nativeElement.querySelector(
      'table'
    );

    expect(table).toBeTruthy();
  });

  it('table rows should exist', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const rows = fixture.debugElement.nativeElement.querySelectorAll(
      'table tbody tr'
    );

    expect(rows.length).toBe(5);
  });

  it('data should be exist in table row', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const cells = fixture.debugElement.nativeElement.querySelectorAll(
      'table tbody tr:first-child td'
    );

    expect(cells[0].textContent).toMatch(/1/);
    expect(cells[1].textContent).toMatch(/Plastic/);
    expect(cells[2].textContent).toMatch(/Carpenter/);
    expect(cells[3].textContent).toMatch(/Vehicular/);
    expect(cells[4].textContent).toMatch(/2015/);
    expect(cells[5].textContent).toMatch(/true/);
  });

  it('delete button should be exist in table row', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const button = fixture.debugElement.nativeElement.querySelector(
      'table tbody tr:first-child button'
    );

    expect(button).toBeTruthy();
  });

  it('onDelete method should be called when user clicks to del button', async () => {
    fixture.detectChanges();

    const delSpy = spyOn<AppComponent, any>(app, 'onDelete');

    const button = fixture.debugElement.nativeElement.querySelector(
      'table tbody tr:first-child button'
    );
    button.click();

    await fixture.whenStable();
    expect(delSpy).toHaveBeenCalledWith(listMock[0]);
  });

});
