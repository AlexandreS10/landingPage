import styled from "styled-components";


export const StyledContent = styled.section`
    display: flex;
    height: 500px;


    & > div.column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50vw;
        gap: 10px;
       
        p {
            color: grey;
        }
        h2 {
            color: black;
        }
    }
    .column-text {
        padding: 80px;
    }
    
    & > .column-img {
       background-size: cover;
       background-position: center; 

      
    }`