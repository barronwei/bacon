import React from 'react';
import styled from 'styled-components';
import styledMap from 'styled-map';

const Text = styled.p`
  text-align: center;
  font-size: ${styledMap`
    header: 2rem;
    caption: 1rem;
  `}
  color: ${styledMap`
    header: #000000;
    caption: #AFAFAF;
  `}
`

export default Text;