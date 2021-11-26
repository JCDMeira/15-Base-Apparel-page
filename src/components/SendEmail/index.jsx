// # imports
import React, { useState } from 'react';
import { isEmail } from 'validator';

// # my images
import arrow from '../../assets/images/icon-arrow.svg';
import error from '../../assets/images/icon-error.svg';

// # styles
import { MyInput } from './style';

// # toastify - toast messages
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// # toastify configuration
toast.configure();

function SendEmail() {
  // # estado com os dados do formulário, usa um objeto para que se tenha todos os estados internos nele.
  // # e assim usar apenas uma função de controle.
  const [formValues, setFormValues] = useState({});

  // # estado que ativa ou desativa o erro.
  const [myError, setMyError] = useState(false);

  // # cria a mensagem de sucesso.
  const notify = () => toast.success('Email successfully sent ');

  // # função de sunmit.
  function handleSubmit(e) {
    e.preventDefault();

    // # trata os dados para um objeto que contém os dados de cada par chave/valor
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // # nesse caso apenas chave email com seu valor correspondente.
    // # verifica as possibilidades de erro para vazio ou email de formato errado.
    if (data.email === '' || !isEmail(data.email)) setMyError(true);

    // # verifica se o email foi enviado corretamente
    if (isEmail(data.email)) {
      setMyError(false); // # reseta erro
      setFormValues({}); // # reseta o valor do input
      notify(); // # chama a notificação do toastify
    }
  }

  // # função genérica para tratar os inputs, sempre vai atualizar o
  // # objeto com o que estiver sendo alterado
  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <>
      <MyInput myError={myError}>
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={formValues.email || ''}
          />
          <button type="submit">
            <img src={arrow} alt="button" />
          </button>
        </form>
        <img className="error-image" src={error} alt="error" />
        <span className="error">Please provide a valid email</span>
      </MyInput>
    </>
  );
}

export { SendEmail };
