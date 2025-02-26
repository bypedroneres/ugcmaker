import React, { useState } from 'react';
import "../components/FAQ.css";

const faqs = [
  { question: "Eu tenho medo de não conseguir fechar contratos com as marcas.", answer: "Entendo perfeitamente como você se sente, é normal ter essa insegurança no começo. Mas no treinamento UGC Maker, você aprende as estratégias exatas para se conectar com as marcas certas, desde como abordar até o que escrever para aumentar suas chances de fechar contratos. Além disso, você terá modelos prontos de mensagens e portfólios que já ajudaram centenas de alunos a garantir seus primeiros trabalhos rapidamente!" },
  { question: "Eu nunca gravei vídeos e não sei nem por onde começar.", answer: "Sem problemas! O treinamento foi feito exatamente para quem nunca gravou nada ou acha que não leva jeito. Eu ensino o passo a passo para criar vídeos simples e autênticos, que as marcas amam, tudo de forma prática e fácil. Você só precisa de um celular e um pouquinho de dedicação para começar." },
  { question: "Eu não tenho tempo para fazer isso.", answer: "Entendo, o tempo é algo valioso mesmo. Mas você sabia que para criar conteúdo UGC não precisa investir horas por dia? Muitos dos meus alunos gravam seus vídeos em 1 ou 2 horas no máximo, ajustando à rotina que já têm. E o treinamento é todo no seu ritmo, sem pressão. Você pode aprender e colocar em prática nos momentos que tiver livre." },
  { question: "Eu não tenho dinheiro para investir no curso agora.", answer: "Eu sei que é um momento de escolha, e fazer um investimento nem sempre é fácil. Mas pense comigo: o valor que você investe hoje é o primeiro passo para começar a ganhar dinheiro constantemente com as marcas. Muitos alunos recuperam o valor investido no treinamento em poucos dias. Além disso, o treinamento foi pensado para ser acessível, e você não terá que investir em mais nada depois de adquiri-lo." },
  { question: "Eu não tenho seguidores e nem sou influenciador.", answer: "Isso é o mais surreal do mercado UGC! Você não precisa ter seguidores nem ser influenciador, porque o foco é criar conteúdo para as marcas usarem nos perfis delas, não no seu. Elas estão procurando exatamente pessoas reais, comuns, para transmitir autenticidade nos conteúdos delas." },
  { question: "E se eu não gostar ou não conseguir resultados?", answer: "Eu confio tanto no que ensino no treinamento que te dou todo o suporte necessário para aplicar as estratégias e ter resultados. Além disso, o conteúdo é claro, objetivo e testado por muitos alunos que já estão no mercado. Se você se dedicar e seguir as aulas, as chances de não gostar ou não ter resultados são mínimas!" },
  { question: "Eu não tenho equipamentos profissionais.", answer: "Não precisa! Um celular com câmera é tudo o que você precisa para começar. As marcas não buscam vídeos superproduzidos, e sim conteúdos autênticos e reais. No treinamento, ensino como criar conteúdo incríveis com recursos simples que você já tem em casa." },
  { question: "Eu tenho medo de isso ser uma furada/golpe/pirâmide.", answer: "Eu entendo sua preocupação, e é por isso que faço questão de deixar tudo transparente. O mercado de UGC é totalmente real, regulamentado e já consolidado nos Estados Unidos e crescendo muito no Brasil. Além disso, você pode ver os resultados dos meus alunos, que estão ganhando dinheiro e recebendo produtos trabalhando de forma legítima." },
  { question: "Eu moro no interior/longe das grandes cidades, isso vai funcionar pra mim?", answer: "Sim! O UGC é 100% digital, então não importa onde você mora. As marcas enviam os produtos direto para a sua casa e você envia os conteúdos de forma online. Isso é o que torna esse mercado tão acessível para qualquer pessoa, em qualquer lugar." },
  { question: "Isso não vai demorar para dar resultado?", answer: "Os resultados dependem da sua dedicação, mas muitos dos meus alunos começam a fechar trabalhos com marcas nas primeiras semanas, aplicando o que ensino no treinamento. É um mercado rápido e em alta, então as oportunidades são muitas!" },
  { question: "Posso pagar assim que receber das marcas?", answer: "Infelizmente não tem como. A plataforma libera o acesso somente após a confirmação do pagamento." },
  { question: "Consigo parcelar no Pix?", answer: "Infelizmente, o parcelamento é possível apenas no cartão de crédito, porque é uma regra da plataforma. Mas dá uma olhadinha se tem alguém que possa te ajudar com o cartão. Vale muito a pena, e o retorno financeiro é bem rápido!" },
  { question: "Medo de não dar certo.", answer: "É normal ter essa dúvida, sabia? Mas quero que você saiba que o treinamento foi criado justamente para pessoas que nunca fizeram nada parecido e têm medo de começar. Eu vou te ensinar tudo passo a passo, com estratégias que já ajudaram muitas pessoas. Se você se dedicar, vai perceber que é mais simples do que imagina." },
  { question: "Precisa ser maior de idade?", answer: "Não, não precisa! O UGC é acessível para qualquer idade. Tenho alunos que começaram muito novos e já estão ganhando dinheiro com isso. O importante é a dedicação e aprender o que ensino no treinamento, e claro, que seus pais concordem e saibam que você está fazendo isso!" },
  { question: "Em quanto tempo eu consigo fechar trabalhos?", answer: "Depende da sua dedicação! Mas muitos dos meus alunos conseguem fechar seus primeiros trabalhos em 1 a 2 semanas, seguindo as estratégias que ensino. É rápido, prático e você já pode começar a ganhar dinheiro." },
  { question: "Eu não sou criativo, consigo fazer mesmo assim?", answer: "Sim! No treinamento, eu ensino como criar conteúdo simples e autênticos, que é o que as marcas realmente procuram. Você não precisa ser super criativo, apenas aprender a seguir os formatos que já funcionam, e eu te dou tudo isso prontinho." }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="FAQ">
      <h2>FAQ</h2>
      <div className="FAQ_List">
        {faqs.map((faq, index) => (
          <div key={index} className="FAQ_Item">
            <button className="FAQ_Question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && <p className="FAQ_Answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
