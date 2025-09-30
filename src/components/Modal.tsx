
import { FaX } from 'react-icons/fa6';
import { FaRegSave, FaRegTrashAlt } from 'react-icons/fa';
import '../css/Modal.css';
import { TextEditor } from "./TextEditor";

enum DimensaoEnum {
  disciplinas = "Disciplinas",
  eventos = "Eventos",
  motores = "Motores",
  negocios = "Negócios"
}
export type DimensaoTipo = keyof typeof DimensaoEnum;
const dimensoesTipos = Object.keys(DimensaoEnum) as DimensaoTipo[];

interface Props {
  closeModal?: () => void;
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
  const renderSwitch = (modalType: DimensaoTipo) => {
    switch (modalType) {
      case 'disciplinas':
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input type="text" id="d-nome" placeholder='Nome da disciplina' defaultValue={data.nome} />
            </div>
            <div className="input-box">
              <label htmlFor="d-coordenador">Coordenador</label>
              <input type="text" id="d-coordenador" placeholder='Coordenador da Disciplina' defaultValue={data.coordenador} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-semestre">Semestre</label>
                <input type="text" id="d-semestre" placeholder='2025.1' defaultValue={data.semestre} />
              </div><div className="input-box">
                <label htmlFor="d-codigo">Código</label>
                <input type="text" id="d-codigo" placeholder='Código da disciplina' defaultValue={data.codigo} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-a-matriculados">Alunos Matriculados</label>
                <input type="text" id="d-a-matriculados" defaultValue={data.alunos_matriculados?.map((aluno: any) => {
                  return ` ${aluno}`
                })} />
              </div><div className="input-box">
                <label htmlFor="d-a-aprovados">Alunos Aprovados</label>
                <input type="text" id="d-a-aprovados" defaultValue={data.alunos_aprovados?.map((aluno: any) => {
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
              <input type="text" id="d-nome" placeholder='Nome do evento' defaultValue={data.nome} />
            </div>
            <div className="input-box">
              <label htmlFor="d-descricao">Descrição</label>
              <input type="text" id="d-descricao" placeholder='Descrição do evento' defaultValue={data.descricao} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-data_inicio">Data de Início</label>
                <input type="text" id="d-data_inicio" placeholder='Data de início' defaultValue={data.data_inicio} />
              </div><div className="input-box">
                <label htmlFor="d-duracao">Duração</label>
                <input type="text" id="d-duracao" placeholder='Duração do evento' defaultValue={data.duracao} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-custo">Custo</label>
                <input type="text" id="d-custo" placeholder='Custo do evento' defaultValue={data.custo} />
              </div><div className="input-box">
                <label htmlFor="d-receita">Receita</label>
                <input type="text" id="d-receita" placeholder='Receita do Evento' defaultValue={data.receita} />
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="d-publico_participante">Público Participante</label>
              <input type="text" id="d-publico_participante" placeholder='Pessoas envolvidas no evento' defaultValue={data.publico_participante} />
            </div>
            <div className="input-box">
              <label htmlFor="d-qtd_publico">Quandidade de público</label>
              <input type="text" id="d-qtd_publico" placeholder='Quantidade de público do evento' defaultValue={data.qtd_publico} />
            </div>
            <div className="input-box">
              <label htmlFor="d-equipe">Equipe de organização</label>
              <input type="text" id="d-equipe" placeholder='Equipe de organização do evento' defaultValue={data.equipe} />
            </div>
            <div className="input-box">
              <label htmlFor="d-coordenadores">Coordenadores</label>
              <input type="text" id="d-coordenadores" placeholder='Coordenadores do evento' defaultValue={data.coordenadores} />
            </div>
            <div className="input-box">
              <label htmlFor="d-parceiros">Parceiros</label>
              <input type="text" id="d-parceiros" placeholder='Contribuidores do evento' defaultValue={data.parceiros} />
            </div>
          </>
        )
        case "negocios":
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input type="text" id="d-nome" placeholder='Nome do nogócio' defaultValue={data.nome} />
            </div>
            <div className="input-box">
              <label htmlFor="d-area_atuacao">Área de atuação</label>
              <input type="text" id="d-area_atuacao" placeholder='Área de atuação do nogócio' defaultValue={data.area_atuacao} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-faturamento_anual">Faturamento anual</label>
                <input type="text" id="d-faturamento_anual" placeholder='Faturamento anual do negócio' defaultValue={data.faturamento_anual} />
              </div><div className="input-box">
                <label htmlFor="d-ano_criacao">Ano de criação</label>
                <input type="text" id="d-ano_criacao" placeholder='Ano de criação do nogócio' defaultValue={data.ano_criacao} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-fundadores">Fundadores</label>
                <input type="text" id="d-fundadores" placeholder='Fundadores do nogócio' defaultValue={data.fundadores?.map((fundador: any) => {
                  return ` ${fundador}`
                })} />
              </div><div className="input-box">
                <label htmlFor="d-porte">Porte do nogócio</label>
                <input type="text" id="d-porte" defaultValue={data.porte} />
              </div>
            </div>
          </>
        )
      case "motores":
        return (
          <>
            <div className="input-box">
              <label htmlFor="d-nome">Nome</label>
              <input type="text" id="d-nome" placeholder='Nome do motor' defaultValue={data.nome} />
            </div>
            <div className="input-box">
              <label htmlFor="d-descricao">Descrição</label>
              <input type="text" id="d-descricao" placeholder='Descrição do motor' defaultValue={data.descricao} />
            </div>
            <div className="input-box">
              <label htmlFor="d-projetos">Projetos Executados</label>
              <input type="text" id="d-projetos" placeholder='Projetos executados pelo motor' defaultValue={data.projetos} />
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-motor_tipo">Tipo</label>
                <input type="text" id="d-motor_tipo" placeholder='Tipo do Motor' defaultValue={data.motor_tipo} />
              </div><div className="input-box">
                <label htmlFor="d-data_criacao">Data de criação</label>
                <input type="text" id="d-data_criacao" placeholder='Data de criação do motor' defaultValue={data.data_criacao} />
              </div>
            </div>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-lideres">Lideres</label>
                <input type="text" id="d-lideres" placeholder='Lideres do motor' defaultValue={data.lideres} />
              </div><div className="input-box">
                <label htmlFor="d-equipe">Equipe</label>
                <input type="text" id="d-equipe" placeholder='Equipe participante do motor' defaultValue={data.equipe} />
              </div>
            </div>
            <h3>Financeiro</h3>
            <div className="columns">
              <div className="input-box">
                <label htmlFor="d-qtd_empresas_atendidas">№ de empresas atendidas</label>
                <input type="text" id="d-qtd_empresas_atendidas" placeholder='Quantidade de empresas atendidas pelo motor' defaultValue={data.qtd_empresas_atendidas} />
              </div><div className="input-box">
                <label htmlFor="d-faturamento">Faturamento total</label>
                <input type="text" id="d-faturamento" placeholder='Faturamento total do motor' defaultValue={data.faturamento} />
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
            <h2>{`Modal de ${DimensaoEnum[modalType]}`}</h2>
            <div className='modal-form'>
              {renderSwitch(modalType)}
            </div>
          </div>
          <TextEditor value={value} onChange={onChange} />
        </section>
      </div>
    </section>
  )
}