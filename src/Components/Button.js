import React from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';


const Button = styled.button`
 
  background: ${props => props.primary ? "#7b521f00" : "white"};
  color: ${props => props.primary ? "white" : "#7b521f00"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

render(
  <div>
    <Button  onClick={props => props.onClick}></Button>
    
  </div>
);

export default Button;