import { useState } from "react";
import "./form.css"; // Importa o CSS específico para este componente
import image from "../assets/image/4912418.jpg"; // Importa uma imagem para uso no componente
 
const Form = () => {
    // Estado inicial do formulário
    const initialForm = {
        nome: "",
        email: "",
        senha: ""
    }
 
    // Estado do formulário usando useState
    const [formState, setFormState] = useState(initialForm);
 
    // Função para lidar com as alterações dos campos de entrada
    const handleInput = (event) => {
        const { value, name } = event.currentTarget;
        setFormState({ ...formState, [name]: value });
    }
 
    // Função para lidar com a submissão do formulário
    const handleSubmit = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
 
        // Verifica se todos os campos estão preenchidos
        if (!formState.nome || !formState.email || !formState.senha) {
            alert("Por favor, preencha todos os campos!!!");
            return;
        }
 
        console.log(formState.nome); // Exibe o valor do campo nome no console
        console.log(formState.email); // Exibe o valor do campo email no console
        console.log(formState.senha); // Exibe o valor do campo senha no console
 
        // Reseta o formulário para o estado inicial
        setFormState({ ...initialForm });
    }
 
    return (
        <div className="containerForm"> {/* Container principal do formulário */}
            <div>
                <h2>Cadastro</h2> {/* Título do formulário */}
                <form onSubmit={handleSubmit}> {/* Formulário com função de submissão */}
 
                    <div className="form-control"> {/* Contêiner para o campo de entrada de nome */}
                        <label htmlFor="nome">Nome</label> {/* Label associado ao campo de nome */}
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formState.nome}
                            onChange={handleInput} // Atualiza o estado ao mudar o valor
                        />
                    </div>
 
                    <div className="form-control"> {/* Contêiner para o campo de entrada de email */}
                        <label htmlFor="email">Email</label> {/* Label associado ao campo de email */}
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInput} // Atualiza o estado ao mudar o valor
                        />
                    </div>
 
                    <div className="form-control"> {/* Contêiner para o campo de entrada de senha */}
                        <label htmlFor="senha">Senha</label> {/* Label associado ao campo de senha */}
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            value={formState.senha}
                            onChange={handleInput} // Atualiza o estado ao mudar o valor
                        />
                    </div>
 
                    <div className="form-control"> {/* Contêiner para o botão de submissão */}
                        <button type="submit">ENVIAR</button> {/* Botão de submissão */}
                    </div>
                </form>
            </div>
            <img src={image} alt="Imagem" className="roxo" /> {/* Imagem exibida ao lado do formulário */}
        </div>
    )
}
 
export default Form; // Exporta o componente Form para ser utilizado em outros arquivos
 