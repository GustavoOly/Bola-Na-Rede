import jogador from '/src/assets/vetor-jogador-bola-na-rede01-min.png';
//import Confetes from './confetes';
import React, { useState } from 'react';

function Inscricao() {
    const [enviando, setEnviando] = useState(false); // Estado para controlar o texto do botão


    const handleEnviarClick = () => {
        setEnviando(true); // Alterar o estado para "enviando" quando o botão for clicado

        // Aqui você pode adicionar lógica para enviar o email

        // Após o envio, você pode reverter o texto do botão para "Notifique-me"
        setTimeout(() => {
            setEnviando(false);
        }, 2000); // Por exemplo, após 2 segundos (simulando um envio)
    };

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
                        
                            <form action="https://formsubmit.co/bolanarede.ipa@outlook.com.br" method="POST" >
                                <input type="email" placeholder="Digite seu email" title="Digite seu email" name="email" id="inscricao__input-email" required />
                                <input type="hidden" name="_next" value="https://bolanarede-ipa.netlify.app/" />
                                <input type="hidden" name="_captcha" value="false" />
                                <button  type='submit' title="Enviar email" onClick={handleEnviarClick} disabled={enviando}>
                                    {enviando ? "Enviando..." : "Enviar"}
                                </button>
                            </form>
                    </div>
                    <p>* Alguma dúvida? Verifique nossas <a>perguntas frequentes</a></p>
                </div>
                <div className="inscricao__c-imagens">
                    <img className="inscricao__imagens-one" src={jogador} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Inscricao;
