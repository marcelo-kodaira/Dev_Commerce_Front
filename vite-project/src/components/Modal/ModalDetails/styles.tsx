import styled from "styled-components"

export const StyledContainer = styled.section`
    background: white;
    min-width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 2rem;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 15px -3px rgba(33,150,243,.4),0 4px 6px -4px rgba(33,150,243,.4);
    border-radius: 7px;
    background-color: #6B6ECC;
    background: linear-gradient(45deg, #04051dea 0%, #2b566e 100%);
    color: white;
`

export const InfoTitle = styled.h2`
    max-width: 300px;
    font-weight: bolder;
    font-size: 1.5rem;
    margin-bottom: 30px;
    text-align: center;
    font-style: italic;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const ProductDescription = styled.p`
    font-weight: lighter;
    max-width: 300px;
`

export const AnnouncerInfo = styled.div`
    p:nth-child(1){
        margin-bottom: 10px;
    }
`

export const Price = styled.p`
    color: white;
    font-weight: 800;
    font-size: 35px;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
`
