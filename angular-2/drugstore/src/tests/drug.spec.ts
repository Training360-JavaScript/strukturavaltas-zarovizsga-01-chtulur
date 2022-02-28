import { Drug } from '../app/model/drug';

describe('Drug', () => {

  it('should create an instance', () => {
    expect(new Drug()).toBeTruthy();
  });

  it('variables with the correct types should be created', () => {
    const drug = new Drug();

    expect(typeof drug.id).toEqual('number');
    expect(typeof drug.name).toEqual('string');
    expect(typeof drug.brand).toEqual('string');
    expect(typeof drug.company).toEqual('string');
    expect(typeof drug.barcode).toEqual('string');
    expect(typeof drug.stock).toEqual('number');
  });

  it('variables with the correct default values should be created - numbers', () => {
    const drug = new Drug();

    expect(drug.id).toBe(1);
    expect(drug.stock).toBe(26);
  });

  it('variables with the correct default values should be created - strings', () => {
    const drug = new Drug();

    expect(drug.name).toContain('Escitalopram Oxalate');
    expect(drug.brand).toContain('Escitalopram');
    expect(drug.company).toContain('Major Pharmaceuticals');
    expect(drug.barcode).toContain('23-537-0123');
  });
});
