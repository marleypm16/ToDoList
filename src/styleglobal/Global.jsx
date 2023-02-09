import {createGlobalStyle} from 'styled-components'

 const Global = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background: linear-gradient(90deg,rgba(20,159,255,1)0%,rgba(17,122,255,1)100%);
        min-height:100vh;
    }

`

export default Global


