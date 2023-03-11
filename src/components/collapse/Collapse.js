// Importerle style
import './collapse.scss'

// Importer une image pour l'icône de flèche
import arrow from '../../assets/arrow.png';

// Importer le hook useState de React
import { useState } from 'react';

// Définir un composant fonctionnel appelé Collapse qui prend deux props, title et content
export default function Collapse({title, content}) {

    // Utiliser le hook useState pour définir un état toggle et une fonction setToggle pour le basculer
    const [toggle, setToggle] = useState(false);


    return (
        <>
            <div className="collapse" >
                
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="Afficher le contenu" 
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {/* Si le contenu est un tableau, return chaque élément comme un paragraphe */}
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}
