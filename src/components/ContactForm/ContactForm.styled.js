import styled from '@emotion/styled';

export const FormContainer = styled.form`
width: 380px;
padding: 20px;
margin-bottom: 20px;
border: 2px solid black;
border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 24px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
display: inline-block;
padding: 4px;
border-radius: 5px;
background-color: grey;
font-size: 18px;
&:hover {
  background-color: yellow;
}
`;