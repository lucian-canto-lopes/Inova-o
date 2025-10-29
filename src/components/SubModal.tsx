'use client'
import { FaPlus, FaTrophy, FaX } from 'react-icons/fa6';
import { FaFolderOpen, FaRegSave, FaRegTrashAlt } from 'react-icons/fa';
import { formatCurrency } from './Modal';
import "../css/SubModal.css"
import { useRef, useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';

type SubModalTypes = "disciplinas" | "motores" | "cursos"

interface Props {
  setValue: (value: any) => void,
  closeSubModal: () => void,
  dimensao: SubModalTypes
}

export default function SubModal({
  setValue,
  closeSubModal,
  dimensao,
}: Props) {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  let content;
  let saveContent: () => void;

  switch (dimensao) {
    case "disciplinas":
      saveContent = () => {
        console.log("teste");
      }
      content = (
        <div>
          <h1>Disciplinas {isAdd ? (<> → <span onClick={() => setIsAdd(false)}>Editais</span> → Adicionar</>) : (<>→ Editais</>)}</h1>
          <section style={isAdd ? { transform: "translateX(-100%)" } : {}}>
            <div>
              <button onClick={() => setIsAdd(true)}><span>Adicionar</span><FaPlus /></button>
              <table>
                <tbody>
                  <tr>
                    <td>Edital 1</td>
                    <td>R$ 1000,00</td>
                    <td><FaTrophy /></td>
                  </tr>
                  <tr>
                    <td>Edital 2</td>
                    <td>R$ 2000,00</td>
                    <td><FaTrophy /></td>
                  </tr>
                  <tr>
                    <td>Edital 3</td>
                    <td>R$ 3000,00</td>
                    <td><FaTrophy /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <form ref={formRef}>
              <div className="input-box">
                <label htmlFor="titulo">Título</label>
                <input placeholder="Título do edital" autoComplete="off" type="text" id='titulo' name='titulo' />
              </div>
              <div className="columns">
                <div className="input-box">
                  <label htmlFor="valor">Valor</label>
                  <input placeholder="Valor do edital" autoComplete="off" type="text" id='valor' name='valor' onChange={(event) => formatCurrency(event.target)} />
                </div>
                <div className="input-box">
                  <label htmlFor="captal-captado">Captal Captado</label>
                  <input placeholder="Captal captado pelo edital" autoComplete="off" type="text" id='captal-captado' name='captal-captado' onChange={(event) => formatCurrency(event.target)} />
                </div>
              </div>
              <div className="columns">
                <div className="input-box">
                  <label htmlFor="total-equipes">Total de Equipes</label>
                  <input placeholder="Total de equipes participantes" autoComplete="off" type="number" id='total-equipes' name='total-equipes' />
                </div>
                <div className="input-box">
                  <label htmlFor="t-e-vitoriosas">Total de Equipes Vitoriosas</label>
                  <input placeholder="Total de equipes vitoriosas" autoComplete="off" type="number" id='t-e-vitoriosas' name='t-e-vitoriosas' />
                </div>
              </div>
            </form>
          </section>
        </div>
      )
      break;

    case "motores":
      saveContent = () => {
        console.log("teste");
      }
      content = (
        <div>
          <h1>Motores {isAdd ? (<> → <span onClick={() => setIsAdd(false)}>Projetos</span> → Adicionar</>) : (<>→ Projetos</>)}</h1>
          <section style={isAdd ? { transform: "translateX(-100%)" } : {}}>
            <div>
              <button onClick={() => setIsAdd(true)}><span>Adicionar</span><FaPlus /></button>
              <table>
                <tbody>
                  <tr>
                    <td>Projeto 1</td>
                    <td><FaFolderOpen /></td>
                  </tr>
                  <tr>
                    <td>Projeto 2</td>
                    <td><FaFolderOpen /></td>
                  </tr>
                  <tr>
                    <td>Projeto 3</td>
                    <td><FaFolderOpen /></td>
                  </tr>
                  <tr>
                    <td>Projeto 4</td>
                    <td><FaFolderOpen /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <form ref={formRef}>
              <div className="input-box">
                <label htmlFor="titulo">Título</label>
                <input placeholder="Título do projeto" autoComplete="off" type="text" id='titulo' name='titulo' />
              </div>
              <div className="input-box">
                <label htmlFor="descricao">Descrição</label>
                <input placeholder="Descrição do projeto" autoComplete="off" type="text" id='descricao' name='descricao' />
              </div>
              <div className="columns">
                <div className="input-box">
                  <label htmlFor="orcamento">Orçamento</label>
                  <input placeholder="Orçamento do projeto" autoComplete="off" type="text" id='orcamento' name='orcamento' onChange={(event) => formatCurrency(event.target)} />
                </div>
                <div className="input-box">
                  <label htmlFor="valor-gerado">Valor</label>
                  <input placeholder="Valor do projeto" autoComplete="off" type="text" id='valor-gerado' name='valor-gerado' onChange={(event) => formatCurrency(event.target)} />
                </div>
              </div>
              <div className="columns">
                <div className="input-box">
                  <label htmlFor="data-criacao">Data de criação</label>
                  <input placeholder="Data de criação do projeto" autoComplete="off" type="date" id='data-criacao' name='data-criacao' />
                </div>
                <div className="input-box">
                  <label htmlFor="duracao">Duração</label>
                  <input placeholder="Duração do projeto" autoComplete="off" type="text" id='duracao' name='duracao' />
                </div>
              </div>
              <button><span>Adicionar Imagem</span><LuImagePlus /></button>
            </form>
          </section>
        </div>
      )
      break;

    case "cursos":
      saveContent = () => {
        if (!formRef.current) return console.error("Não há um formulário no submodal atual");

        const formData = new FormData(formRef.current);
        const body = Object.fromEntries(formData.entries());
        console.log(body);
      }
      content = (
        <div>
          <h1>Modal de Cursos</h1>
          <form ref={formRef}>
            <div className="input-box">
              <label htmlFor="nome">Nome</label>
              <input type="text" id='nome' name='nome' autoComplete="off" />
            </div>
            <div className="input-box">
              <label htmlFor="competicoes">Competições de Inovação</label>
              <input type="text" id='competicoes' name='competicoes' autoComplete="off" />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="fomento">Fomento</label>
                <input type="text" id='fomento' name='fomento' autoComplete="off" onChange={(event) => formatCurrency(event.target)} />
              </div>
              <div className="input-box">
                <label htmlFor="captal-captado">Captal Captado</label>
                <input type="text" id='captal-captado' name='captal-captado' autoComplete="off" onChange={(event) => formatCurrency(event.target)} />
              </div>
            </div>
          </form>
        </div>
      )
      break;

    default:
      saveContent = () => {
        console.log("Se vc está vendo essa mensagem no terminal, algo está errado")
      }
      break;
  }

  return (
    <section className="submodal-bg">
      <div>
        <header>
          <FaRegSave onClick={saveContent} />
          <FaRegTrashAlt />
          <FaX onClick={closeSubModal} />
        </header>
        {content}
      </div>
    </section>
  )
}