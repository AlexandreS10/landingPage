import { Header } from "./components/Header";
import Card, { CardsContainer } from './components/Card';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

function App() {
  

  return (
    <>
     <Header />
         <main>
                <CardsContainer>
                    <Card image="desktop" titulo="Somente para Desktop" texto="Vamos aprender como utilizar um framework" />
                    <Card image="componentes" titulo="Criado com Componentes" texto="Utilizamos o Styled Components" />
                    <Card image="aproveitamento" titulo="Fácil aproveitamento" texto="Estamos no caminho" />
                </CardsContainer>

                <Content />
            </main>

            <Footer />
       
    </>
  )
}

export default App
