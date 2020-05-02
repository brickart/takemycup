import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    object-fit: cover;
    max-width: 100%;
    & img { width: 100%; }
`;

interface IProps {
    url: string;
}

const ImageComponent: React.FunctionComponent<IProps> = ({ url }) => (<Wrapper><img src={url}/></Wrapper>);

export { ImageComponent };
