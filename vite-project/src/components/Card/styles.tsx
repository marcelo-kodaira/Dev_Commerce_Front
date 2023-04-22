import styled from "styled-components";

export const StyledCard = styled.section`
    width: 260px;
    height: 300px;
    margin: 10px 0;
    text-align: center;
    box-shadow: 0 10px 15px -3px rgba(33,150,243,.4),0 4px 6px -4px rgba(33,150,243,.4);
    border-radius: 7px;
    background-color: #6B6ECC;
    background: linear-gradient(45deg, #04051dea 0%, #2b566e 100%);
`

export const CardContent = styled.div`
    margin: 0 auto;
    max-width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5px;
`

export const CardTitle = styled.div`
    font-weight: 800;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.64);
    margin-top: 10px;
    font-size: 25px;
    letter-spacing: 1px;
`

export const CardPrice = styled.div`
    color: white;
    font-weight: 800;
    font-size: 50px;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
`

export const CardDescription = styled.div`
    color: rgba(255, 255, 255, 0.6);
    margin-top: 10px;
    font-size: 14px;
    max-height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 4;
    box-orient: vertical;
`

export const EditButton = styled.button`
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: none;
    outline: none;
    color: rgb(255 255 255);
    text-transform: uppercase;
    font-weight: 700;
    font-size: .75rem;
    background-color: rgb(33 150 243);
    border-radius: 0.5rem;
    text-shadow: 0px 4px 18px #2c3442;
`


