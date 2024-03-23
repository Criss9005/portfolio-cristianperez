import React from 'react'
import profile from '../../images/profile.jpg'
import style from './Home.module.css'


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
            <li className={ style.skills}>

              <div className={ style.outbox}>
                <h3>Habilidades Blandas</h3>
                <ul className={style.box}>
                  <li>Algoritmos y estructuras de datos</li>
                  <li>Flexibilidad y adaptabilidad	</li>
                  <li>Habilidad para aprender	</li>
                  <li>Trabajo en equipo	</li>
                  <li>Análisis de requisitos Bases de datos	</li>
                  <li>Desarrollo de software</li>
                  <li>Diagnóstico de fallas	</li>
                  <li>Excelente capacidad de análisis	</li>
                  <li>Resolución de problemas</li>
                  <li>Resiliencia	</li>
                  <li>Inglés</li>

                </ul>

              </div>


                <div >
                <h3>Habilidades Técnicas</h3>

                <ul className={style.box}>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>SAAS</li>
                  <li>React</li>
                  <li>React Redux</li>
                  <li>REST API</li>
                  <li>Node.js</li>
                  <li>GitHub</li>
                  <li>Trello</li>
                  <li>MaterialUi</li>
                  <li>C++</li>

                </ul>
                </div>
            
          
            
            </li>          
          
        </ul>
        </li>

      </ul>
      
    </div>
  )
}

export default Home