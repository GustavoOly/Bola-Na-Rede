function Header() {
   const estiloSection = {
      borderBottom: '1px solid rgba(255, 255, 255, 0.13)',
      backgroundColor: 'black',
   };
   return (
      <section style={estiloSection}>
         <div className="header__container">
            <div className="header__c-logo">
               <img title="Logo Bola Na Rede" className="header__logo-img" src="public/images/Bola-Na-Rede - logo.svg" />
            </div>
            {/*<nav className="header__nav">

               <label htmlFor="">
                  <input type="checkbox" name="" id="" />

               </label>
               <li><a>Incio</a></li>
               <li><a>Mais Informações</a></li>
            </nav>*/}
         </div>
      </section>
   )
}

export default Header