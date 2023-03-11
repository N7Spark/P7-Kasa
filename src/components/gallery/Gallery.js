import './gallery.scss'
import datas from '../../data/data'
import Card from '../card/Card'

export default function Gallery() {

    // Le composant Gallery affiche une liste de cards, chacune représentant un article.

    return (

        <main className='home_gallery'>
            {/* La méthode map() est utilisée pour parcourir le tableau datas et créer une carte pour chaque élément */}
            {datas.map(data => {
                return (
                    <Card
                        // La clé unique pour chaque card est l'ID de l'article
                        key={data.id}
                        // Les propriétés suivantes sont passées à chaque card en tant que props
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )

}


