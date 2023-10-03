import btnInstagram from '/src/assets/instagram.svg'

function BtnInstagram(){

    const stylesInstagram = {
    position: 'fixed',
    right: '10px',
    bottom: '80px',
    cursor: 'pointer',
    opacity: '0.7',
   };
  
	return (

	<>
        <a href="https://www.instagram.com/bolanarede.ipa/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noreferrer">
            <img style={stylesInstagram} src={btnInstagram} title="Ir para página no instagram" alt="Botão do instagram">
            </img>
        </a>
     </>
	)
}

export default BtnInstagram