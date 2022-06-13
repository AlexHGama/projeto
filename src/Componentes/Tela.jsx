import React, { useState, useEffect } from 'react';
//import { cards } from './Cards/card';
import mask from './mask';
import style from'./Componente.css';
import'./Modal';


const Tela = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [pagamento, setPagamento] = useState(null);

  useEffect(() => {
    fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
      .catch((erro) => console.log(erro));
  }, []);

  const abrirModal = (user) => {
    setPagamento(user);
    setModal(!modal);
  };

  return (
    <header className="header">
      <section>
        <div>
          {users.map((item) => (
            <div key={item.id}>
              <div className="container">
                <div className="image">
                  <img id="imagem" src={item.img} />
                </div>

                <div className="dados">
                  <p className="nome">
                    <b>Nome do Usuário:</b> {item.name}
                  </p>
                  <p>
                    <b className="user">ID:</b> {item.id}
                    <b>-Username:</b> {item.username}
                  </p>
                </div>

                <div className="botao">
                  <button onClick={() => abrirModal(item)} id="botao1">
                    Pagar
                  </button>
                </div>
              </div>
            </div>
          ))}
           
          {modal && (
            
            <div className="modal">
              
              <div className="textmodal">
                <p>Pagamento para:  {pagamento.name}</p>
              </div>
             
              <div onClick={() => abrirModal()}>
                <p className="fechar">X</p>                  
              </div>

              <div>
                <input
                  type="text"
                  placeholder="R$: 0,00"
                  onKeyUp={mask}
                  maxLength={30}
                  required
                />
              </div>
              <select name="selectCard" defaultValue={'info_card'}>
                  <option disabled>Informe o seu cartão:</option>,
                  
                 
                    return (
                      <option value="111111111111111" >
                        " Cartão com final "
                        "111"
                      </option>
                      <option value="4111111111111234" >
                        " Cartão com final "
                        "1234"
                      </option>

                      <input2
                        className={style.btn}
                        type="submit"
                        value={'Pagamento'}>
                      </input2> 

                    );                  
              </select>      
             
              <div>
                 

              </div>
              
                
            </div>
            
            
          )}
        </div>
      </section>
    </header>
  );
};

export default Tela;