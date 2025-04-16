import React, { useState, useEffect } from 'react';
import "../components/Carousel.css";

const slides = [
  {
    text: "Fernanda Odim decidiu abandonar o CLT e seguir no mercado digital, o que transformou a sua vida. Largando o CLT onde trabalhava em hotelaria, em 2021 conheceu o mercado digital, hoje depois de 4 anos atuando na área, já conta com mais de 450 mentorados, mais de 500 mil faturados, e segue transformando vidas como o digital fez com ela. Empresária, mentora e influencer, hoje seu maior foco é profissionalizar pessoas de qualquer área para digitalizar seu negócio, e ensinar jovens a terem sua tão sonhada liberdade financeira e geográfica.",
    image: "/images/experts/nanda.png"
  },
  {
    text: "Anne Rosales já está no mercado digital desde 2019, hoje, além de possuir uma Agência de Marketing, também é mentora de posicionamento, branding e criação de conteúdo. Já trabalhou com grandes nomes do mercado como Natália Beauty, Charlies do Blog, Eudora e Quem Disse Berenice. Polímata, Anne é modelo, empresária e nano-influencer. Atuando no backstage de grandes produções, agora começa a colocar o rosto para ensinar oque vem aplicando há anos.",
    image: "/images/experts/anne.png"
  },
  {
    text: "Atuando com marketing de influência há mais de 6 anos! Há 1 ano atrás decidi estudar sobre UGC Creator e as possibilidades que chegavam para o mercado brasileiro! Vou te acompanhar nesse universo e te ensinar a ser uma Criadora de Conteúdo UGC profissional!",
    image: "/images/experts/carol.png"
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Carousel">
      <div className="Carousel_Content">
        <p>{slides[currentIndex].text}</p>
        <div className="Carousel_Buttons">
          <button className="Circle_Button" onClick={prevSlide}>&#8592;</button>
          <button className="Circle_Button" onClick={nextSlide}>&#8594;</button>
        </div>
      </div>
      <div className="Carousel_Image">
        <img src={slides[currentIndex].image} alt="Slide" />
      </div>
    </div>
  );
}

export default Carousel;