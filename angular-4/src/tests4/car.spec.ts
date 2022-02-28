import { Car } from 'src/app/model/car';

describe('Car', () => {
  it('should create an instance', () => {
    expect(new Car()).toBeTruthy();
  });

  it('car should contain the correct properties', () => {
    const car = new Car();
    expect(typeof car.id !== 'undefined').toBeTruthy();
    expect(typeof car.model !== 'undefined').toBeTruthy();
    expect(typeof car.make !== 'undefined').toBeTruthy();
    expect(typeof car.year !== 'undefined').toBeTruthy();
    expect(typeof car.price !== 'undefined').toBeTruthy();
    expect(typeof car.stock !== 'undefined').toBeTruthy();
  });
});
