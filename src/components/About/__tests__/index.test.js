// need react to enable the components to function properly so they can be tested
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
// importing component we'll be testing
import About from '..';
import { render, cleanup } from '@testing-library/react';

// ensures that after each test we won't have any leftover memory data that could give up false results
afterEach(cleanup);

// declare the component we're testing
describe('About component', () => {
    // renders About test
    // First test - verify the component is rendering
    it('renders', () => {
        render(<About />)
    });
    // Second test - compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        // Render About
        // asFragment returns snapshot of About
        const { asFragment } = render(<About />)
        // expect function with matcher to assert something about a value
        expect(asFragment()).toMatchSnapshot();
    })
})