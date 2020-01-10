import * as Deck from 'mdx-deck';
import React from 'react';

export const Notes = ({ children }) => (
  <Deck.Notes>
    <div style={{ fontSize: '16px' }}>foo {children}</div>
  </Deck.Notes>
);
