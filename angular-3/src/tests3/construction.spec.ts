import { Construction } from '../app/model/construction';

describe('Construction', () => {
  it('should create an instance', () => {
    expect(new Construction()).toBeTruthy();
  });

  it('Construction properties should exist', () => {
    const instance = new Construction();
    expect( typeof instance.id !== 'undefined' ).toBeTruthy();
    expect( typeof instance.cost_code !== 'undefined' ).toBeTruthy();
    expect( typeof instance.material !== 'undefined' ).toBeTruthy();
    expect( typeof instance.price !== 'undefined' ).toBeTruthy();
    expect( typeof instance.trade !== 'undefined' ).toBeTruthy();
  });
});
