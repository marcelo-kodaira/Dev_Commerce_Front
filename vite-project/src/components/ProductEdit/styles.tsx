import styled from "styled-components";

export const ProductName = styled.h2`
    margin-bottom: 7px;
    font-size: 1.2rem;
    font-weight: 500;
    font-style: italic;
`

export const ProductContainer = styled.div`
    display: flex;
    align-items: center;

    box-sizing: content-box;
    height: 40px;

    -webkit-box-shadow: 3px 3px 10px 3px #dddddd;
    -moz-box-shadow: 3px 3px 10px 3px #dddddd;
    box-shadow: 3px 3px 10px 3px #dddddd;

    div:nth-child(1){
        height: 100%;
        min-width: 50px;
        flex: 0 1 80%;
        margin-left: 5px;
        line-height: 40px;
        border-right: 1px solid lightgray;


        p{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            
        }


    }

    div:nth-child(2){
        height: 100%;
        min-width: 50px;
        flex: 0 1 10%;
        margin-left: 5px;
        line-height: 40px;
        border-right: 1px solid lightgray;

        p{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    div:nth-child(3){
        display: flex;
        min-width: 80px;
        flex: 1 0 10%;
        justify-content: space-around;

        button{
            cursor: pointer;
        }
    }
`