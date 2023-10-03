import jogador from '/src/assets/vetor-jogador-bola-na-rede01-min.png'
//import Confetes from './confetes';

function Inscricao() {

    return (
        <section className="inscricao__section">
            <div className="inscricao__container">
                <div className="inscricao__c-card">
                    <span className="inscricao__c-title">
                        <h4>Em breve</h4>
                        <h1>Seja notificado quando iniciarmos</h1>
                        <p>Nossas inscrições serão abertas em breve, enquanto isso deixe seu e-mail abaixo para te notificarmos quando estiverem abertas.</p>
                    </span>

                    <div className="inscricao__c-email">
                        <form action="https://formsubmit.co/bolanarede.ipa@outlook.com.br" method="POST">
                            <input type="email" placeholder="Digite seu email" title="Digite seu email" name="email" id="inscricao__input-email" required />
                            <input type="hidden" name="_next"
                                value="https://bolanarede-ipa.netlify.app/" />
                            <input type="hidden" name="_captcha" value="false" />
                            <button type="submit" title="Enviar email">Notifique-me</button>
                        </form>
                    </div>
                    <p>* Alguma dúvida? Verifique nossas <a>perguntas frequentes</a></p>
                </div>
                <div className="inscricao__c-imagens">
                    <img className="inscricao__imagens-one" src={jogador} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Inscricao