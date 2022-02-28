const { animals, animalFilter } = require('../1-JS/main');

describe('JS test for a list of animals', () => {

    test('Empty array', () => {
        const results = animalFilter(animals, 387, 9);
        expect(results.length).toBe(0);
    });
    
    test('One animal found', () => {
        const results = animalFilter(animals, 385, 9);
        expect(results.length).toBe(1);
    });
    
    test('Two animals found', () => {
        const results = animalFilter(animals, 300, 8);
        expect(results.length).toBe(2);
        expect(results[0]).toBe('Common zorro');
        expect(results[1]).toBe('Owl, snowy');
    });
    
    test('Five animals found', () => {
        const results = animalFilter(animals, 300, 10);
        expect(results.length).toBe(5);
    });
    
    test('The result contains the correct names', () => {
        const results = animalFilter(animals, 100, 9);
        expect(results.length).toBe(3);
        expect(results[0]).toBe('Common zorro');
        expect(results[1]).toBe('Coot, red-knobbed');
        expect(results[2]).toBe('Owl, snowy');
    });    
    
});