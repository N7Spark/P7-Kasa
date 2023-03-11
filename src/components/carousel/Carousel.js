import './carousel.scss'
import ArrowRight from '../../assets/chevron_carousel_right.png'
import ArrowLeft from '../../assets/chevron_carousel_left.png'
import { useState } from 'react'


export default function Slider({imageSlider}) {

    //Utilisation du hook useState pour créer une variable d'état currentIndex, initialisée à 0.
    const [currentIndex, setCurrentIndex] = useState(0)

    //Fonction qui est appelée lorsqu'on clique sur la flèche droite.
    const nextSlide = () => {
        //On incrémente currentIndex de 1.
        setCurrentIndex(currentIndex + 1)
        //Si currentIndex est égal à la longueur du tableau imageSlider - 1 (dernière image), on remet currentIndex à 0 pour boucler le carrousel.
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    //Fonction qui est appelée lorsqu'on clique sur la flèche gauche.
    const prevSlide = () => {
        //On décrémente currentIndex de 1.
        setCurrentIndex(currentIndex - 1)
        //Si currentIndex est déjà à 0, on défini currentIndex à la position de la dernière image du tableau pour boucler le carrousel.
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
        //On crée une section avec une image de fond prise dans le tableau imageSlider à l'indice currentIndex.
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
            {imageSlider.length > 1 && //On vérifie si la longueur du tableau imageSlider est supérieure à 1 pour afficher les flèches de navigation et le compteur de diapositives.
                <>
                    <img 
                        className='carousel_arrow carousel_arrow_right' 
                        src={ArrowRight} //On utilise l'image de la flèche droite importée en haut.
                        alt="show next slider" 
                        onClick={nextSlide} //On ajoute un événement onClick qui appelle la fonction nextSlide.
                    />
                    <img 
                        className='carousel_arrow carousel_arrow_left' 
                        src={ArrowLeft} //On utilise l'image de la flèche gauche importée en haut.
                        alt="show previous slider" 
                        onClick={prevSlide} //On ajoute un événement onClick qui appelle la fonction prevSlide.
                    />
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p> {/*On affiche le compteur de diapositives avec la position actuelle et le nombre total d'images.*/}
                </>
            } 
        </section>
    )
}

