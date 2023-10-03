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

    const faqContainerStyles = {
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        padding: '4.2rem 10px',
        backgroundColor: 'rgb(222, 222, 222)',
        color: 'black',
        borderRadius: '10px 10px 0px 0px',
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