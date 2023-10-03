import Header from '../components/header.jsx'
import Inscricao from '../components/inscricao.jsx'
import BtnWhatsapp from '../components/b-whatsapp.jsx'
import BtnInstagram from '../components/b-instagram.jsx'
{/*import Footer from '../components/footer.jsx'*/}
import PerguntasFrequentes from '../components/perguntasFrequentes.jsx'


function Home() {
  return (
    <>
      <Header />
      <Inscricao />
      <BtnWhatsapp />
      <BtnInstagram />
      <PerguntasFrequentes />
      {/*<Footer />*/}
    </>
  );
}




export default Home