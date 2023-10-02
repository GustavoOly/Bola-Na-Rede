import Header from '../components/header.jsx'
import Inscricao from '../components/inscricao.jsx'
import BtnWhatsapp from '../components/b-whatsapp.jsx';
import BtnInstagram from '../components/b-instagram.jsx'


function Home() {
  return (
    <>
      <Header />
      <Inscricao />
      <BtnWhatsapp />
      <BtnInstagram />
      {/* Resto do conteúdo da página inicial */}
    </>
  );
}




export default Home