import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, #root, body {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
    }

    :root {
        --primary: #2270b8;
        --secondary: #242526;
        --tertiary: #727272;
        --white: #ffffff;
    }
`;