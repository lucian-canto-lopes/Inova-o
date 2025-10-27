'use client'
import { FaPlus, FaX } from 'react-icons/fa6';
import { FaRegSave, FaRegTrashAlt } from 'react-icons/fa';
import '../css/Modal.css';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const TextEditor = dynamic(() => import("./TextEditor"), { ssr: false })

export enum DimensaoEnum {
  disciplinas = "Disciplinas",
  eventos = "Eventos",
  motores = "Motores",
  negocios = "Negócios"
}
export type DimensaoTipo = keyof typeof DimensaoEnum;

interface Props {
  closeModal: () => void;
  modalType: DimensaoTipo;
  modalData: any,
  modalContent: any,
}

const formatCurrency = (input: HTMLInputElement) => {
  input.value = input.value.replace(/\D/g, "");
  if (input.value.length < 3) {
    input.value = "00" + input.value;
  }
  input.value = input.value.slice(0, input.value.length - 2) + "," + input.value.slice(input.value.length - 2, input.value.length);
  if (input.value.startsWith("0") && input.value.length > 4) input.value = input.value.slice(1, input.value.length);
}

const formatDate = (date_string: string) => {
  if (!date_string) return;
  return date_string.slice(0, 10);
}

export function Modal({
  closeModal,
  modalType,
  modalData,
  modalContent,
}: Props) {
  const renderSwitch = (modalType: DimensaoTipo) => {
    switch (modalType) {
      case 'disciplinas':
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input autoComplete='off' type="text" id="d-nome" name='nome' placeholder='Nome da disciplina' defaultValue={modalData?.nome || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="d-coordenador">Coordenador</label>
              <input autoComplete='off' type="text" id="d-coordenador" name='coordenador' placeholder='Coordenador da Disciplina' defaultValue={modalData?.coordenador || ""} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-semestre">Semestre</label>
                <input autoComplete='off' type="text" id="d-semestre" name='semestre' placeholder='2025.1' defaultValue={modalData?.semestre || ""} />
              </div><div className="input-box">
                <label htmlFor="d-codigo">Código</label>
                <input autoComplete='off' type="text" id="d-codigo" name='codigo' placeholder='Código da disciplina' defaultValue={modalData?.codigo || ""} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-a-matriculados">Alunos Matriculados</label>
                <input autoComplete='off' type="text" id="d-a-matriculados" name='alunos_matriculados' defaultValue={modalData?.alunos_matriculados?.map((aluno: any) => {
                  return ` ${aluno}`
                })} />
              </div><div className="input-box">
                <label htmlFor="d-a-aprovados">Alunos Aprovados</label>
                <input autoComplete='off' type="text" id="d-a-aprovados" name='alunos_aprovados' defaultValue={modalData?.alunos_aprovados?.map((aluno: any) => {
                  return ` ${aluno}`
                })} />
              </div>
            </div>
          </>
        )
      case "eventos":
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input autoComplete='off' type="text" id="d-nome" name='nome' placeholder='Nome do evento' defaultValue={modalData?.nome || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="d-descricao">Descrição</label>
              <input autoComplete='off' type="text" id="d-descricao" name='descricao' placeholder='Descrição do evento' defaultValue={modalData?.descricao || ""} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-data_inicio">Data de Início</label>
                <input autoComplete='off' type="date" id="d-data_inicio" name='data_inicio' placeholder='Data de início' defaultValue={formatDate(modalData?.data_inicio) || ""} />
              </div><div className="input-box">
                <label htmlFor="d-duracao">Duração</label>
                <input autoComplete='off' type="text" id="d-duracao" name='duracao' placeholder='Duração do evento' defaultValue={modalData?.duracao || ""} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-custo">Custo</label>
                <input autoComplete='off' type="text" id="d-custo" name='custo' placeholder='Custo do evento (Valor em reais (R$))' defaultValue={modalData?.custo || ""} onChange={(event) => formatCurrency(event.target)} />
              </div><div className="input-box">
                <label htmlFor="d-receita">Receita</label>
                <input autoComplete='off' type="text" id="d-receita" name='receita' placeholder='Receita do Evento (Valor em reais (R$))' defaultValue={modalData?.receita || ""} onChange={(event) => formatCurrency(event.target)} />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="d-publico_participante">Público Participante</label>
              <input autoComplete='off' type="text" id="d-publico_participante" name='publico_participante' placeholder='Pessoas envolvidas no evento' defaultValue={modalData?.publico_participante?.map((publico: any) => ` ${publico}`)} />
            </div>
            <div className="input-box">
              <label htmlFor="d-qtd_publico">Quandidade de público</label>
              <input autoComplete='off' type="number" id="d-qtd_publico" name='qtd_publico' placeholder='Quantidade de público do evento' defaultValue={modalData?.qtd_publico || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="d-equipe">Equipe de organização</label>
              <input autoComplete='off' type="text" id="d-equipe" name='equipe' placeholder='Equipe de organização do evento' defaultValue={modalData?.equipe?.map((membro: any) => ` ${membro}`)} />
            </div>
            <div className="input-box">
              <label htmlFor="d-coordenadores">Coordenadores</label>
              <input autoComplete='off' type="text" id="d-coordenadores" name='coordenadores' placeholder='Coordenadores do evento' defaultValue={modalData?.coordenadores?.map((coordenador: any) => ` ${coordenador}`)} />
            </div>
            <div className="input-box">
              <label htmlFor="d-parceiros">Parceiros</label>
              <input autoComplete='off' type="text" id="d-parceiros" name='parceiros' placeholder='Contribuidores do evento' defaultValue={modalData?.parceiros?.map((parceiro: any) => ` ${parceiro}`)} />
            </div>
          </>
        )
      case "negocios":
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input autoComplete='off' type="text" id="d-nome" name='nome' placeholder='Nome do nogócio' defaultValue={modalData?.nome || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="d-area_atuacao">Área de atuação</label>
              <input autoComplete='off' type="text" id="d-area_atuacao" name='area_atuacao' placeholder='Área de atuação do nogócio' defaultValue={modalData?.area_atuacao || ""} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-faturamento_anual">Faturamento anual</label>
                <input autoComplete='off' type="text" id="d-faturamento_anual" name='faturamento_anual' placeholder='Faturamento anual do negócio' defaultValue={modalData?.faturamento_anual || ""} onChange={(event) => formatCurrency(event.target)} />
              </div><div className="input-box">
                <label htmlFor="d-data_criacao">Data de criação</label>
                <input autoComplete='off' type="date" id="d-data_criacao" name='data_criacao' placeholder='Data de criação do nogócio' defaultValue={formatDate(modalData?.data_criacao) || ""} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-fundadores">Fundadores</label>
                <input autoComplete='off' type="text" id="d-fundadores" name='fundadores' placeholder='Fundadores do nogócio' defaultValue={modalData?.fundadores?.map((fundador: any) => ` ${fundador}`)} />
              </div><div className="input-box">
                <label htmlFor="d-porte">Porte do nogócio</label>
                <input autoComplete='off' type="text" id="d-porte" name='porte' placeholder='Ex.: MEI | ME | EPP | etc.' defaultValue={modalData?.porte || ""} />
              </div>
            </div>
          </>
        )
      case "motores":
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input autoComplete='off' type="text" id="d-nome" name='nome' placeholder='Nome do motor' defaultValue={modalData?.nome || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="d-descricao">Descrição</label>
              <input autoComplete='off' type="text" id="d-descricao" name='descricao' placeholder='Descrição do motor' defaultValue={modalData?.descricao || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="d-projetos">Projetos Executados</label>
              <input autoComplete='off' type="text" id="d-projetos" name='projetos' placeholder='Projetos executados pelo motor' defaultValue={modalData?.projetos?.map((projeto: any) => ` ${projeto}`)} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-motor_tipo">Tipo</label>
                <input autoComplete='off' type="text" id="d-motor_tipo" name='motor_tipo' placeholder='Tipo do Motor' defaultValue={modalData?.motor_tipo || ""} />
              </div><div className="input-box">
                <label htmlFor="d-data_criacao">Data de criação</label>
                <input autoComplete='off' type="date" id="d-data_criacao" name='data_criacao' placeholder='Data de criação do motor' defaultValue={formatDate(modalData?.data_criacao) || ""} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-lideres">Lideres</label>
                <input autoComplete='off' type="text" id="d-lideres" name='lideres' placeholder='Lideres do motor' defaultValue={modalData?.lideres?.map((lider: any) => ` ${lider}`)} />
              </div><div className="input-box">
                <label htmlFor="d-equipe">Equipe</label>
                <input autoComplete='off' type="text" id="d-equipe" name='equipe' placeholder='Equipe participante do motor' defaultValue={modalData?.equipe?.map((membro: any) => ` ${membro}`)} />
              </div>
            </div>
            <h3>Financeiro</h3>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-qtd_empresas_atendidas">№ de empresas atendidas</label>
                <input autoComplete='off' type="number" id="d-qtd_empresas_atendidas" name='qtd_empresas_atendidas' placeholder='Quantidade de empresas atendidas pelo motor' defaultValue={modalData?.qtd_empresas_atendidas || ""} />
              </div><div className="input-box">
                <label htmlFor="d-faturamento">Faturamento total</label>
                <input autoComplete='off' type="text" id="d-faturamento" name='faturamento' placeholder='Faturamento total do motor' defaultValue={modalData?.faturamento || ""} onChange={(event) => formatCurrency(event.target)} />
              </div>
            </div>
          </>
        )
      default:
        return <h1>Default</h1>
    }
  }

  const [textValue, setTextValue] = useState<string>(modalContent ?? "");

  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);
  async function handleSave() {
    if (!formRef.current) return console.error("Não foi possível acessar o formulário");

    const formData = new FormData(formRef.current);
    const body = Object.fromEntries(formData.entries());
    body["conteudo"] = textValue;

    try {
      const response = await fetch(`http://localhost:3000/api/dimensoes/${modalType}` + (modalData.dimensaoId ? `/${modalData.dimensaoId}` : ''), {
        method: modalData.dimensaoId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Erro ${response.status}: ${text}`);
      }

      const result = await response.json();
      console.log("Sucesso: ", result);
    } catch (error) {
      console.log(`[ERROR]: ${error}`);
    };

    try {
      const relationsIds = relations.relations.map((r: any) => parseInt(r.id));
      const response = await fetch(`http://localhost:3000/api/dimensoes/${modalType}/${modalData.dimensaoId}/relations`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ relations: relationsIds }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Erro ${response.status}: ${text}`);
      }

      const result = await response.json();
    } catch (error) {
      console.error(error);
    }

    closeModal();
    router.refresh();
  }

  async function handleDelete() {
    if (!formRef.current) return console.error("Não foi possível acessar o formulário"); // Tenho quase certeza que essa linha não é necessária, mas vou deixar aqui por segurança
    if (!modalData?.dimensaoId) return console.error("Não há uma dimensão relaciondada para apagar");

    try {
      const response = await fetch(`http://localhost:3000/api/dimensoes/${modalType}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dimensaoId: modalData?.dimensaoId }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Erro ${response.status}: ${text}`);
      }

      const result = await response.json();
      console.log(`Sucesso: `, result);

      closeModal();
    } catch (error) {
      console.error(error);
    }

    router.refresh();
  }

  const [relations, setRelations] = useState<any>([]);
  const [isRelationCLOpen, setRelationCLOpen] = useState(false);
  const [filteredRelations, setFilteredRelations] = useState<any>([]);

  const fetchRelations = async () => {
    if (!modalData?.dimensaoId) return;

    try {
      const res = await fetch(`http://localhost:3000/api/dimensoes/motores/${modalData.dimensaoId}/relations`, {
        cache: "no-cache",
      });
      if (!res.ok) throw new Error("Erro ao buscar relações");
      const data = await res.json();
      setRelations(data || []);
      setFilteredRelations(data || [])
      console.log(data)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchRelations();
  }, [modalData?.dimensaoId]);

  return (
    <section className="modal-bg">
      <div className="modal">
        <header>
          <FaRegSave onClick={handleSave} />
          <FaRegTrashAlt onClick={handleDelete} />
          <FaX onClick={closeModal} />
        </header>
        <section className="modal-content">
          <div className='left-div'>
            <h2>{`Modal de ${DimensaoEnum[modalType]}`}</h2>
            <div>
              <form ref={formRef} className='modal-form'>
                {renderSwitch(modalType)}
              </form>
              <div className="relacoes-div">
                <span>Relações</span>
                <div>
                  {relations.filter((r: any) => r.related).map((relation: any) => {
                    return <div className="relacoes-item" key={`relation-${relation.id}`}>{relation.nome}</div>
                  })}
                  <div style={{ position: "relative" }}>
                    <section onClick={!isRelationCLOpen ? () => setRelationCLOpen(true) : undefined} className={isRelationCLOpen ? "relation-section" : ""}>
                      <div>
                        <input type="text" name="search-relation" id="search-relation" placeholder='Procurar...' autoComplete='off' onChange={(e) => {
                          // filtro por nome
                          const filtered = relations.filter((r: any) => r.nome.toLowerCase().includes(e.target.value.toLowerCase()));
                          setFilteredRelations(filtered);
                        }} />
                        <FaPlus onClick={isRelationCLOpen ? () => setRelationCLOpen(false) : undefined} />
                      </div>
                      {isRelationCLOpen && (
                        <ul>
                          {filteredRelations.map((relation: any) => {
                            // Se há relações, o checkbox fica marcado
                            return <li key={`li-${relation.id}`}><input type="checkbox" id={`cb-${relation.id}`} checked={relation.related} onChange={(e) => {
                              const isChecked = e.target.checked;
                              
                              setFilteredRelations((prev: any) => {
                                const updated = prev.map((r: any) => r.id === relation.id ? { ...r, related: isChecked } : r);

                                return updated;
                              })
                              setRelations((prev: any) => {
                                const updated = prev.map((r: any) => r.id === relation.id ? { ...r, related: isChecked } : r);

                                return updated;
                              })
                            }} /><label htmlFor={`cb-${relation.id}`}>{relation.nome}</label></li>
                          })}
                        </ul>
                      )}
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TextEditor value={textValue} onChange={(value) => setTextValue(value)} />
        </section>
      </div>
    </section>
  )
}