import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  align-items: baseline;
  color: #2a3742;
  display: inline-flex;
  font-family: sans-serif;
  font-size: 0.666666667em;
  font-weight: 400;
  line-height: 1.5em;
  padding: ${props => (props.boxed ? '0.5em 0.75em' : '0')};
  position: relative;
`;

const Input = styled.input`
  border: none;
  box-sizing: border-box;
  display: block;
  height: 100%;
  left: 0;
  margin: 0;
  opacity: 0;
  outline: none;
  padding: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Visual = styled.span`
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  height: 1.25em;
  position: relative;
  width: 1.25em;
  z-index: 1;

  ::before {
    background-color: white;
    border: 0.0625em solid #c1c5c8;
    border-radius: 0.125em;
    box-sizing: border-box;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: background-color 0.2s ease, border-color 0.2s ease;
    width: 100%;
  }

  ${Input}:checked ~ &::before {
    background-color: #006dd4;
    border-color: #006dd4;
  }

  ::after {
    border: solid white;
    border-width: 0 0.125em 0.125em 0;
    box-sizing: border-box;
    content: '';
    height: 0.5em;
    left: 50%;
    position: absolute;
    top: calc(50% - 0.0625em);
    transform: translate(-50%, -50%) rotate(40deg) scale(0);
    transition: border-width 0s 0.2s linear, transform 0.2s cubic-bezier(0.71, 1.75, 0.75, 0.96);
    width: 0.3em;
    will-change: transform;
  }

  ${Input}:checked ~ &::after {
    transform: translate(-50%, -50%) rotate(40deg) scale(1.25);
    transition: border-width 0.2s ease, transform 0.2s cubic-bezier(0.71, 1.75, 0.75, 0.96);
  }
`;

const Background = styled.span`
  background-color: ${props => (props.boxed ? '#f9f9f9' : 'transparent')};
  border-radius: 0.1875em;
  cursor: pointer;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;

  ${Label}:hover & {
    background-color: ${props => (props.boxed ? '#e5f4fb' : 'transparent')};
  }
`;

const Text = styled.span`
  cursor: pointer;
  flex-grow: 1;
  margin-left: 1em;
  position: relative;
  z-index: 1;
`;

export const Checkbox = ({ boxed = false, children, className, style, ...props }) => {
  return (
    <Label boxed={boxed} className={className} style={style}>
      <Input {...props} type="checkbox" />
      <Background boxed={boxed} />
      <Visual>&#8203;</Visual>
      <Text>{children}</Text>
    </Label>
  );
};
