import styled, {css} from 'styled-components';

export const StyledLabelPill = styled.span`
  display: inline-block;
  border-radius: 12px;
  padding: 0 1em;
  border: 1px solid;
  cursor: pointer;
  
  ${props => props.active ? css`
    color: white !important;
  ` : css`
    background-color: transparent !important;
  `}
`;