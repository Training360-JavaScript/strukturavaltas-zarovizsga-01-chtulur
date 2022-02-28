import { interval, take } from 'rxjs';
import { Component } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";

export interface IFixtureComponent extends Component {
  [key: string]: any;
}

export const callTester = (
  fixture: ComponentFixture<IFixtureComponent>,
  selectorOrElement: string | HTMLElement,
  methodName: string,
  expector: any
): void => {
  const component: IFixtureComponent = fixture.componentInstance;

  jest.spyOn(component, methodName);

  const element = typeof selectorOrElement === 'string'
    ? fixture.debugElement.nativeElement
      .querySelector(
        selectorOrElement
      )
    : selectorOrElement;
  element.click();
  fixture.detectChanges();

  fixture.whenStable().then( () => {
    expector(component[methodName]).toHaveBeenCalled();
  });
};

export const callWithTester = (
  fixture: ComponentFixture<IFixtureComponent>,
  selectorOrElement: string | HTMLElement,
  methodName: string,
  expector: any,
  withData: any,
): void => {
  const component: IFixtureComponent = fixture.componentInstance;

  jest.spyOn(component, methodName);

  const element = typeof selectorOrElement === 'string'
    ? fixture.debugElement.nativeElement
      .querySelector(
        selectorOrElement
      )
    : selectorOrElement;
  element.click();
  fixture.detectChanges();

  fixture.whenStable().then( () => {
    expector(component[methodName]).toHaveBeenCalledWith(withData);
  });
};

export const getElements = (
  fixture: ComponentFixture<IFixtureComponent>,
  selector: string,
): NodeListOf<HTMLElement> => {
  return (fixture.debugElement.nativeElement as HTMLElement).querySelectorAll(
    selector
  );
};

export const checkInputValue = (
  fixture: ComponentFixture<IFixtureComponent>,
  selector: string,
  reg: RegExp,
): boolean => {
  const input: NodeListOf<HTMLInputElement> =
      (getElements(fixture, selector) as NodeListOf<HTMLInputElement>);
    return input.length > 0 && input[0] && reg.test(input[0].value);
}

export const clickOn = (
  fixture: ComponentFixture<IFixtureComponent>,
  selectorOrElement: string | HTMLElement,
): void => {
  const element = typeof selectorOrElement === 'string'
    ? fixture.debugElement.nativeElement
      .querySelector(
        selectorOrElement
      )
    : selectorOrElement;
  element.click();
  fixture.detectChanges();
}

export const updateInputValue = async (
  fixture: ComponentFixture<IFixtureComponent>,
  selectorOrElement: string | HTMLInputElement,
  newValue: string,
): Promise<HTMLInputElement> => {

  const input = typeof selectorOrElement === 'string'
    ? fixture.debugElement.nativeElement
      .querySelector(
        selectorOrElement
      )
    : selectorOrElement;
  if (!input || !(input instanceof HTMLInputElement)) {
    throw new Error(`This input does not exist: ${selectorOrElement}`);
  }

  input.value = newValue;
  input.dispatchEvent( new Event('input') );
  fixture.detectChanges();

  await fixture.whenStable();

  return input;
};

export const getPrivateProperty = (instance: any, propName: string) => {
  return Object.getOwnPropertyDescriptors(instance)[propName]?.value;
};

export const waitUntil = async (untilTruthy: Function): Promise<boolean> => {
  while (!untilTruthy()) {
    await interval(25).pipe(take(1)).toPromise();
  }
  return Promise.resolve(true);
};
