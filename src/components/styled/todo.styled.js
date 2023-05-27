import styled from "styled-components";
import bgheaderdesktoplight from '../images/bg-desktop-light.jpg';
import bgheaderdesktopdark from '../images/bg-desktop-dark.jpg';
import bgheadermobilelight from '../images/bg-mobile-light.jpg';
import bgheadermobiledark from '../images/bg-mobile-dark.jpg';
import iconCheck from '../images/icon-check.svg';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const Header = styled.div`
    display: flex;
    min-height: 290px;
    width: 100%;
    justify-content: center;
    background-image: ${props => props.theme === 'light' ? `url(${bgheaderdesktoplight})` : `url(${bgheaderdesktopdark})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: 1025px){
        min-height: 250px;
    }
    @media screen and (max-width: 600px){
        width: 100%;
        min-height: 250px;
        background-image: ${props => props.theme === 'light' ? `url(${bgheadermobilelight})` : `url(${bgheadermobiledark})`};
        background-size: cover;
    }
`
export const StyledTodo = styled(Vstack)`
    display: flex;
    width: 520px;
    height: 100%;
    align-items: center;
    padding: 0 20px;
    margin: -16% auto 0;
    .logoicon{
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 35px;
    }
    h1{
        font-size: 2.15em;
        font-weight: var(--bold);
        letter-spacing: .25em;
        color: var(--Very-Light-Gray);
    }
    .no_activity{
        display: flex;
        width: 87%;
        height: 65px;
        font-weight: var(--bold);
        align-items: center;
        border-radius: 5px;
        border-bottom: 1px solid ${props => props.theme === 'light' ? 'var(--Light-Grayish-Blue-LT)' : 'var(--Very-Dark-Grayish-Blue)'};
        background-color: ${props => props.theme === 'light' ? 'var(--Very-Light-Gray)' : 'var(--Very-Dark-Desaturated-Blue)'};
        color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Grayish-Blue)' : 'var(--Light-Grayish-Blue-DT)'};
        padding:0 0 0 65px;
        @media screen and (max-width: 600px){
            padding: 0;
        }
    }
    .mobile_status_spreader{
        display: none;
        width: 90%;
        height: 60px;
        justify-content: center;
        gap: 20px;
        border-radius: 5px;
        padding: 0 17px;
        margin: 20px 0;
        @media screen and (max-width: 600px){
            display: flex;
        }
    }
    .drag_drop{
        font-size: .8em;
        letter-spacing: .001em;
        color: ${props => props.theme === 'light' ? 'var(--Light-Grayish-Blue-placeholder)' : 'var(--Dark-Grayish-Blue)'};
        margin: 10% 0;
    }
    @media screen and (max-width: 1025px){
        margin: -23% auto 0;
    }
    @media screen and (max-width: 600px){
        width: fit-content;
        margin: -50% auto 0;
    }
`
export const SearchBar = styled.div`
    display: flex;
    width: 100%;
    height: 65px;
    margin-bottom: 20px;
    border-radius: 5px;
    form{
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
    }
    input[type="checkbox"]{
        position: absolute;
        top: 20px;
        left: 22px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        width: 23px;
        height: 23px;
        border-radius: 50%;
        border: 1px solid ${props => props.theme === 'light' ? 'var(--Light-Grayish-Blue-LT)' : 'var(--Very-Dark-Grayish-Blue)'};
    }
    input[type="text"]{
        width: 100%;
        height: auto;
        padding: 0 65px;
        border: none;
        border-radius: 5px;
        background-color: ${props => props.theme === 'light' ? 'var(--Very-Light-Gray)' : 'var(--Very-Dark-Desaturated-Blue)'};
        color: ${props => props.theme === 'light' ? 'var(--Light-Grayish-Blue)' : 'var(--Light-Grayish-Blue-hover)'};
        font-size: 1em;
        font-weight: var(--regular);
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: .001em;
        &:focus{
            outline: none;
            caret-color: var(--Bright-Blue);
        }
        &::placeholder{
            color: ${props => props.theme === 'light' ? 'var(--Light-Grayish-Blue-placeholder)' : 'var(--Dark-Grayish-Blue)'};
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin:0 0 0 22px;
        }
    }
`
export const ThemeIcon = styled.img`
    width: 25px;
    height: 25px;
    cursor: pointer;
`
export const List = styled(Vstack)`
    display: flex;
    width: 100%;
    min-height: 100%;
    border-radius: 5px;
    background-color: ${props => props.theme === 'light' ? 'var(--Very-Light-Gray)' : 'var(--Very-Dark-Desaturated-Blue)'};
    box-shadow: ${props => props.theme === 'light' ? '0 10px 20px 2px rgba(0,0,0,0.15)' : '0px 10px 20px 2px rgba(0, 0, 0, 0.5)'};
`
export const ListItems = styled(Hstack)`
    width: 100%;
    height: 62px;
    justify-content: space-between;
    align-items: center;
    font-size: .9em;
    font-weight: var(--regular);
    letter-spacing: .1em;
    border-radius: 5px;
    border-bottom: 1px solid ${props => props.theme === 'light' ? 'var(--Light-Grayish-Blue-LT)' : 'var(--Very-Dark-Grayish-Blue)'};
    color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Grayish-Blue)' : 'var(--Light-Grayish-Blue)'};
    background-color: ${props => props.theme === 'light' ? 'var(--Very-Light-Gray)' : 'var(--Very-Dark-Desaturated-Blue)'};
    .aligner{
        align-items: center;
    }
    input{
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-border-radius: none;
        appearance: none;
        width: 23px;
        height: 23px;
        border-radius: 50%;
        border: 1px solid ${props => props.theme === 'light' ? 'var(--Light-Grayish-Blue-LT)' : 'var(--Very-Dark-Grayish-Blue)'};
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin:0 0 0 22px;
    }
    input:checked {
        background: url(${iconCheck}),linear-gradient(130deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center;
    }
    p{
        display: flex;
        flex-wrap: wrap;
        font-weight: var(--bold);
        letter-spacing: .001em;
        padding: 0 20px;
        color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Grayish-Blue)' : 'var(--Light-Grayish-Blue-DT)'};
        cursor:grab;
        :active{
            cursor:grabbing;
        }
    }
    .completed{
        color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Grayish-Blue)' : 'var(--Light-Grayish-Blue)'};
    }
    .completed-text{
        font-weight: var(--regular);
        text-decoration: line-through;
        color: ${props => props.theme === 'light' ? 'var(--Light-Grayish-Blue-placeholder)' : 'var(--Dark-Grayish-Blue)'};
    }
    &:hover{
        input{
            border: 1.5px solid var(--Bright-Blue);
        }
        .delete-icon{
            display: block;
        }
    }
`
export const CloseIcon = styled.img`
    display:none;
    width: 15px;
    height: 15px;
    cursor: pointer;
    margin: 0 22px 0 0;
    transition: all .5s ease-in-out;
    &:hover{
        transform: scale(1.3);
    }
`
export const BottomStatus = styled(Hstack)`
    display: flex;
    width: 90%;
    height: 48px;
    justify-content: space-between;
    align-items: center;
    font-size: .8em;
    font-weight: var(--bold);
    letter-spacing: -.03em;
    color: ${props => props.theme === 'light' ? 'var(--Light-Grayish-Blue-placeholder)' : 'var(--Dark-Grayish-Blue)'};
    background-color: ${props => props.theme === 'light' ? 'var(--Very-Light-Gray)' : 'var(--Very-Dark-Desaturated-Blue)'};
    border-radius: 0 0 5px 5px;
    padding: 0 0 0 25px;
    span{
        margin: 0 25px 0 0;
    }
    p{
        cursor: pointer;
        :hover{
            color: ${props => props.theme === 'light' ? 'var(--Very-Dark-Grayish-Blue)' : 'var(--Light-Grayish-Blue-DT)'};
        }
    }
    .status_spreader{
        display: flex;
        justify-content: space-between;
        gap: 15px;
    }
    .selected{
        color: var(--Bright-Blue);
    }
    @media screen and (max-width: 600px){
        .status_spreader{
            display: none;
        }
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    color: var(--Cool-gray);
    margin: 0 auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:5px 0;
    a{
        color: var(--Bright-Blue);
    }
    p{
        font-size: .8rem;
        color: ${props => props.theme === 'light' ? 'var(--Light-Grayish-Blue-placeholder)' : 'var(--Dark-Grayish-Blue)'};
    }
`




