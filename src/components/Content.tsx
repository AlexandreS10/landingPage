
import { StyledContent } from "../styles/styled-content";

interface ContentColumnImgProps {
imageUrl: string;
}

const ContentColumnText = () => {
    return (
        <div className="column column-text">
            <h2>Lorem Ipsum</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, animi repellendus accusamus tempora impedit dolore odit consectetur vel sequi voluptate aliquam maiores assumenda quos temporibus. Laborum eos fugiat rerum ea?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, animi repellendus accusamus tempora impedit dolore odit consectetur vel sequi voluptate aliquam maiores assumenda quos temporibus. Laborum eos fugiat rerum ea?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, animi repellendus accusamus tempora impedit dolore odit consectetur vel sequi voluptate aliquam maiores assumenda quos temporibus. Laborum eos fugiat rerum ea?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, animi repellendus accusamus tempora impedit dolore odit consectetur vel sequi voluptate aliquam maiores assumenda quos temporibus. Laborum eos fugiat rerum ea?
            </p>
        </div>
    );
}
const ContentColumnImg = (props: ContentColumnImgProps)=> {
      if (props.imageUrl === "celular") return <img src="https://cameracriativa.com.br/wp-content/uploads/2020/06/xavier-wendling-e2dDvdH3lIY-unsplash.jpeg" alt="celular"/>;
      if (props.imageUrl === "codigo") return <img src="https://www.freecodecamp.org/news/content/images/2022/05/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"alt="codigo"/>;
      if (props.imageUrl === "bebe") return <img src="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMGJsb2Nrc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="bebe"/>;
    
}

export function Content() {
    return (
        <>
            <StyledContent>
                <ContentColumnText />
                <ContentColumnImg imageUrl="celular"/>
            </StyledContent>

            <StyledContent>
                <ContentColumnImg imageUrl="codigo" />
                <ContentColumnText />
            </StyledContent>

            <StyledContent>
                <ContentColumnText />
                <ContentColumnImg imageUrl="bebe" />
            </StyledContent>
        </>
    );
}