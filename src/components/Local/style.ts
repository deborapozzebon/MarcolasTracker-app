import styled from 'styled-components' 

export const LocalStyle = styled.div`
    .local {
        position: absolute;
        top: 123px; right: 160px;

        .city {
        display: flex;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
        text-align: left;
        justify-content: right;
    }

        .state {
            display: flex;
            font-family: 'Nunito', sans-serif;
            font-weight: 800;
            font-size: 24px;
            line-height: 34px;
            text-align: left;
        }
    }
`