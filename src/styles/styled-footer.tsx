import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: 400px;

  & > div.contato {
    background-image: url("https://images.unsplash.com/photo-1445112098124-3e76dd67983c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsbSUyMG9jZWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  & > div.social {
    height: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
  }
  ul.links {
    display: flex;
    gap: 35px;
    list-style: none;
  }
  ul.socialmedia {
    list-style: none;
    display: flex;
    gap: 30px;
    font-size: 1.8rem;
    color: #004e89;

  
  }
  li {
    font-size: 0.9rem;
    position: relative;
    color: #004e89;
  }
  i {
    font-size: 3rem;
    color: #004e89;
  }
`;
