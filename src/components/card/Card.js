import './card.scss'
import { Link } from 'react-router-dom'

// Définition du composant Card comme une fonction qui prend trois propriétés : id, title et cover
export default function Card({id, title, cover}) {
	
	return (
		// Utilisation de la balise Link de React Router pour créer un lien vers la page de détail de l'hébergement correspondant à l'id
		<Link to={`/accomodation/${id}`} className="gallery_card">
			{/* Affichage de l'image du logement avec la source passée en tant que propriété */}
			<img src={cover} alt={title} />
			{/* Affichage du titre du logement */}
			<h3>{title}</h3>	
		</Link>
	)
}



