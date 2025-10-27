'use client'
import { FaPlus, FaTrophy, FaX } from 'react-icons/fa6';
import { FaFolderOpen, FaRegSave, FaRegTrashAlt } from 'react-icons/fa';
import { DimensaoEnum, DimensaoTipo } from './Modal';
import "../css/SubModal.css"
import { useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';

interface Props {
  setValue: (value: any) => void,
  closeSubModal: () => void,
  dimensao: DimensaoTipo
}

export default function SubModal({
  setValue,
  closeSubModal,
  dimensao,
}: Props) {
  const [isAdd, setIsAdd] = useState<boolean>(false);

  const renderSwitch = (dimensao: DimensaoTipo) => {
    switch (dimensao) {
      case "disciplinas":
        return (
          <div>
            <h1>{DimensaoEnum[dimensao]} {isAdd ? (<> → <span onClick={() => setIsAdd(false)}>Editais</span> → Adicionar</>) : (<>→ Editais</>)}</h1>
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
              <div>
                <div className="input-box">
                  <label htmlFor="titulo">Título</label>
                  <input placeholder="Título do edital" autoComplete="off" type="text" id='titulo' name='titulo' />
                </div>
                <div className="columns">
                  <div className="input-box">
                    <label htmlFor="valor">Valor</label>
                    <input placeholder="Valor do edital" autoComplete="off" type="text" id='valor' name='valor' />
                  </div>
                  <div className="input-box">
                    <label htmlFor="captal-captado">Captal Captado</label>
                    <input placeholder="Captal captado pelo edital" autoComplete="off" type="text" id='captal-captado' name='captal-captado' />
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
              </div>
            </section>
          </div>
        )

      case "motores":
        return (
          <div>
            <h1>{DimensaoEnum[dimensao]} {isAdd ? (<> → <span onClick={() => setIsAdd(false)}>Projetos</span> → Adicionar</>) : (<>→ Projetos</>)}</h1>
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
              <div>
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
                    <input placeholder="Orçamento do projeto" autoComplete="off" type="text" id='orcamento' name='orcamento' />
                  </div>
                  <div className="input-box">
                    <label htmlFor="valor-gerado">Valor</label>
                    <input placeholder="Valor do projeto" autoComplete="off" type="text" id='valor-gerado' name='valor-gerado' />
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
              </div>
            </section>
          </div>
        )

      default:
        break;
    }
  }

  return (
    <section className="submodal-bg">
      <div>
        <header>
          <FaRegSave />
          <FaRegTrashAlt />
          <FaX onClick={closeSubModal} />
        </header>
        {renderSwitch(dimensao)}
      </div>
    </section>
  )
}