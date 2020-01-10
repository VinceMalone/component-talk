import React from 'react';

export const Small = ({ children, size = '85%' }) => (
  <div style={{ fontSize: size }}>{children}</div>
);
