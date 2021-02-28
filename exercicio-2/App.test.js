import React from 'react';
import renderer from 'react-test-renderer';


import App from './App';

describe ('when click the generate buttons', () => {
  it ('generates six numbers', () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree.children.length).toBe(1);
  })
});