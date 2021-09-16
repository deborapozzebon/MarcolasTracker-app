import styled from "styled-components";

export const HomeStyle = styled.div `


    .logo {
        display: inline-block; 
        justify-content: space-between;
        align-items: center;
        margin: 120px 160px 120px 160px;

        img {
            padding-right: 30px;
        }

        span {
            font-family: 'Nunito', sans-serif;
            font-size: 40px;
            color: #FFF;
            font-weight: 800; 
        }

        h1 {
            position: inline;
            font-family: 'Nunito', sans-serif;
            font-weight: 800;
            font-size: 80px;
            line-height: 80px;
            letter-spacing: 1px;
            color: #FFF;
            width: 394px; 
            height: 290px; 
            margin-top: 50px;            
        }

        .visita {
            position: inline;
            font-family: 'Nunito', sans-serif;
            font-weight: 600;
            font-size: 24px;
            line-height: 34px;
            color: #FFF;
            width: 394px; 
            height: 290px; 
            margin-top: 60px;   
        }
    }

    .local {
        position: absolute;
        top: 120px; right: 160px;

        .cidade {
        display: flex;
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        font-size: 24px;
        line-height: 30px;
        text-align: left;
        color: #FFF;
        justify-content: right;
    }

        .estado {
            display: flex;
            font-family: 'Nunito', sans-serif;
            font-weight: 600;
            font-size: 24px;
            line-height: 34px;
            text-align: left;
            color: #FFF;

        }
    }

    .avatares {
        display: inline-block;
        justify-content: space-between;

        .rosinha {
            padding-bottom: 36%;
            position: relative;
            top: 30%; right: 22%;
        }

        .listrinha {
            position: relative;
            top: 10%; right: 10%;
        }        

        .bolinha {
            padding-bottom: 6%;
            position: relative;
            right: 30%;
        }
    }

    /* .sombras {
        .sombraRosinha {
            padding-bottom: 0;
            position: relative;
            top: 0; right: 0;
        }

        .sombraListrinha {
            padding-top: 0;
            position: relative;
            top: 0; right: 100px;
            }

        .sombraBolinha {
            padding-bottom: 0;
            position: relative;
            top: 90%; right: 0;
        }
    } */

    .botao {
        position: absolute;
        bottom: 10%; right: 10%;
    }

    @media only screen and (max-width: 1024px) {
        .avatares {
            width: 50%auto;
        }
}
`