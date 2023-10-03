import btnWhatsapp from '/src/assets/whatsapp.svg'
function BtnWhatsapp(){

    const stylewhatsapp = {
        backgroundColor: '#25D366',
        padding: '10px',
        borderRadius: '50%',
        position: 'fixed',
        right: '15px',
        zIndex: '2',
        bottom: '25px',
        cursor: 'pointer',
        opacity: '0.7',
    }

    return (
    <>
    <a href="https://chat.whatsapp.com/E19JWotFtQv9PhxpoBDlM0" target="_blank" rel="noreferrer">
         <img style={stylewhatsapp} className="b-whatsapp" src={btnWhatsapp} title="Entrar no grupo do whatsapp" alt="botão do whatsapp" />
    </a>
    </>
    )
}

export default BtnWhatsapp