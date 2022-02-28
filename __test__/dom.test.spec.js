describe('Testing DOM manipulation', () => {
    const template = `
        <div class="quote">1st quote</div>
        <div>Not a quote</div>
        <div class="quote">2nd quote</div>
        <div>Not a quote</div>
        <p class="quote">3rd quote</p>
    `;

    beforeEach(() => {
        document.body.innerHTML = template;
    });

    test('Three elements found', () => {
        const targets = document.querySelectorAll(`.quote`);
        expect(targets.length).toBe(3);
    });

    test('One p and two div elements found', () => {
        const div = document.querySelectorAll(`div.quote`);
        expect(div.length).toBe(2);
        const p = document.querySelectorAll(`p.quote`);
        expect(p.length).toBe(1);
    });

    test('Elements with quote class have blue borders', () => {
        const { manipulateDom } = require('../1-DOM/dom');
        manipulateDom();
        const targets = document.querySelectorAll(`.quote`);
        expect(targets[0].style.borderColor).toBe('blue');
        expect(targets[1].style.borderColor).toBe('blue');
        expect(targets[2].style.borderColor).toBe('blue');
    });

    test('The background color of elements with quote class is lightblue', () => {
        const { manipulateDom } = require('../1-DOM/dom');
        manipulateDom();
        const targets = document.querySelectorAll(`.quote`);
        expect(targets[0].style.backgroundColor).toBe('lightblue');
        expect(targets[1].style.backgroundColor).toBe('lightblue');
        expect(targets[2].style.backgroundColor).toBe('lightblue');
    });

    test('The font style of elements with quote class is italic', () => {
        const { manipulateDom } = require('../1-DOM/dom');
        manipulateDom();
        const targets = document.querySelectorAll(`.quote`);
        expect(targets[0].style.fontStyle).toBe('italic');
        expect(targets[1].style.fontStyle).toBe('italic');
        expect(targets[2].style.fontStyle).toBe('italic');
    });

});