import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="Home">
        <div className='Home_Content'>
            <div className="Home_Text">
                <h1>UGC é o futuro – e você pode ser parte dele!</h1>
                    <p>Aprenda do zero a criar conteúdos autênticos que as marcas amam e pagam bem. Um curso prático, atualizado e direto ao ponto para você começar a lucrar, assim como nossos + de 1000 alunos
                    </p>
                    <div className='Home_Clients'>
                        <div className='Home_Client'>
                            <img src="/images/clients/client (1).png" alt="Client1" />
                        </div>
                        <div className='Home_Client'>
                            <img src="/images/clients/client (2).png" alt="Client2" />
                        </div>
                        <div className='Home_Client'>
                            <img src="/images/clients/client (3).png" alt="Client3" />
                        </div>
                        <div className='Home_Client'>
                            <img src="/images/clients/client (4).png" alt="Client4" />
                        </div>
                        <div className='Home_Client'>
                            <img src="/images/clients/client (5).png" alt="Client5" />
                        </div>
                    </div>
                <a href="https://pay.kirvano.com/541c8c47-fda9-4e90-adef-8bf899b88b91" target="_blank" rel="noopener noreferrer">
                    <button>Faça parte já!</button>
                </a>
            </div>
            <div className="Home_Image">
                <img src="/images/experts/nanda.png" alt="Nanda" />
            </div>
        </div>
    </div>
  )
}

export default Home
