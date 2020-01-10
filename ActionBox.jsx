import React from 'react';
import styled from 'styled-components';

const sizes = {
  compact: '2em',
  normal: '2.5em',
  comfortable: '3em',
};

const Action = styled.button`
  border: 0.125em solid transparent;
  border-radius: 0.1875em;
  box-sizing: border-box;
  font-family: sans-serif;
  font-size: 0.666666667em;
  font-weight: 400;
  height: ${props => sizes[props.size]};
  outline: none;
  padding: 0 1em;
`;

const Primary = styled(Action)`
  background-color: #006dd4;
  border-color: #006dd4;
  color: white;
`;

const Secondary = styled(Action)`
  border-color: #006dd4;
  color: #006dd4;
`;

const Tertiary = styled(Action)`
  color: #006dd4;
`;

const appearances = {
  primary: Primary,
  secondary: Secondary,
  tertiary: Tertiary,
};

export const ActionBox = ({ appearance = 'primary', children, size = 'normal', ...props }) => {
  const Component = appearances[appearance];
  return (
    <Component {...props} size={size}>
      {children}
    </Component>
  );
};
