import React from 'react'
import style from './Projects.module.css'
import phone from '../../images/phone2.jpg'
import trending from '../../images/trending.jpg'
import collage2 from '../../images/pixabay.jpg'
import cats from '../../images/Cats.jpg'
import adaptable from '../../images/adaptable.jpg'
import filmoteka from '../../images/filmoteka2.jpg'
import feedback from '../../images/feedback.jpg'
import slimmom from '../../images/slimmom.png'
import icecream from '../../images/icecream2.png'

const info = [
  {
    id: 10,
    url: 'https://criss9005.github.io/DevNest-Front/',
    descriptionES: 'Pagina para registrar calorias diarias y realizar seguimiento mediante base de datos. Diseño adaptable',
    description: "Page to record daily calories and track them using a database. Responsive design",
    img: slimmom,
    name:'SlimMom'
  },
   {
    id: 1,
    url: 'https://criss9005.github.io/filmoteka/',
     descriptionES: 'Buscador de peliculas, opciones de agregar a la libreria watched and queue movies, con ventana modal de la informacion de cada pelicula.',
    description: "Movie search engine, options to add watched and queue movies to the library, with a modal window with information about each movie.",
    img: filmoteka,
    name:'Filmoteka'
  },
  {
    id: 2,
    url: 'https://criss9005.github.io/goit-react-hw-08-phonebook/',
    descriptionES: 'Registro e inicio de sesion de Usuarios para tener una libreta de contactos privada.',
    description: "User registration and login to have a private contact phonebook.",
    img: phone,
    name:'Phonebook'
  },
  {
    id: 10,
    url: 'https://criss9005.github.io/goit-react-hw-02-feedback/',
    descriptionES: 'Aplicación que mide el nivel de retroalimentacion dado por usuarios por algun tipo de servicio',
    description: "Application that measures the level of feedback given by users for some type of service",
    img: feedback,
    name:'Feedback'
  },
  {
    id: 3,
    url: 'https://criss9005.github.io/goit-react-hw-05-movies',
    descriptionES: 'Aplicación de búsqueda y almacenamiento de peliculas trabajando con la API themoviedb.org',
    description: "Movie search and storage application working with themoviedb.org API",
    img: trending,
    name:'Movies'
  },
  {
    id: 4,
    url: 'https://criss9005.github.io/goit-react-hw-04-image-finder/',
    descriptionES: 'Búsqueda y almacenamiento de imagenes trabajando con el servicio público de búsqueda de imágenes Pixabay, con modal incluido.',
    description: "Search and store images using the public image search service Pixabay, including modal.",
    img: collage2,
    name:'Image Finder'
  },
  {
    id: 6,
    url: 'https://criss9005.github.io/goit-js-hw-10/',
    descriptionES: 'Buscador de razas de gatos, descripcion y temperamento usando JavaScript.',
    description: "Cat breed search, description and temperament using JavaScript.",
    img: cats,
    name:'Cat breed finder'
  },
   {
    id: 8,
    url: 'https://criss9005.github.io/goit-markup-hw-08/',
    descriptionES: 'Front de pagina Web con diseño adaptable (Mobile first), Aplicando metodologia BEM, utilizacion de SVG y ventana Modal.',
    description: "Web page front end with responsive design (Mobile first), applying BEM methodology, using SVG and Modal window.",
    img: adaptable,
    name:'Responsive Design'
  },
    {
    id: 9,
    url: 'https://michaeling10.github.io/IceCreamProject/index.html',
    descriptionES: 'Front de pagina Web con diseño adaptable (Mobile first), Aplicando metodologia BEM con menu mobile.',
    description: "Web page front end with responsive design (Mobile first), applying BEM methodology with mobile menu.",
    img: icecream,
    name:'IceCream'
  }
   
   
]


function Projects() {
  return (
    <div className={style.mainContainer }>
      

      <ul className={style.cards}>
        {info.map((project) => (

          <li className={style.cards__item} id={project.id}>
            <a href={project.url} className={style.cards__link}>
              <p className={style.cards__overlay}>{project.description }</p>
              <img className={style.cards__img} src={project.img} alt={project.description }/>
                </a>
                
            <p className={style.cards__title}>{project.name } </p> 
          </li>
        ))}
        
        

        
        
      </ul>


    </div>
  )
}

export default Projects