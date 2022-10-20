import styled from 'styled-components'

export const Button = styled.button`
display: flex;
margin: 0 auto;
background: #8d00ff;
border-radius: 3px;
color: #fff;
height: 32px;
display: block;
width: 50%;
text-align: center;
&[disabled]{
    opacity: .3
}
 `
