import styled from "styled-components";


export const Conteiner = styled.div`
        text-align:center;
        background-color:#131521;
        width:60%;
        position:absolute;
        left:50%;
        transform:translate(-50%);
        top:10%;
        
        
`
export const form = styled.form`

`

export const title = styled.h1`
        font-size:2.2em;
        color:#f1f1f1
`
export const formconteiner =styled.div`

   background:transparent;
    color:#fff;

`

export const input = styled.input`
    padding:10px 15px;
    background:transparent;
    border:2px solid #5d0cff;
    outline:none;
    width:250px;
    color:#fff;
    &::placeholder{
        color:#fff
    }
`

export const button = styled.button`
    padding:12px 15px;
    border:none;
    cursor:pointer;
    color:#fff;
    background:linear-gradient(90deg,rgba(93,12,255,1)0%,rgba(155,0,250,1)100%);
    text-transform:capitalize;
    position:relative;
    left:-70px;

    
`
export const edit = styled.button`
    padding:12px 15px;
    border:none;
    cursor:pointer;
    color:#fff;
    background:linear-gradient(90deg,rgba(93,12,255,1)0%,rgba(155,0,250,1)100%);
    text-transform:capitalize;
    visibility:hidden;
`
export const Table = styled.div`
  width: 90%;
  padding: 20px;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
`;



export const Tr = styled.div`
  width:100%;
  padding-top:25px;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

export const Td = styled.label`
  color: ${props => (props.checked ? 'green' : 'white')}; 
  width:33%;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  cursor: ${props => props.icon ? 'pointer': 'default'}

`

export const Button = styled.button`
    background:white;
    cursor: pointer;
    padding:5px 3px;
    width:50%;
    height:15%;
    font-size:15px
    


`;



export const Input = styled.input`
    height:15%;
    width:80%;
    position:relative;
`
export const sla = styled.button`
    margin-top:20px;
    padding:12px 15px;
    border:none;
    cursor:pointer;
    color:black;
    text-transform:capitalize;
    `