import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/29356075_1589721851105551_6644327235979313152_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_eui2=AeFR2dLJAkiVvco_c_zzrUwYv8gNGN1hAHa_yA0Y3WEAdktrOgl_Z-EysGMhNYZIOZkPBE6DF8MabIzym3epf6Gl&_nc_ohc=nOnDkcQpkDAAX_aBjIk&_nc_ht=scontent-gig2-1.xx&oh=6a111accff90e32f142bd98b24957bc7&oe=5F4E0034" alt="Victor Farias"/>
                <div>
                    <strong>Victor Farias</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.

            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 60,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em Contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;