import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

test('Button', () => {
    const component = renderer.create(
        <Button>Click</Button>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
