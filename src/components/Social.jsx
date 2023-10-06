import React, { useState } from 'react';
import btnWhatsapp from '/src/assets/whatsapp.svg';
import btnInstagram from '/src/assets/instagram.svg';
import Add from '/src/assets/add.svg';
import Close from '/src/assets/close.svg';

function Social() {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleViewClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <article>
            <section className='social__container'>
                {isChecked ? (
                    <div className='view' onClick={handleViewClick}></div>
                ) : null}
                <label htmlFor="check">
                    <div className='social__buttom'>
                        <img
                            className='social__button-icon'
                            src={isChecked ? Close : Add}
                            alt="" 
                        />
                        <input
                            type="checkbox"
                            name=""
                            id="check"
                            onChange={handleCheckboxChange}
                            checked={isChecked}
                        />
                    </div>
                </label>

                {isChecked && <div className='social__itens'>
                    <a href="https://www.instagram.com/bolanarede.ipa/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noreferrer">
                        <img src={btnInstagram} className='social__btn-instagram' title="Ir para página no instagram" alt="Botão do instagram">
                        </img>
                    </a>
                    <a href="https://chat.whatsapp.com/E19JWotFtQv9PhxpoBDlM0" target="_blank" rel="noreferrer">
                        <img className="social__btn-whatsapp" src={btnWhatsapp} title="Entrar no grupo do whatsapp" alt="botão do whatsapp" />
                    </a>
                </div>}

            </section>
        </article>
    )
}

export default Social