import React from 'react'
import profile from '../../images/profile.jpg'
import style from './Home.module.css'


function Home() {
  return (
    <div className={style.home}>
     <ul className={style.section}>
        <li className={ style.image}>
        <img src={profile} alt="Cristian Perez profile" className={style.border} />
          <h2 className={style.profile }>Cristian Pérez Naizzir</h2>
        <ul className={style.list }>
            <li className={style.text}>
              <h3>Professional profile:</h3>
            <p>I am an engineer with more than 8 years of experience in the Commercial sector. I have worked in important multinational companies such as
Coca Cola and Productos Ramo, leading high-performance teams and performing various roles in the business field.
My leadership has focused on ensuring customer satisfaction, team development and effective collaboration in the
work environment. My focus on continuous improvement and my ability to build strong relationships have been instrumental in fostering
team collaboration and performance.</p>
            <p>Graduated in Electronic Engineering with knowledge in systems programming with the ability to design, develop and coordinate agile and timely strategies and procedures,
meeting the proposed objectives. I have a very good level of English that strengthens my skills in the work field.
I am characterized by being disciplined, responsible and organized with a great sense of respect and ethics, to ensure personal and company growth..
              </p>
              
            {/*   <h3>Perfil Profesional:</h3>
            <p>Soy un profesional en ingeniería con mas de 8 años de experiencia en el sector Comercial. He trabajado en importantes empresas multinacionales como
                lo son Coca Cola y Productos Ramo, liderando equipos de alto rendimiento y desempeñando diversos roles en el ámbito empresarial.
              Mi liderazgo se ha centrado en garantizar la satisfación del cliente, el desarrollo de equipos y una colaboracion efectiva en el
              entorno laboral. Mi enfoque en la mejora continua y mi capacidad de construir relaciones sólidas han sido fundamentales para fomentar
              la colaboración y el rendimiento del equipo.</p>
            <p>Graduado en Ingeniería Electrónica con conocimientos en programación de sistemas con capacidad de diseñar, elaborar y coordinar estrategias y procedimientos ágiles y oportunos,
              cumpliendo los objetivos propuestos. Poseo muy buen nivel en el idioma inglés que fortalecen mis habilidades en el campo laboral.
              Me caracterizo por ser disciplinado, responsable y organizado con un gran sentido del respeto y la ética, para velar por el
              crecimiento personal y de la empresa.
            </p> */}

            </li>   
            <li className={ style.skills}>

              <div className={ style.outbox}>
                <h3>Soft Habilities</h3>
                <ul className={style.box}>
                    <li>Algorithms and data structures</li>
                    <li>Flexibility and adaptability </li>
                    <li>Ability to learn </li>
                    <li>Teamwork </li>
                    <li>Requirements analysis Databases </li>
                    <li>Software development</li>
                    <li>Fault diagnosis </li>
                    <li>Excellent analytical skills </li>
                    <li>Problem solving</li>
                    <li>Resilience </li>
                    <li>English</li>

                </ul>

              </div>


                <div >
                <h3>Skills</h3>

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