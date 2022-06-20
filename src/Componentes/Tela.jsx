import React, { useState, useEffect } from "react";
import { card } from "./card";
import mask from "./mask";
import style from "./Componente.css";
import "./Modal";
import Aprovado from "./Aprovado";
//import Recusado from './Recusado';

const Tela = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [pagamento, setPagamento] = useState(null);
  const [isCardValid, setIsCardValid] = useState(false);
  const [pay, setPay] = useState(true);

  useEffect(() => {
    fetch("https://www.mocky.io/v2/5d531c4f2e0000620081ddce")
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
      .catch((erro) => console.log(erro));
  }, []);

  const abrirModal = (user) => {
    setPagamento(user);
    setModal(!modal);
  };

  const dadosCartao = async (e) => {
    e.preventDefault();
    setPay(false);
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
              {pay ? (
                <div>
                  <div className="textmodal">
                    <p>Pagamento para: {pagamento.name}</p>
                  </div>

                  <div onClick={() => abrirModal()}>
                    <p className="fechar">X</p>
                  </div>

                  <form onSubmit={dadosCartao}>
                    <div>
                      <input
                        type="text"
                        placeholder="R$: 0,00"
                        onKeyUp={mask}
                        maxLength={30}
                        required
                      />
                    </div>
                    {/*<Informe o cartão*/}
                    <select name="selectCard" defaultValue={"info_card"}>
                      {card.map((cards) => (
                        <option
                          key={cards.card_number}
                          value={cards.card_number}
                        >
                          Cartão com final {cards.card_number.substring(12)}
                        </option>
                      ))}
                    </select>

                    <div className="botaomodal">
                      <input type="submit" value="Pagar" />
                    </div>
                  </form>
                </div>
              ) : (
                <>{false ? <Aprovado /> : <p>negado</p>}</>
              )}
            </div>
          )}
        </div>
      </section>
    </header>
  );
};

export default Tela;
