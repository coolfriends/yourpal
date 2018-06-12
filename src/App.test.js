import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer'

test('user can start a basic hello responding discord bot', () => {
  const component = renderer.create(
    <App></App>
  )
  let tree = component.toJSON();
  expect()
  ReactDOM.unmountComponentAtNode(div);
});
