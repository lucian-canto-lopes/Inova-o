
import { FaX } from 'react-icons/fa6';
import { FaRegSave, FaRegTrashAlt } from 'react-icons/fa';
import '../css/Modal.css';
import { TextEditor } from "./TextEditor";

type DisciplinaModal = {
  id: number,
  tipo: "Disciplina",
  nome: string,
  coordenador: string,
  semestre: string,
  codigo: string,
  alunos_matriculados: string[],
  alunos_aprovados: string[]
};

type EventoModal = {
  id: number,
  tipo: "Evento",
  nome: string,
  descricao: string,
  data_inicio: string,
  duracao: string,
  custo: number,
  receita: number,
  publico_participante: string[],
  qtd_publico: number,
  equipe: string[],
  coordenadores: string[],
  parceiros: string[]
};

type NegocioModal = {
  id: number,
  tipo: "Negócio",
  nome: string,
  area_atuacao: string,
  faturamento_anual: number,
  ano_criacao: string,
  fundadores: string[],
  porte: string
}

type MotorModal = {
  id: number,
  tipo: "Motor",
  nome: string,
  descricao: string,
  projetos: string[],
  motor_tipo: string,
  data_criacao: string,
  lideres: string[],
  equipe: string[],
  qtd_empresas_atendidas: number,
  faturamento: number
}

export type modalObj = DisciplinaModal | EventoModal | NegocioModal | MotorModal;

interface Props {
  closeModal?: () => void;
  modalObj: modalObj;
  value: string;
  onChange: (value: string) => void;
}

export function Modal({
  closeModal,
  modalObj,
  value,
  onChange,
}: Props) {
  const renderSwitch = (modalObj: modalObj) => {
    switch (modalObj.tipo) {
      case 'Disciplina':
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input type="text" id="d-nome" placeholder='Nome da disciplina' defaultValue={modalObj.nome} />
            </div>
            <div className="input-box">
              <label htmlFor="d-coordenador">Coordenador</label>
              <input type="text" id="d-coordenador" placeholder='Coordenador da Disciplina' defaultValue={modalObj.coordenador} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-semestre">Semestre</label>
                <input type="text" id="d-semestre" placeholder='2025.1' defaultValue={modalObj.semestre} />
              </div><div className="input-box">
                <label htmlFor="d-codigo">Código</label>
                <input type="text" id="d-codigo" placeholder='Código da disciplina' defaultValue={modalObj.codigo} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-a-matriculados">Alunos Matriculados</label>
                <input type="text" id="d-a-matriculados" defaultValue={modalObj.alunos_matriculados.map(aluno => {
                  return ` ${aluno}`
                })} />
              </div><div className="input-box">
                <label htmlFor="d-a-aprovados">Alunos Aprovados</label>
                <input type="text" id="d-a-aprovados" defaultValue={modalObj.alunos_aprovados.map(aluno => {
                  return ` ${aluno}`
                })} />
              </div>
            </div>
          </>
        )
      case "Evento":
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input type="text" id="d-nome" placeholder='Nome do evento' defaultValue={modalObj.nome} />
            </div>
            <div className="input-box">
              <label htmlFor="d-descricao">Descrição</label>
              <input type="text" id="d-descricao" placeholder='Descrição do evento' defaultValue={modalObj.descricao} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-data_inicio">Data de Início</label>
                <input type="text" id="d-data_inicio" placeholder='Data de início' defaultValue={modalObj.data_inicio} />
              </div><div className="input-box">
                <label htmlFor="d-duracao">Duração</label>
                <input type="text" id="d-duracao" placeholder='Duração do evento' defaultValue={modalObj.duracao} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-custo">Custo</label>
                <input type="text" id="d-custo" placeholder='Custo do evento' defaultValue={modalObj.custo} />
              </div><div className="input-box">
                <label htmlFor="d-receita">Receita</label>
                <input type="text" id="d-receita" placeholder='Receita do Evento' defaultValue={modalObj.receita} />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="d-publico_participante">Público Participante</label>
              <input type="text" id="d-publico_participante" placeholder='Pessoas envolvidas no evento' defaultValue={modalObj.publico_participante} />
            </div>
            <div className="input-box">
              <label htmlFor="d-qtd_publico">Quandidade de público</label>
              <input type="text" id="d-qtd_publico" placeholder='Quantidade de público do evento' defaultValue={modalObj.qtd_publico} />
            </div>
            <div className="input-box">
              <label htmlFor="d-equipe">Equipe de organização</label>
              <input type="text" id="d-equipe" placeholder='Equipe de organização do evento' defaultValue={modalObj.equipe} />
            </div>
            <div className="input-box">
              <label htmlFor="d-coordenadores">Coordenadores</label>
              <input type="text" id="d-coordenadores" placeholder='Coordenadores do evento' defaultValue={modalObj.coordenadores} />
            </div>
            <div className="input-box">
              <label htmlFor="d-parceiros">Parceiros</label>
              <input type="text" id="d-parceiros" placeholder='Contribuidores do evento' defaultValue={modalObj.parceiros} />
            </div>
          </>
        )
        case "Negócio":
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input type="text" id="d-nome" placeholder='Nome do nogócio' defaultValue={modalObj.nome} />
            </div>
            <div className="input-box">
              <label htmlFor="d-area_atuacao">Área de atuação</label>
              <input type="text" id="d-area_atuacao" placeholder='Área de atuação do nogócio' defaultValue={modalObj.area_atuacao} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-faturamento_anual">Faturamento anual</label>
                <input type="text" id="d-faturamento_anual" placeholder='Faturamento anual do negócio' defaultValue={modalObj.faturamento_anual} />
              </div><div className="input-box">
                <label htmlFor="d-ano_criacao">Ano de criação</label>
                <input type="text" id="d-ano_criacao" placeholder='Ano de criação do nogócio' defaultValue={modalObj.ano_criacao} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-fundadores">Fundadores</label>
                <input type="text" id="d-fundadores" placeholder='Fundadores do nogócio' defaultValue={modalObj.fundadores.map(fundador => {
                  return ` ${fundador}`
                })} />
              </div><div className="input-box">
                <label htmlFor="d-porte">Porte do nogócio</label>
                <input type="text" id="d-porte" defaultValue={modalObj.porte} />
              </div>
            </div>
          </>
        )
      case "Motor":
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input type="text" id="d-nome" placeholder='Nome do motor' defaultValue={modalObj.nome} />
            </div>
            <div className="input-box">
              <label htmlFor="d-descricao">Descrição</label>
              <input type="text" id="d-descricao" placeholder='Descrição do motor' defaultValue={modalObj.descricao} />
            </div>
            <div className="input-box">
              <label htmlFor="d-projetos">Projetos Executados</label>
              <input type="text" id="d-projetos" placeholder='Projetos executados pelo motor' defaultValue={modalObj.projetos} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-motor_tipo">Tipo</label>
                <input type="text" id="d-motor_tipo" placeholder='Tipo do Motor' defaultValue={modalObj.motor_tipo} />
              </div><div className="input-box">
                <label htmlFor="d-data_criacao">Data de criação</label>
                <input type="text" id="d-data_criacao" placeholder='Data de criação do motor' defaultValue={modalObj.data_criacao} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-lideres">Lideres</label>
                <input type="text" id="d-lideres" placeholder='Lideres do motor' defaultValue={modalObj.lideres} />
              </div><div className="input-box">
                <label htmlFor="d-equipe">Equipe</label>
                <input type="text" id="d-equipe" placeholder='Equipe participante do motor' defaultValue={modalObj.equipe} />
              </div>
            </div>
            <h3>Financeiro</h3>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-qtd_empresas_atendidas">№ de empresas atendidas</label>
                <input type="text" id="d-qtd_empresas_atendidas" placeholder='Quantidade de empresas atendidas pelo motor' defaultValue={modalObj.qtd_empresas_atendidas} />
              </div><div className="input-box">
                <label htmlFor="d-faturamento">Faturamento total</label>
                <input type="text" id="d-faturamento" placeholder='Faturamento total do motor' defaultValue={modalObj.faturamento} />
              </div>
            </div>
          </>
        )
      default:
        return <h1>Default</h1>
    }
  }

  return (
    <section className="modal-bg">
      <div className="modal">
        <header>
          <FaRegSave />
          <FaRegTrashAlt />
          <FaX onClick={closeModal} />
        </header>
        <section className="modal-content">
          <div className='left-div'>
            <h2>{`Modal de ${modalObj.tipo}`}</h2>
            <div className='modal-form'>
              {renderSwitch(modalObj)}
            </div>
          </div>
          <TextEditor value={value} onChange={onChange} />
        </section>
      </div>
    </section>
  )
}