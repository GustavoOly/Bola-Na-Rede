import btnWhatsapp from '/src/assets/whatsapp.svg'
import btnInstagram from '/src/assets/instagram.svg'
import Espiral from '/src/assets/espiral.svg'

function Social() {


    return (
        <article>
            <section className='social__container'>

                <div className='social__buttom'>
                    <img className='social__buttom-icon' src={Espiral} alt="" />
                </div>

            <div className='social__itens'>    
            <a href="https://www.instagram.com/bolanarede.ipa/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noreferrer">
            <img src={btnInstagram} className='social__btn-instagram' title="Ir para página no instagram" alt="Botão do instagram">
            </img>
        </a>
            <a href="https://chat.whatsapp.com/E19JWotFtQv9PhxpoBDlM0" target="_blank" rel="noreferrer">
                <img className="social__btn-whatsapp" src={btnWhatsapp} title="Entrar no grupo do whatsapp" alt="botão do whatsapp" />
            </a>
            </div>
        
            </section>
        </article>
    )
}

export default Social