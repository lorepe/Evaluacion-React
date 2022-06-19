import styled from 'styled-components';
import {CartPlusFill} from '@styled-icons/bootstrap/CartPlusFill'
import {CartX} from '@styled-icons/bootstrap/CartX'
// import {CartXFill} from '@styled-icons/bootstrap/CartXFill'
// import {createGlobalStyle} from 'styled-components';

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
    transition: background-color .5s;
    :hover{
        background-color:#5264E0;
    }
    :disabled{
        background-color:#90A9DE;
        color:#FFFFFF;
        cursor:not-allowed;
    }    
`

export const Stock = styled.span`
    border-radius: 3px;
    font-weight: ${(props) => (props.able === "agotado" ? "bold" : "lighter")}; ;
    padding: 3px;
    background-color: ${(props) => (props.able === "agotado" ? "#FFD771" : "#FFBA08")};
    font-size: 15px;
    /* font-family: 'Roboto', sans-serif; */
`
export const Texto = styled.h5`
    border-radius: 3px;
    font-weight: ${(props) => (props.able === "agotado" ? "lighter" : "bold")};
    padding: 3px;
    /* display: ${(props) => (props.able === "agotado" ? "none" : "")};  */
`
export const CarritoAdicion = styled(CartPlusFill)`
    width:30px;
    height: 25px;
    color:#FFBA08;
`
export const CarritoLleno = styled(CartX)`
    width:30px;
    height: 25px;
    color:#FFD771;
`

