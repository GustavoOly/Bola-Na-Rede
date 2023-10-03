const source = [
    {
        summary: "Quantos Time irão Participar?",
        details: " ndjndjcnwd wdincwd cdwc jwd cs dcjsdc dcsdjds"
    },
    {
        summary: "Quantos Time irão Participar?",
        details: " ndjndjcnwd wdincwd cdwc jwd cs dcjsdc dcsdjds"
    },
    {
        summary: "Quantos Time irão Participar?",
        details: " ndjndjcnwd wdincwd cdwc jwd cs dcjsdc dcsdjds"
    },

]

function PerguntasFrequentes() {
    const faqStyles = {
        fontSize: 'clamp(2em, 3em, 3.3em)',
    }
    const faqContainerStyles = {
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        padding: '5rem 0px',
        backgroundColor: 'rgb(222, 222, 222)',
        color: 'black',
        borderRadius: '50px 50px 0px 0px',
        position: 'relative',
        zIdenx: '100'
    }

    return (
        <section>
            <div style={faqContainerStyles} className="faq__container">
                <h1>FAQs</h1>
                <article>
                    {source.map((item) => (
                        <details key={item.summary}>
                            <summary style={faqStyles}>
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