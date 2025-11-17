'use client'
import { FaPlus, FaTrophy, FaX } from 'react-icons/fa6';
import { FaFolderOpen, FaRegSave, FaRegTrashAlt } from 'react-icons/fa';
import { formatCurrency } from './Modal';
import "../css/SubModal.css"
import { useRef, useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';
import { useRouter } from 'next/navigation';

type SubModalTypes = "disciplinas" | "motores" | "cursos"

interface Props {
  // setValue: (value: any) => void,
  closeSubModal: () => void,
  dimensao: SubModalTypes,
  data: any,
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
  
  const [editais, setEditais] = useState(data.editais || []);

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
          const response = await fetch(`/api/dimensoes/disciplinas/${data.id}/editais`, {
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
      saveContent = () => {
        console.log("teste");
      }
      content = (<>
        <header>
          <FaRegSave onClick={() => {
            saveContent();
            closeSubModal();
            router.refresh();
          }} />
          <FaRegTrashAlt onClick={() => {
            deleteInstance();
            closeSubModal();
            router.refresh();
          }} />
          <FaX onClick={closeSubModal} />
        </header>
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
        console.log(body);

        const response = await fetch("/api/dimensoes/disciplinas/cursos", {
          method: "POST",
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
        console.log(result);
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
            saveContent();
            closeSubModal();
            router.refresh();
          }} />
          <FaRegTrashAlt onClick={() => {
            deleteInstance();
            closeSubModal();
            router.refresh();
          }} />
          <FaX onClick={closeSubModal} />
        </header>
        <div>
          <h1>Modal de Cursos</h1>
          <form ref={formRef}>
            <div className="input-box">
              <label htmlFor="nome">Nome</label>
              <input type="text" id='nome' name='nome' autoComplete="off" defaultValue={data?.nome || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="competicoes">Competições de Inovação</label>
              <input type="text" id='competicoes' name='competicoes' autoComplete="off" defaultValue={data?.competicoes?.join(", ")} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="fomento">Fomento</label>
                <input type="text" id='fomento' name='fomento' autoComplete="off" onChange={(event) => formatCurrency(event.target)} defaultValue={data?.fomento || ""} />
              </div>
              <div className="input-box">
                <label htmlFor="capital-captado">Capital Captado</label>
                <input type="text" id='capital-captado' name='capital_captado' autoComplete="off" onChange={(event) => formatCurrency(event.target)} defaultValue={data?.capital_captado || ""} />
              </div>
            </div>
          </form>
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