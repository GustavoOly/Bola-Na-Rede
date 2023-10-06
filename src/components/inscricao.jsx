import Jogador from '/src/assets/vetor-jogador-bola-na-rede01-min.png';
import Confetes from './confetes';
import { useState } from 'react';
import emailJs from '@emailjs/browser';

function Inscricao() {

    const [email, setEmail] = useState('');
    const [enviando, setEnviando] = useState(false);
    const [emailEnviado, setEmailEnviado] = useState(false);

    const handleEnviarClick = () => {
        setEnviando(true);      
    }

    function sendEmail(e) {
        e.preventDefault();

        const templateParams = {
            email: email
        };


        emailJs.send("service_t22j3m6", "template_e04tk9w", templateParams, "-7-o4ra5VzS7jAwlS")
            .then((response) => {
                console.log("Email enviado com sucesso!", response.status, response.text);
                Confetes();
                setTimeout(() => {
                    setEnviando(false);
                    setEmailEnviado(true);
                },);

            }, (err) => {
                alert("Erro ao enviar o email, tente novamente.", err)
                setTimeout(() => {
                    setEnviando(false);
                },);
            },);
    }

    const thanksStyle = {
        padding: '15px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '50px',
        textAlign: 'center'
    }

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
                        {emailEnviado ? (
                            <p style={thanksStyle}>Obrigado por enviar seu email</p>
                        ) : (
                            <form onSubmit={sendEmail} >
                                <input
                                    type="email"
                                    placeholder="Digite seu email"
                                    title="Digite seu email"
                                    name="email" id="inscricao__input-email" required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                                <button
                                    type='submit'
                                    value="Enviar"
                                    onClick={email === '' ? () => alert("Digite seu email") : handleEnviarClick}
                                    title="Enviar email" >
                                    {enviando ? "Enviando..." : "Notifique-me"}
                                </button>
                            </form>
                        )}
                    </div>
                    <p>* Alguma dúvida? Verifique nossas <a href="#FAQs">perguntas frequentes</a></p>
                </div>
                <div className="inscricao__c-imagens">
                    <img className="inscricao__imagens-one" src={Jogador} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Inscricao;
