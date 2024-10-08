import bolaNaRedeLogo from '/src/assets/Bola-Na-Rede - logo.svg'

function Header() {
   
   const estiloSection = {
      borderBottom: '1px solid rgba(255, 255, 255, 0.13)',
      backgroundColor: 'var(--background-primary)'
      
      
   };
   return (
      <section style={estiloSection}>
         <div className="header__container">
            <div className="header__c-logo">
               <img title="Logo Bola Na Rede" className="header__logo-img" src={bolaNaRedeLogo} />
            </div>
         </div>
      </section>
   )
}

export default Header