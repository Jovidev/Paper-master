import { createGlobalStyle } from "styled-components";
const globalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
         /* Ajuste se necessário para acomodar a altura do navbar */
}
`

export default globalStyle