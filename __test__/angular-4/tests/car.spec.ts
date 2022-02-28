import { Car } from 'src/app/model/car';

describe('Car', () => {
  it('should create an instance', () => {
    expect(new Car()).toBeTruthy();
  });

  it('car shuld contain the right properties', () => {
    const car = new Car();
    expect(typeof car.id !== 'undefined').toBeTrue();
    expect(typeof car.model !== 'undefined').toBeTrue();
    expect(typeof car.make !== 'undefined').toBeTrue();
    expect(typeof car.year !== 'undefined').toBeTrue();
    expect(typeof car.price !== 'undefined').toBeTrue();
    expect(typeof car.stock !== 'undefined').toBeTrue();
  });
});
