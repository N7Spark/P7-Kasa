import './banner.scss'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

// La fonction Banner est exportée par défaut pour pouvoir être utilisée dans d'autres fichiers.
export default function Banner() {
	// On initialise un état local "aboutPage" à false.
	const [aboutPage, setAboutPage] = useState(false);
  
	// On récupère l'emplacement actuel en utilisant le hook "useLocation".
	const location = useLocation();
  
	// On utilise le hook "useEffect" pour effectuer une action lorsqu'un changement est détecté dans "location".
	useEffect(() => {
	  // Si l'emplacement actuel est "/about", on met à jour l'état "aboutPage" à true.
	  if(location.pathname === '/about'){
		setAboutPage(true)
	  };
	// [] signifie que "useEffect" ne doit s'exécuter qu'une seule fois au montage du composant.
	}, [])
  
	// On return une section HTML avec une classe différente selon la valeur de "aboutPage".
	// Si "aboutPage" est à true, la classe "banner_about" est utilisée, sinon la classe "banner" est utilisée.
	return (
	  <section className={aboutPage ? 'banner_about' : 'banner'}>
		{/* Si "aboutPage" est à false, on affiche un paragraphe. */}
		{!aboutPage && <p>Chez vous, partout et ailleurs</p>}
	  </section>
	)
  }