import { FaPlus, FaTrophy, FaX } from 'react-icons/fa6';
import { FaRegSave, FaRegTrashAlt } from 'react-icons/fa';
import { DimensaoEnum, DimensaoTipo } from './Modal';
import "../css/SubModal.css"

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
  const renderSwitch = (dimensao: DimensaoTipo) => {
    switch (dimensao) {
      case "disciplinas":
        return (
          <div>
            <h1>{DimensaoEnum[dimensao]} → Editais</h1>
            <button><span>Adicionar</span><FaPlus /></button>
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
        )

      case "motores":
        return (
          <div>
            <h1>{DimensaoEnum[dimensao]} → Projetos</h1>
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