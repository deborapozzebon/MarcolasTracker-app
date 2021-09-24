import styled from "styled-components";

export const FormStyle = styled.div`
    width: 100%;
    height: 1880px;  
    background-color: #CEDEE5;

    #rectangle {
        position: absolute;
        width: 96px;
        height: 698px;
        background: #15C3D6;
    }

    img {
        width: 48px;
        height: 56px; 
        position: absolute;
        left: 25%;
        right: 25%;
        top: 3.9%;
        bottom: 89.27%;
    }

    .top {        
        position: absolute;
        right: 550px; 
        top: 42px;
        font: 600 18px 'Nunito', sans-serif;
        color: #8FA7B3;
    }

    fieldset {
        display: block;  
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 108px;
        left: 33%;
        width: 708px;
        height: 1715px;
        background-color: #FFF;
        border: 1px solid #D3E2E5;
        box-sizing: border-box;
        border-radius: 20px;
        padding: 64px 80px;
    }

    input {
        margin-top: 10px;
    }

    .max {
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 20px;
        color: #8FA7B3;
        position: absolute;
        left: 160px;
        top: 314px;
    }

    h1 {
        font-family: 'Nunito', sans-serif;;
        font-weight: bold;
        font-size: 32px;
        line-height: 34px;
        color: #4D6F80;
        padding: 10px;
        position: relative; 
    }

    #linha-horizontal {
        width: 546px;
        border: 1px solid #D3E2E5;
        margin: 24px 0 24px 10px;
        position: relative;
    }

    .weekend {
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #8FA7B3;
        position: relative;
        width: 200px;
        left: 10px;
        padding: 8px 0 20px 0;
    }

    ul {
        list-style: none;
    }
`