const source = [
    {
        summary: "Qual é a localização onde o campeonato de futebol ocorrerá?",
        details: "No parque municipal de Ipameri Goiás. Para obter direções detalhadas, consulte nosso site oficial em breve."
    },
    {
        summary: "Quais são os custos de inscrição para as equipes participantes do campeonato?",
        details: "As inscrições para equipes são pagas. Entre em contato conosco para obter informações atualizadas sobre as taxas de inscrição."
    },
    {
        summary: "Há alguma taxa de entrada para os espectadores que desejam assistir aos jogos?",
        details: "A entrada para os espectadores é gratuita. Convidamos todos a se juntarem a nós e torcerem pelas equipes."
    },
    {
        summary: "Posso patrocinar o evento e exibir minha marca no site oficial e ao redor do campo?",
        details: "Sim, aceitamos patrocínios. Entre em contato conosco para discutir as oportunidades de patrocínio e exposição da marca."
    },
    {
        summary: " Como é o campo onde os jogos serão realizados?",
        details: "O campo é de grande porte e possui gramado bem cuidado. Oferecemos toda a infraestrutura necessária para os jogos."
    },
    {
        summary: "Os uniformes das equipes estão incluídos na inscrição?",
        details: "Não, os uniformes são de responsabilidade de cada equipe. Cada equipe deve providenciar seus próprios uniformes."
    },
    {
        summary: "Haverá opções de comida e bebida durante o evento?",
        details: "Sim, teremos opções de comida e bebida disponíveis durante o evento, porém, serão vendidas separadamente."
    },


]

function PerguntasFrequentes() {

    const faqContainerStyles = {
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        padding: '3.5rem 10px',
        borderRadius: '30px 30px 0px 0px',
        position: 'relative',
        zIdenx: '100',
        backgroundColor: 'var(--background-secundary)',
    }

    const faqSectionStyles = {
        backgroundColor: 'var(--background-primary)'
    }

    return (
        <section style={faqSectionStyles}>
            <div style={faqContainerStyles} className="faq__container">
                <h1 id="FAQs">FAQs</h1>
                <article>
                    {source.map((item, index) => (
                        <details key={item.summary} open={index === 0}>
                            <summary>
                                {item.summary}
                            </summary>
                            {item.details}
                        </details>
                    ))}
                </article>
            </div>
        </section>
    )
}

export default PerguntasFrequentes