import React from 'react'
import style from './Projects.module.css'
import phone from '../../images/phone2.jpg'
import trending from '../../images/trending.jpg'
import collage from '../../images/collage.jpg'
import collage2 from '../../images/pixabay.jpg'
import cats from '../../images/Cats.jpg'
import color from '../../images/color.png'
import adaptable from '../../images/adaptable.jpg'
import filmoteka from '../../images/filmoteka2.jpg'
import blog from '../../images/blog.jpg'
import feedback from '../../images/feedback.jpg'


const info = [
   {
    id: 1,
    url: 'https://criss9005.github.io/filmoteka/',
    description: 'Buscador de peliculas, opciones de agregar a la libreria watched and queue movies, con ventana modal de la informacion de cada pelicula.',
    img: filmoteka,
    name:'Filmoteka'
  },
  {
    id: 2,
    url: 'https://criss9005.github.io/goit-react-hw-08-phonebook/',
    description: 'Registro e inicio de sesion de Usuarios para tener una libreta de contactos privada.',
    img: phone,
    name:'Phonebook'
  },
  {
    id: 10,
    url: 'https://criss9005.github.io/goit-react-hw-02-feedback/',
    description: 'Aplicación que mide el nivel de retroalimentacion dado por usuarios por algun tipo de servicio',
    img: feedback,
    name:'Feedback'
  },
  {
    id: 3,
    url: 'https://criss9005.github.io/goit-react-hw-05-movies',
    description: 'Aplicación de búsqueda y almacenamiento de peliculas trabajando con la API themoviedb.org',
    img: trending,
    name:'Movies'
  },
  {
    id: 4,
    url: 'https://criss9005.github.io/goit-react-hw-04-image-finder/',
    description: 'Búsqueda y almacenamiento de imagenes trabajando con el servicio público de búsqueda de imágenes Pixabay, con modal incluido.',
    img: collage2,
    name:'Image Finder'
  },
  {
    id: 5,
    url: 'https://criss9005.github.io/goit-js-hw-11/',
    description: 'Búsqueda de imagenes Pixabay, con Simpleligthbox, implementacion de scroll infinito.',
    img: collage,
    name:'Image Finder / Infinite Scroll '
  },
  {
    id: 6,
    url: 'https://criss9005.github.io/goit-js-hw-10/',
    description: 'Buscador de razas de gatos, descripcion y temperamento usando JavaScript.',
    img: cats,
    name:'Cat breed finder'
  },
  {
    id: 7,
    url: 'https://criss9005.github.io/goit-js-hw-09/',
    description: 'Cambiador de color aleatorio, contador de cuenta regresiva y generador de promesas.',
    img: color,
    name:'JavaScript'
  },
  {
    id: 8,
    url: 'https://criss9005.github.io/goit-markup-hw-08/',
    description: 'Front de pagina Web con diseño adaptable (Mobile first), Aplicando metodologia BEM, utilizacion de SVG y ventana Modal.',
    img: adaptable,
    name:'Diseño Adaptable'
  }
,
 
   {
    id: 9,
    url: 'https://cristian-perez-naizzir-1102833522-5.blogspot.com/',
    description: 'Primeros pasos realizando un Blog de tecnologia',
    img: blog,
    name:'Primeros Pasos'
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