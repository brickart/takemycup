import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 44px;
    font-family: "Roboto Slab", serif;
    margin: 0;
    line-height: 1.2em;
    margin-bottom: 0.5em;
    letter-spacing: 1.5px;
`;

const TitleComponent: React.FunctionComponent = ({ children }) => (<Title>{children}</Title>);

export { TitleComponent };
