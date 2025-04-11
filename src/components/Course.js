import React from 'react';
import { useLocation } from 'react-router-dom';
import "../components/Course.css";

function Course() {
  const location = useLocation();

  // Same logic: map pathnames to payment links
  const linkMap = {
    '/': 'https://pay.kirvano.com/541c8c47-fda9-4e90-adef-8bf899b88b91',
    '/metodo-americano': 'https://pay.kirvano.com/cb5c9b28-71f5-4baa-b775-b535ec38c404?aff=91ccf7a9-3def-4bca-9916-babba4cd43b7',
  };

  const buttonLink = linkMap[location.pathname] || linkMap['/'];

  return (
    <div className="Course">
      <div className="Course_Content">
        <h2>*</h2>
        <h1>Estrutura da Formação</h1>
        <p>Tudo que você precisa saber, do ponto zero ao Ugc Profissional</p>

        <div className='Courses_Container'>
          <div className='Course_Card'>
            <div className='Course_Card_Image'>
              <img src="images/video/video_thumb.png" alt="Client1" />
            </div>
            <h3>Do Zero ao Avançado</h3>
            <p>As aulas vão te formar um Ugc Creator profissional, mesmo que você nunca tenha tido contato com essa profissão antes.</p>
          </div>

          <div className='Course_Card'>
            <div className='Course_Card_Image'>
              <img src="images/video/video_thumb_2.png" alt="Client1" />
            </div>
            <h3>Ugc Thinking</h3>
            <p>Aprenda a roteirizar, filmar e editar, do melhor jeito para atrair as marcas.</p>
          </div>

          <div className='Course_Card'>
            <div className='Course_Card_Image'>
              <img src="images/video/video_thumb_3.png" alt="Client1" />
            </div>
            <h3>Nora Assessoria e Plataforma</h3>
            <p>Assessoria exclusiva da Nora, e ainda, plataforma para alunos(as) da formação.</p>
          </div>
        </div>

        <div className='Courses_Buttons'>
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className='Button'>Quero ser um Ugc Creator</button>
          </a>
          <button className='Button'>Assistir previas</button>
        </div>
      </div>
    </div>
  );
}

export default Course;
