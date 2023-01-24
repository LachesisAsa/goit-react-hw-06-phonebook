import styled from '@emotion/styled';

export const Item = styled.li`
display: flex;
align-items: center;
gap: 15px;
`;

export const Button = styled.button`
display: inline-block;
padding: 5px 10px;
border-radius: 25px;
background-color: grey;
font-size: 12px;
&:hover {
  background-color: red;
}
`;