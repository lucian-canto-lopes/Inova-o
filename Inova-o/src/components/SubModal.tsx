'use client'
import { FaPlus, FaTrophy, FaX } from 'react-icons/fa6';
import { FaRegSave, FaRegTrashAlt } from 'react-icons/fa';
import { formatCurrency } from './Modal';
import { useRef, useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';
import { useRouter } from 'next/navigation';
import "../css/SubModal.css"
import { toArray } from '../app/api/dimensoes/[dimensao]/route';

type SubModalTypes = "disciplinas" | "motores" | "cursos" | "eventos" | "negocios"

interface Props {
  // setValue: (value: any) => void,
  closeSubModal: () => void,
  dimensao: SubModalTypes,
  data: any,
}

function toFloat(value: any): number {
  if (!value) return 0.0;
  if (Number(value)) return parseFloat(value);
  value = value.replace(",", ".");
  return parseFloat(value);
}

export default function SubModal({
  // setValue, // Em algum momento eu adicionei esse parametro pensando que ele seria importante, não lembro o porque, porém
  closeSubModal,
  dimensao,
  data,
}: Props) {
  const router = useRouter();

  const [isAdd, setIsAdd] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  let content;
  let saveContent: () => void;
  let deleteInstance: () => void;

  const [editais, setEditais] = useState(
    Array.isArray(data.editais)
      ? data.editais
      : Array.isArray(data.projetos)
        ? data.projetos
        : Array.isArray(data.fomento)
          ? data.fomento
          : []
  ); // nomeado como editais, mas serve para projetos
  const fomentoTotal = editais.length > 0
    ? editais.reduce((acc: number, d: any) => acc + toFloat(d.valor), 0)
    : toFloat(data?.fomento);

  const addEdital = () => {
    if (!formRef.current) return console.error("[ERRO] Não foi possível acessar o formulário");

    const formData = new FormData(formRef.current);
    const ObjData = Object.fromEntries(formData.entries());

    setEditais((prev: any) => ([
      ...prev,
      ObjData
    ]));
    formRef.current.reset();
    return;
  };

  switch (dimensao) {
    case "disciplinas":
      saveContent = async () => {
        try {
          const response = await fetch(`/api/dimensoes/disciplinas/${data.dimensaoId}/editais`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ editais: editais }),
          });
          if (!response.ok) {
            const text = await response.text();
            throw new Error(`[ERROR] ${response.status}: ${text}`);
          }
        } catch (err) {
          console.error(err);
        }
      };

      content = (<>
        <header>
          <FaRegSave onClick={() => {
            saveContent();
            closeSubModal();
            router.refresh();
          }} />
          <FaX onClick={closeSubModal} />
        </header>
        <div>
          <h1>Disciplinas {isAdd ? (<> → <span onClick={() => setIsAdd(false)}>Editais</span> → Adicionar</>) : (<>→ Editais</>)}</h1>
          <section style={isAdd ? { transform: "translateX(-100%)" } : {}}>
            <div>
              <button onClick={() => setIsAdd(true)}><span>Adicionar</span><FaPlus /></button>
              <table>
                <tbody>
                  {editais.map((d: any, i: number) => {
                    return <tr key={i}>
                      <td><FaX onClick={() => {
                        setEditais(editais.filter((_: any, index: number) => index !== i));
                      }} /></td>
                      <td>{d.titulo}</td>
                      <td>{d.valor}</td>
                      <td>{d.e_vitoriosas > 0 ? <FaTrophy /> : ""}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
            <div>
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
                    <label htmlFor="e_vitoriosas">Total de Equipes Vitoriosas</label>
                    <input placeholder="Total de equipes vitoriosas" autoComplete="off" type="number" id='e_vitoriosas' name='e_vitoriosas' />
                  </div>
                </div>
              </form>
              <button onClick={() => {
                addEdital();
                setIsAdd(false);
              }}><span>Adicionar</span><FaPlus /></button>
            </div>
          </section>
        </div>
      </>)
      break;

    case "motores":
      saveContent = async () => {
        try {
          const response = await fetch(`/api/dimensoes/motores/${data.dimensaoId}/projetos`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ projetos: editais }),
          });
          if (!response.ok) {
            const text = await response.text();
            throw new Error(`[ERROR] ${response.status}: ${text}`);
          }
        } catch (err) {
          console.error(err);
        }
      };
      content = (<>
        <header>
          <FaRegSave onClick={() => {
            saveContent();
            closeSubModal();
            router.refresh();
          }} />
          <FaX onClick={closeSubModal} />
        </header>
        <div>
          <h1>Motores {isAdd ? (<> → <span onClick={() => setIsAdd(false)}>Projetos</span> → Adicionar</>) : (<>→ Projetos</>)}</h1>
          <section>
            <div style={isAdd ? { display: "none" } : {}}>
              <button onClick={() => setIsAdd(true)}><span>Adicionar</span><FaPlus /></button>
              <table>
                <tbody>
                  {editais.map((d: any, i: number) => {
                    const dateArray = d.data_criacao.split('-');
                    return <tr key={i}>
                      <td><FaX onClick={() => {
                        setEditais(editais.filter((_: any, index: number) => index !== i));
                      }} /></td>
                      <td>{d.titulo}</td>
                      <td>R$ {d.valor_gerado}</td>
                      <td>{`${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
            <div>
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
                    <label htmlFor="valor_gerado">Valor</label>
                    <input placeholder="Valor do projeto" autoComplete="off" type="text" id='valor_gerado' name='valor_gerado' onChange={(event) => formatCurrency(event.target)} />
                  </div>
                </div>
                <div className="columns">
                  <div className="input-box">
                    <label htmlFor="data_criacao">Data de criação</label>
                    <input placeholder="Data de criação do projeto" autoComplete="off" type="date" id='data_criacao' name='data_criacao' />
                  </div>
                  <div className="input-box">
                    <label htmlFor="duracao">Duração</label>
                    <input placeholder="Duração do projeto" autoComplete="off" type="text" id='duracao' name='duracao' />
                  </div>
                </div>
                <div className="columns">
                  <div className="input-box">
                    <label htmlFor="prazo">Prazo</label>
                    <input placeholder="Data de criação do projeto" autoComplete="off" type="date" id='prazo' name='prazo' />
                  </div>
                  <div className="input-box">
                    <label htmlFor="d-status">Status</label>
                    <select name="status" id="d-status">
                      <option value="progresso">Em progresso</option>
                      <option value="hiatos">Em hiato</option>
                      <option value="encerrado">Encerrado</option>
                      <option value="cancelado">Cancelado</option>
                    </select>
                  </div>
                </div>
                <button disabled><span>Adicionar Imagem</span><LuImagePlus /></button>
              </form>
              <button onClick={() => {
                addEdital();
                setIsAdd(false);
              }}><span>Adicionar</span><FaPlus /></button>
            </div>
          </section>
        </div>
      </>)
      break;

    case "cursos":
      saveContent = async () => {
        if (!formRef.current) return console.error("Não há um formulário no submodal atual");

        const formData = new FormData(formRef.current);
        const body = Object.fromEntries(formData.entries());
        body.fomento = editais;

        const response = await fetch("/api/dimensoes/disciplinas/cursos" + (data.id ? `/${data.id}` : ""), {
          method: data.id ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Error [${response.status}]: ${text}`);
        }

        const result = await response.json();
      };

      deleteInstance = async () => {
        if (!data) return console.error("O modal atual não está salvo na DataBase");

        try {
          const response = await fetch(`/api/dimensoes/disciplinas/cursos/${data.id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          if (!response.ok) {
            const text = await response.text();
            throw new Error(`Error [${response.status}]: ${text}`);
          };
        } catch (err) {
          console.error(err);
        }
      };

      content = (<>
        <header>
          <FaRegSave onClick={() => {
            setIsAdd(false);
            if (!isAdd) {
              closeSubModal();
              saveContent();
              router.refresh();
            }
          }} />
          <FaRegTrashAlt onClick={() => {
            deleteInstance();
            closeSubModal();
            router.refresh();
          }} />
          <FaX onClick={closeSubModal} />
        </header>
        <div>
          <h1>{isAdd ? (<><span onClick={() => setIsAdd(false)}>Modal de Cursos</span> → Editar Fomento</>) : 'Modal de Cursos'}</h1>
          <section style={isAdd ? { transform: "translateX(-100%)" } : {}}>
            <div>
              <form ref={isAdd ? undefined : formRef}>
                <div className="input-box">
                  <label htmlFor="nome">Nome</label>
                  <input type="text" id='nome' name='nome' autoComplete="off" defaultValue={data?.nome || ""} />
                </div>
                <div className='columns'>
                  <div className="input-box">
                    <label htmlFor="competicoes">Competições de Inovação</label>
                    <input type="text" id='competicoes' name='competicoes' autoComplete="off" defaultValue={Array.isArray(data?.competicoes) ? data.competicoes.join(", ") : data?.competicoes || ""} />
                  </div>
                  <div className="input-box">
                    <label htmlFor="capital-captado">Capital Captado</label>
                    <input type="text" id='capital-captado' name='capital_captado' autoComplete="off" onChange={(event) => formatCurrency(event.target)} defaultValue={data?.capital_captado || ""} />
                  </div>
                </div>
                <div className="columns">
                  <div className="input-box">
                    <label htmlFor="fomento">Fomento Total</label>
                    <input type="text" id='fomento' name='fomento' autoComplete="off" disabled value={
                      fomentoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || ""
                    } />
                  </div>
                  <span onClick={() => setIsAdd(true)}>Editar Fomento</span>
                </div>
              </form>
            </div>
            <div>
              <table>
                <tbody>
                  {editais.map((d: any, i: number) => {
                    const dateArray = d.date.split('-');
                    return <tr key={i}>
                      <td><FaX onClick={() => {
                        setEditais(editais.filter((_: any, index: number) => index !== i));
                      }} /></td>
                      <td>{d.valor}</td>
                      <td>{`${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`}</td>
                    </tr>
                  })}
                </tbody>
              </table>
              <form ref={isAdd ? formRef : undefined}>
                <div className="columns">
                  <div className="input-box">
                    <label htmlFor="valor">Valor</label>
                    <input type="text" name="valor" id="valor" autoComplete="off" onChange={(event) => formatCurrency(event.target)} />
                  </div>
                  <div className="input-box">
                    <label htmlFor="date">Data</label>
                    <input type="date" name="date" id="date" />
                  </div>
                </div>
              </form>
              <button onClick={() => {
                addEdital();
              }}><span>Adicionar</span><FaPlus /></button>
            </div>
          </section>
        </div>
      </>)
      break;

    default:
      break;
  }

  return (
    <section className="submodal-bg">
      <div>
        {content}
      </div>
    </section>
  )
}
