import React from 'react'
import profile from '../../images/profile.jpg'
import style from './Home.module.css'
import Star from 'images/Star'
import VoidStar from 'images/VoidStar'

function Home() {
  return (
    <div className={style.home}>
     <ul className={style.section}>
        <li className={ style.image}>
        <img src={profile} alt="Cristian Perez profile" className={style.border} />
          <h2 className={style.profile }>Ing. Cristian Pérez Naizzir</h2>
        <ul className={style.list }>
            <li className={style.text}>
              <h3>Perfil Profesional:</h3>
            <p>Soy un profesional en ingeniería con mas de 8 años de experiencia en el sector Comercial. He trabajado en importantes empresas multinacionales como
                lo son Coca Cola y Productos Ramo, liderando equipos de alto rendimiento y desempeñando diversos roles en el ámbito empresarial.
              Mi liderazgo se ha centrado en garantizar la satisfación del cliente, el desarrollo de equipos y una colaboracion efectiva en el
              entorno laboral. Mi enfoque en la mejora continua y mi capacidad de construir relaciones sólidas han sido fundamentales para fomentar
              la colaboración y el rendimiento del equipo.</p>
            <p>Graduado en Ingeniería Electrónica con conocimientos en programación de sistemas con capacidad de diseñar, elaborar y coordinar estrategias y procedimientos ágiles y oportunos,
              cumpliendo los objetivos propuestos. Poseo muy buen nivel en el idioma inglés que fortalecen mis habilidades en el campo laboral.
              Me caracterizo por ser disciplinado, responsable y organizado con un gran sentido del respeto y la ética, para velar por el
              crecimiento personal y de la empresa.
            </p>

            </li>   
        <li>

          <div className={ style.skills} >
                <h3>Habilidades</h3>
                <table style={{width:500, paddingLeft:30}}>
                  <tr>
                    <td>Algoritmos y estructuras de datos</td>
                    <td><Star/><Star/><Star/><Star/><VoidStar/></td>
                  </tr>
                  <tr>
                    <td>Flexibilidad y adaptabilidad </td>
                    <td><Star/><Star/><Star/><Star/><Star/></td>
                  </tr>
                  <tr>
                    <td>Habilidad para aprender</td>
                    <td><Star/><Star/><Star/><Star/><Star/></td>
                  </tr>
                  <tr>
                    <td>Trabajo en equipo </td>
                    <td><Star/><Star/><Star/><Star/><VoidStar/></td>
                  </tr>
                  <tr>
                    <td>Análisis de requisitos Bases de datos</td>
                    <td><Star/><Star/><Star/><Star/><VoidStar/></td>
                  </tr>
                  <tr>
                    <td>Desarrollo de software</td>
                    <td><Star/><Star/><Star/><Star/><Star/></td>
                  </tr>
                  <tr>
                    <td>Diagnóstico de fallas</td>
                    <td><Star/><Star/><Star/><Star/><VoidStar/></td>
                  </tr>
                  <tr>
                    <td>Excelente capacidad de análisis</td>
                    <td><Star/><Star/><Star/><Star/><Star/></td>
                  </tr>
                  <tr>
                    <td>Resolución de problemas</td>
                    <td><Star/><Star/><Star/><Star/><Star/></td>
                  </tr>
                  <tr>
                    <td>Resiliencia</td>
                    <td><Star/><Star/><Star/><Star/><Star/></td>
                  </tr>
                  <tr>
                    <td>Inglés</td>
                    <td><Star/><Star/><Star/><Star/><VoidStar/></td>
                  </tr>
              
                </table>
            
          </div>
            
            </li>
            <div>
              <h3>Tecnologías Trabajadas</h3>
              <p className={style.tecnology }>React | Node | JavaScript | CSS | HTML | GitHub | SASS | Trello | MaterialUi | TailWind |Redux | Microsoft Office Package  | C++ | JSON </p>
              
              
            </div>
          
        </ul>
        </li>

      </ul>
      
    </div>
  )
}

export default Home