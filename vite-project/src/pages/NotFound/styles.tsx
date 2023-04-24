import styled, { keyframes } from "styled-components"


export const ErrorTitle = styled.h1`
    font-family: 'Montserrat', Helvetica, sans-serif;
    color: #bbb;
    text-align: center;
    margin: 30px 15px;
`

export const ErrorText = styled.p`
    font-family: 'Montserrat', Helvetica, sans-serif;
    color: #bbb;
    max-width: 490px;
    margin: 30px auto 30px;
    font-size: 19px;
    text-align: center;
`

export const ErrorContainer = styled.section`
    text-align: center;
    font-size: 106px;
    font-family: 'Catamaran', sans-serif;
    font-weight: 800;
    margin: 50px 15px;

    & > span{
        display: inline-block;
        position: relative;
    }

    @media screen and (max-width: 500px) {
        margin: 20px 0;
        text-align: center;
    }

    @media screen and (max-width: 355px) {
        text-align: start;
        margin: 20px 0 0 3px;
    }

`

export const ErrorFour = styled.span`
    width: 136px;
    height: 43px;
    border-radius: 999px;
    background:
    linear-gradient(140deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 43%, transparent 44%, transparent 100%),
    linear-gradient(105deg, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.06) 41%, rgba(0, 0, 0, 0.07) 76%, transparent 77%, transparent 100%),
    linear-gradient(to right, #d89ca4, #e27b7e);

    &:before,&:after{
        content: '';
        display: block;
        position: absolute;
        border-radius: 999px;
    }

    &:before{
        width: 43px;
        height: 156px;
        left: 60px;
        bottom: -43px;
        background:
            linear-gradient(128deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 40%, transparent 41%, transparent 100%),
            linear-gradient(116deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.07) 50%, transparent 51%, transparent 100%),
            linear-gradient(to top, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F);
    }

    &:after{
        width: 137px;
        height: 43px;
        transform: rotate(-49.5deg);
        left: -18px;
        bottom: 36px;
        background: linear-gradient(to right, #99749D, #B895AB, #CC9AA6, #D7969E, #E0787F);
    }

    @media screen and (max-width: 500px) {
        width: 105px;
        height: 30px;

        &:before{
            z-index: 1;
            width: 30px;
            height: 140px;
        }

        &:after{
            transform: rotate(-46   deg);
            z-index: 0;
            width: 120px;
            height: 30px;
        }
    }

    @media screen and (max-width: 355px) {
        width: 80px;
    }

`

const bgshadow = keyframes`
  0% {
    box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);
  }
  45% {
    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  55% {
    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);
  }
`;

export const ErrorZero = styled.span`
    vertical-align: text-top;
    width: 156px;
    height: 156px;
    border-radius: 999px;
    background: linear-gradient(-45deg, transparent 0%, rgba(0, 0, 0, 0.06) 50%,  transparent 51%, transparent 100%),
    linear-gradient(to top right, #99749D, #99749D, #B895AB, #CC9AA6, #D7969E, #ED8687, #ED8687);
    overflow: hidden;
    animation: ${bgshadow} 5s infinite;
    margin: 0 10px;

    &:before{
        content: '';
        display: block;
        position: absolute;
        transform: rotate(45deg);
        width: 90px;
        height: 90px;
        background-color: transparent;
        left: 0px;
        bottom: 0px;
        background:
            linear-gradient(95deg, transparent 0%, transparent 8%, rgba(0, 0, 0, 0.07) 9%, transparent 50%, transparent 100%),
            linear-gradient(85deg, transparent 0%, transparent 19%, rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.07) 91%, transparent 92%, transparent 100%);
    }

    &:after{
        content: '';
        display: block;
        position: absolute;
        border-radius: 999px;
        width: 70px;
        height: 70px;
        left: 43px;
        bottom: 43px;
        background: #FDFAF5;
        box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: 500px) {
        width: 120px;
        height: 120px;
        margin: 30px 5px 0 5px;

        &:after{
            width: 67px;
            height: 67px;
            left: 27px;
            bottom: 27px;
        }
    }

    @media screen and (max-width: 370px) {
        margin: 30px 5px 0 15px;
    }


`

export const ScreenReader = styled.span`
    position: absolute;
    top: -9999em;
    left: -9999em;
`

export const LinkContainer = styled.div`
    text-align: center;

`