import * as React from 'react';
import styled from 'styled-components';

const Component = styled.p`
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    margin: 0 0 1em 0;
    line-height: 1.5em;
    letter-spacing: .5px;
`;

const ParagraphComponent: React.FunctionComponent = ({ children }) => (<Component>{children}</Component>);

export { ParagraphComponent };
