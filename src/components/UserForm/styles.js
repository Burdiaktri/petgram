import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Form = styled.form`
    padding: 16px 0;
`

export const Link = styled(LinkRouter)`
margin-left: 50px;
padding-top: 10px;
`

export const Input = styled.input`
text-align: center;
margin: 0 auto;
display: flex;
border: 1px solid #ccc;
border-radius: 3px;
margin-bottom: 8px;
padding: 8px 4px;
display: block;
width: 80%;
&[disabled]{
    opacity: .3
}
`

export const Title = styled.h2`
margin-left: 50px;
font-size: 24px;
font-weight: 500;
padding-bottom: 8px;`

export const Error = styled.span`
color: red;
font-size: 14px;
&[disabled]{
    opacity: .3
}`
