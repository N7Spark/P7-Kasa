import './accomodation.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../data/data'
import Header from "../../components/Header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';


export default function Accomodation() {
	
    // On crée un state pour stocker les images dans le carrousel. On initialise avec un tableau vide.
	const [imageSlider, setImageSlider] = useState([]);

    // On récupère id grâce à useParams pour savoir sur quel logement on est.
	const idAccomodation = useParams('id').id;
    // On utilise idAccomodation pour filtrer datas et ne retourner que les infos sur le logement sur lequel on à cliqué.
	const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
	
    // Une fois le composant affiché, on utilise useEffect pour mettre à jour le state 'imageSlider'.
    // Ici on récupère toutes le photo correspondant au logement identifié par idAccomodation.
	useEffect(() => {
		const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
		setImageSlider(dataCurrentAccomodation[0].pictures);
	}, [idAccomodation]);

    // On crée des const pour récupérer toutes les infos concernant le logement et le host.
	const name = dataCurrentAccomodation[0].host.name.split(' '); 
	const rating = dataCurrentAccomodation[0].rating;
	const description  = dataCurrentAccomodation[0].description;
	const equipments = dataCurrentAccomodation[0].equipments;

	return (
		<>
			<Header/>
			<Slider imageSlider={imageSlider}/>
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
                        {/*Ici on utilise simplement le tableau pour récupérer les informations */}
						<h1>{dataCurrentAccomodation[0].title}</h1>
						<p>{dataCurrentAccomodation[0].location}</p>
						<div>
                            {/*On prend le tableau tag et pour chaque index on crée un bouton avec les infos */}
							{dataCurrentAccomodation[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
                                {/*On a utilisé la méthode split pour pouvoir mettre le nom et le prénom dans des spans différents */}
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
                            {/*On récupère la photo de l'host */}
							<img src={dataCurrentAccomodation[0].host.picture} alt="host of this accomodation" />
						</div>
							
						<div className="accomodation_content_host_stars">
                            {/*On crée un tableau de longueur 5 pour afficher les étoile */}
							{[...Array(5)].map((star, index) => {
                                {/*On crée une const qui rajoute 1 à l'index car sinon il commence à 0 */}
								const ratingValue = index + 1;
								return (
                                    // Si l'index de l'étoile et inf ou égal à la valeur de rating, on met l'étoile en rouge. Sinon elle sera grise
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
                        {/*On réutilise notre composant collapse. On lui passe des props avec les mêmes arguments title et content mais dans ces arguments, on met des infos différentes */}
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
	)
}
