import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('the sausage dog should have lightblue background', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.debugElement.nativeElement;
    const container = compiled.querySelector('.container');
    const prop = window.getComputedStyle(container).getPropertyValue('background-color');
    expect(prop).toEqual('rgb(212, 230, 255)');
  });

});
