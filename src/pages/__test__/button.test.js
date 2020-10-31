import React from 'react';
import ReactDom from 'react-dom';
import Button from '../ResultMovie';

import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders buttons correctly', () => {
 const {getByTestId} = render(<Button>Add To WatchList</Button>);
 expect(getByTestId('button')).toHaveTextContent('Add To WatchList');
});

it('matches snapshot', () => {
 const tree = renderer.create(<Button>Add</Button>).toJSON();
 expect(tree).toMatchSnapshot();
});