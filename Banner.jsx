import React from 'react';
import styled from 'styled-components';

const meta = {
  error: {
    primary: '#cc2e31',
    secondary: '#faebeb',
    icon: () => (
      <svg viewBox="0 0 24 20" width="1em" height="0.83333333em">
        <g fill="none">
          <path
            fill="currentColor"
            d="M1.118 19.806c.257.129.538.194.82.194h20.095c.28 0 .562-.065.82-.194.257-.152.468-.324.609-.56.327-.518.327-1.014.024-1.51L13.46.797a1.98 1.98 0 0 0-.632-.58A1.63 1.63 0 0 0 11.985 0a1.694 1.694 0 0 0-1.453.797L.486 17.737c-.304.495-.304.99.023 1.508.141.237.352.41.61.561z"
          />
          <path
            fill="#fff"
            d="M10.7 5h2.574a.2.2 0 0 1 .2.212l-.475 7.6a.2.2 0 0 1-.2.188h-1.624a.2.2 0 0 1-.2-.188l-.475-7.6A.2.2 0 0 1 10.7 5z"
          />
          <rect width="2" height="2" x="11" y="15" fill="#fff" rx=".2" />
        </g>
      </svg>
    ),
  },
  info: {
    primary: '#0096fa',
    secondary: '#e5f4fb',
    icon: () => (
      <svg viewBox="0 0 24 24" width="1em" height="1em">
        <g fill="none" fillRule="evenodd">
          <circle cx="12" cy="12" r="12" fill="currentColor" />
          <g fill="#fff" fillRule="nonzero" transform="translate(10 5)">
            <g transform="translate(0 4)">
              <rect width="2" height="10" x="1" rx=".2" />
              <rect width="2" height="2" rx=".2" />
              <rect width="4" height="2" y="8" rx=".2" />
            </g>
            <rect width="2" height="2" x="1" rx=".2" />
          </g>
        </g>
      </svg>
    ),
  },
  success: {
    primary: '#35ac19',
    secondary: '#e7f4e5',
    icon: () => (
      <svg viewBox="0 0 24 24" width="1em" height="1em">
        <g fill="none" fillRule="evenodd">
          <circle cx="12" cy="12" r="12" fill="currentColor" />
          <path
            fill="#fff"
            fillRule="nonzero"
            d="M10.423 14.509l5.8-7.14a1 1 0 1 1 1.553 1.262l-7.2 8.86-4.283-4.284a1 1 0 0 1 1.414-1.414l2.716 2.716z"
          />
        </g>
      </svg>
    ),
  },
};

const Container = styled.div`
  border: 0.0625em solid ${props => meta[props.bannerType].primary};
  border-radius: 0.1875em;
  display: flex;
  font-size: 0.666666667em;
`;

const IconBox = styled.div`
  background-color: ${props => meta[props.bannerType].secondary};
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  color: ${props => meta[props.bannerType].primary};
  display: inline-flex;
  font-size: 1.5em;
  line-height: 1;
  padding: 0.666666667em;
`;

const Content = styled.div`
  padding: 1em 2em 1em 1em;
`;

const Headline = styled.p`
  color: #2a3742;
  font-size: inherit;
  font-weight: 600;
  line-height: 1.5em;
  margin: 0;
`;

const Message = styled.p`
  color: #2a3742;
  font-size: inherit;
  font-weight: 400;
  line-height: 1.5em;
  margin: 0;
`;

export const Banner = ({ children, headline, type, ...props }) => {
  const Icon = meta[type].icon;
  return (
    <Container {...props} bannerType={type}>
      <IconBox bannerType={type}>
        &#8203;
        <Icon />
      </IconBox>
      <Content>
        {headline && <Headline>{headline}</Headline>}
        {children && <Message>{children}</Message>}
      </Content>
    </Container>
  );
};
