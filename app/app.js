import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/feed';
import { getFeedData, createComment } from './server';

ReactDOM.render(
  <Feed />,
  document.getElementById('fb-feed')
);
