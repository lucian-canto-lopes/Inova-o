
import { FaX } from 'react-icons/fa6';
import { FaRegSave, FaRegTrashAlt } from 'react-icons/fa';
import '../css/Modal.css';
import { TextEditor } from "./TextEditor";
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

enum DimensaoEnum {
  disciplinas = "Disciplinas",
  eventos = "Eventos",
  motores = "Motores",
  negocios = "Negócios"
}
export type DimensaoTipo = keyof typeof DimensaoEnum;
const dimensoesTipos = Object.keys(DimensaoEnum) as DimensaoTipo[];

interface Props {
  closeModal: () => void;
  modalType: DimensaoTipo;
  data: any,
  value: string;
  onChange: (value: string) => void;
}

export function Modal({
  closeModal,
  modalType,
  data,
  value,
  onChange,
}: Props) {
  const formatCurrency = (input: HTMLInputElement) => {
    input.value = input.value.replace(/\D/g, "");
    if (input.value.length < 3) {
      input.value = "00" + input.value;
    }
    input.value = input.value.slice(0, input.value.length - 2) + "," + input.value.slice(input.value.length - 2, input.value.length);
    if (input.value.startsWith("0") && input.value.length > 4) input.value = input.value.slice(1, input.value.length);
  }

  const renderSwitch = (modalType: DimensaoTipo) => {
    switch (modalType) {
      case 'disciplinas':
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input autoComplete='off' type="text" id="d-nome" name='nome' placeholder='Nome da disciplina' defaultValue={data?.nome || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="d-coordenador">Coordenador</label>
              <input autoComplete='off' type="text" id="d-coordenador" name='coordenador' placeholder='Coordenador da Disciplina' defaultValue={data?.coordenador || ""} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-semestre">Semestre</label>
                <input autoComplete='off' type="text" id="d-semestre" name='semestre' placeholder='2025.1' defaultValue={data?.semestre || ""} />
              </div><div className="input-box">
                <label htmlFor="d-codigo">Código</label>
                <input autoComplete='off' type="text" id="d-codigo" name='codigo' placeholder='Código da disciplina' defaultValue={data?.codigo || ""} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-a-matriculados">Alunos Matriculados</label>
                <input autoComplete='off' type="text" id="d-a-matriculados" name='alunos_matriculados' defaultValue={data?.alunos_matriculados?.map((aluno: any) => {
                  return ` ${aluno}`
                })} />
              </div><div className="input-box">
                <label htmlFor="d-a-aprovados">Alunos Aprovados</label>
                <input autoComplete='off' type="text" id="d-a-aprovados" name='alunos_aprovados' defaultValue={data?.alunos_aprovados?.map((aluno: any) => {
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
              <input autoComplete='off' type="text" id="d-nome" name='nome' placeholder='Nome do evento' defaultValue={data?.nome || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="d-descricao">Descrição</label>
              <input autoComplete='off' type="text" id="d-descricao" name='descricao' placeholder='Descrição do evento' defaultValue={data?.descricao || ""} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-data_inicio">Data de Início</label>
                <input autoComplete='off' type="date" id="d-data_inicio" name='data_inicio' placeholder='Data de início' defaultValue={data?.data_inicio.slice(0, 10) || ""} />
              </div><div className="input-box">
                <label htmlFor="d-duracao">Duração</label>
                <input autoComplete='off' type="text" id="d-duracao" name='duracao' placeholder='Duração do evento' defaultValue={data?.duracao || ""} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-custo">Custo</label>
                <input autoComplete='off' type="text" id="d-custo" name='custo' placeholder='Custo do evento (Valor em reais (R$))' defaultValue={data?.custo || ""} onChange={(event) => formatCurrency(event.target)} />
              </div><div className="input-box">
                <label htmlFor="d-receita">Receita</label>
                <input autoComplete='off' type="text" id="d-receita" name='receita' placeholder='Receita do Evento (Valor em reais (R$))' defaultValue={data?.receita || ""} onChange={(event) => formatCurrency(event.target)} />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="d-publico_participante">Público Participante</label>
              <input autoComplete='off' type="text" id="d-publico_participante" name='publico_participante' placeholder='Pessoas envolvidas no evento' defaultValue={data?.publico_participante?.map((publico: any) => ` ${publico}`)} />
            </div>
            <div className="input-box">
              <label htmlFor="d-qtd_publico">Quandidade de público</label>
              <input autoComplete='off' type="number" id="d-qtd_publico" name='qtd_publico' placeholder='Quantidade de público do evento' defaultValue={data?.qtd_publico || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="d-equipe">Equipe de organização</label>
              <input autoComplete='off' type="text" id="d-equipe" name='equipe' placeholder='Equipe de organização do evento' defaultValue={data?.equipe?.map((membro: any) => ` ${membro}`)} />
            </div>
            <div className="input-box">
              <label htmlFor="d-coordenadores">Coordenadores</label>
              <input autoComplete='off' type="text" id="d-coordenadores" name='coordenadores' placeholder='Coordenadores do evento' defaultValue={data?.coordenadores?.map((coordenador: any) => ` ${coordenador}`)} />
            </div>
            <div className="input-box">
              <label htmlFor="d-parceiros">Parceiros</label>
              <input autoComplete='off' type="text" id="d-parceiros" name='parceiros' placeholder='Contribuidores do evento' defaultValue={data?.parceiros?.map((parceiro: any) => ` ${parceiro}`)} />
            </div>
          </>
        )
      case "negocios":
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input autoComplete='off' type="text" id="d-nome" name='nome' placeholder='Nome do nogócio' defaultValue={data?.nome || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="d-area_atuacao">Área de atuação</label>
              <input autoComplete='off' type="text" id="d-area_atuacao" name='area_atuacao' placeholder='Área de atuação do nogócio' defaultValue={data?.area_atuacao || ""} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-faturamento_anual">Faturamento anual</label>
                <input autoComplete='off' type="text" id="d-faturamento_anual" name='faturamento_anual' placeholder='Faturamento anual do negócio' defaultValue={data?.faturamento_anual || ""} onChange={(event) => formatCurrency(event.target)} />
              </div><div className="input-box">
                <label htmlFor="d-data_criacao">Data de criação</label>
                <input autoComplete='off' type="date" id="d-data_criacao" name='data_criacao' placeholder='Data de criação do nogócio' defaultValue={data?.ano_criacao || ""} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-fundadores">Fundadores</label>
                <input autoComplete='off' type="text" id="d-fundadores" name='fundadores' placeholder='Fundadores do nogócio' defaultValue={data?.fundadores?.map((fundador: any) => ` ${fundador}`)} />
              </div><div className="input-box">
                <label htmlFor="d-porte">Porte do nogócio</label>
                <input autoComplete='off' type="text" id="d-porte" name='porte' placeholder='Ex.: MEI | ME | EPP | etc.' defaultValue={data?.porte || ""} />
              </div>
            </div>
          </>
        )
      case "motores":
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input autoComplete='off' type="text" id="d-nome" name='nome' placeholder='Nome do motor' defaultValue={data?.nome || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="d-descricao">Descrição</label>
              <input autoComplete='off' type="text" id="d-descricao" name='descricao' placeholder='Descrição do motor' defaultValue={data?.descricao || ""} />
            </div>
            <div className="input-box">
              <label htmlFor="d-projetos">Projetos Executados</label>
              <input autoComplete='off' type="text" id="d-projetos" name='projetos' placeholder='Projetos executados pelo motor' defaultValue={data?.projetos?.map((projeto: any) => ` ${projeto}`)} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-motor_tipo">Tipo</label>
                <input autoComplete='off' type="text" id="d-motor_tipo" name='motor_tipo' placeholder='Tipo do Motor' defaultValue={data?.motor_tipo || ""} />
              </div><div className="input-box">
                <label htmlFor="d-data_criacao">Data de criação</label>
                <input autoComplete='off' type="date" id="d-data_criacao" name='data_criacao' placeholder='Data de criação do motor' defaultValue={data?.data_criacao || ""} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-lideres">Lideres</label>
                <input autoComplete='off' type="text" id="d-lideres" name='lideres' placeholder='Lideres do motor' defaultValue={data?.lideres?.map((lider: any) => ` ${lider}`)} />
              </div><div className="input-box">
                <label htmlFor="d-equipe">Equipe</label>
                <input autoComplete='off' type="text" id="d-equipe" name='equipe' placeholder='Equipe participante do motor' defaultValue={data?.equipe?.map((membro: any) => ` ${membro}`)} />
              </div>
            </div>
            <h3>Financeiro</h3>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-qtd_empresas_atendidas">№ de empresas atendidas</label>
                <input autoComplete='off' type="number" id="d-qtd_empresas_atendidas" name='qtd_empresas_atendidas' placeholder='Quantidade de empresas atendidas pelo motor' defaultValue={data?.qtd_empresas_atendidas || ""} />
              </div><div className="input-box">
                <label htmlFor="d-faturamento">Faturamento total</label>
                <input autoComplete='off' type="text" id="d-faturamento" name='faturamento' placeholder='Faturamento total do motor' defaultValue={data?.faturamento || ""} onChange={(event) => formatCurrency(event.target)} />
              </div>
            </div>
          </>
        )
      default:
        return <h1>Default</h1>
    }
  }

  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);
  async function handleSave() {
    if (!formRef.current) return console.error("Não foi possível acessar o formulário");

    const formData = new FormData(formRef.current);
    const body = Object.fromEntries(formData.entries());
    body.dimensaoId = data.dimensaoId ?? null;
    console.log(body)

    try {
      const response = await fetch(`http://localhost:3000/api/dimensoes/${modalType}`, {
        method: "POST",
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
      console.error(error);
    };

    router.refresh();
  }

  async function handleDelete() {
    if (!formRef.current) return console.error("Não foi possível acessar o formulário"); // Tenho quase certeza que essa linha não é necessária, mas vou deixar aqui por segurança
    if (!data?.dimensaoId) return console.error("Não há uma dimensão relaciondada para apagar");

    try {
      const response = await fetch(`http://localhost:3000/api/dimensoes/${modalType}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dimensaoId: data.dimensaoId }),
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
            <form ref={formRef} className='modal-form'>
              {renderSwitch(modalType)}
            </form>
          </div>
          <TextEditor value={value} onChange={onChange} />
        </section>
      </div>
    </section>
  )
}