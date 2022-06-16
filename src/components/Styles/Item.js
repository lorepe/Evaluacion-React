import styled from 'styled-components';

export const Product = styled.div`
    border: solid black 1px ;
    border-radius: 10px;
`
export const ButtonPur = styled.button`
    border: none ;
    border-radius: 10px;
    background-color:#3B28CC;
    color: #FFFFFF;
    font-weight: bold;
    padding: 15px 3px;
    cursor: pointer;
    :disabled{
        background-color:#ADD7F6;
        color:#FFFFFF;
        cursor:not-allowed;
    }    
`

export const Stock = styled.span`
    border-radius: 3px;
    font-weight: ${(props) => (props.able === "agotado" ? "bold" : "lighter")}; ;
    padding: 3px;
    background-color: ${(props) => (props.able === "agotado" ? "#FFD771" : "#FFBA08")};

`
export const Texto = styled.h5`
    border-radius: 3px;
    font-weight: ${(props) => (props.able === "agotado" ? "lighter" : "bold")};
    padding: 3px;
    ${'' /* content: ${(props) => (props.able === "agotado" ? "Este producto esta" : "En stock")}; */}
    
`