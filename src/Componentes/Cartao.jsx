const dadosCC = async (e) => {
  e.preventDefault();

    const formData = new FormData(e.target);
    const value = formData.get('valorPago');
    const cartao = formData.get('selecionaCartao');
    const selecaoCartao = cartoes.find(
      (cartaoObjeto) => cartaoObjeto.card_number === cartao,
    );

    (
      await fetch(
        'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989',
        {
          method: 'POST',
          body: {
            card_number: cartao,
            cvv: selecaoCartao,
            expiry_date: selecaoCartao.expiry_date,

            destination_user_id: pagamento.id,

            value: value,
          },
        },
      )
    ).json();

    if (cartao === '1111111111111111') {
      setSucesso(true);
    } else {
      setErro(true);
    }
    setModal(false);
};