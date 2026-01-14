'use client'
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaFilter } from 'react-icons/fa';
import { DimensaoEnum, DimensaoTipo } from './Modal';
import '../css/CardDeck.css';
import { BiSort } from 'react-icons/bi';
import Card from "./Card";

interface Props {
  title: string;
  hasFilter?: boolean;
  data: any;
  onCardClick: (dimensao: any) => void;
}

interface DimensoesFilter {
  disciplinas: true,
  eventos: true,
  motores: true,
  negocios: true,
  cursos: true,
}

const sortArray: string[] = ["Data", "Cres", "Decr"];

function CardDeck({ title, hasFilter = false, data, onCardClick }: Props) {
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
  const dimensoesTipos = Object.keys(DimensaoEnum) as DimensaoTipo[];

  const [sortIndex, setSortIndex] = useState<number>(1);
  const [dimensoesFilter, setDimensoesFilter] = useState<DimensoesFilter>({
    disciplinas: true,
    eventos: true,
    motores: true,
    negocios: true,
    cursos: true,
  });

  const filteredData = data.filter((item: {tipo: DimensaoTipo}) => dimensoesFilter[item.tipo]);

  return (
    <section className="CardDeck">
      <header>
        <h2>{title}</h2>
        {hasFilter ? <FaFilter size={'1.25em'} onClick={() => setFilterOpen(!isFilterOpen)} /> : ''}
        {isFilterOpen && (
          <div className="filter-box">
            <div onClick={() => setSortIndex(prev => {
              const newIndex = (prev + 1) % sortArray.length;

              switch (newIndex) {
                case 0:
                  data.sort((a: any, b: any) => b.id - a.id);
                  break;
                case 1:
                  data.sort((a: any, b: any) => a.data.nome.localeCompare(b.data.nome));
                  break;
                case 2:
                  data.sort((a: any, b: any) => b.data.nome.localeCompare(a.data.nome));
                  break;
                default:
                  break;
              }
              return newIndex;

            })}><span><BiSort />Ordenar por</span><span className='filter-sort'>{sortArray[sortIndex]}</span></div>
            <hr />
            {dimensoesTipos.map(dimensao => {
              const qtd = data.reduce((acc: number, cur: any) => cur.tipo === dimensao ? ++acc : acc, 0);
              return <div key={`span-${dimensao}`} onClick={() => {
                // console.log(data.filter((obj: any) => obj.tipo != dimensao));
                setDimensoesFilter((prev: any) => ({
                  ...prev,
                  [dimensao]: !prev[dimensao],
                }));
              }}><span>{dimensoesFilter[dimensao] ? <FaEye /> : <FaEyeSlash />}{DimensaoEnum[dimensao]}</span><span>{qtd}</span></div>

            })}
          </div>
        )}
      </header>
      <div className="deck-cards">
        {filteredData.map((dimensao: any) => {
          const n = Math.round(Math.random() * 10);
          return <Card key={`${n}-${dimensao.data.nome}`} data={dimensao} onClick={onCardClick} />
        })}
      </div>
    </section>
  );
}

export default CardDeck;