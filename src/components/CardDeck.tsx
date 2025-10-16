'use client'
import { useState } from 'react';
import {  FaEye, FaEyeSlash, FaFilter } from 'react-icons/fa';
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

function CardDeck({ title, hasFilter = false, data, onCardClick }: Props) {
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
  const dimensoesTipos = Object.keys(DimensaoEnum) as DimensaoTipo[];

  return (
    <section className="CardDeck">
      <header>
        <h2>{title}</h2>
        {hasFilter ? <FaFilter size={'1.25em'} onClick={() => setFilterOpen(!isFilterOpen)}/> : ''}
        {isFilterOpen && (
          <div className="filter-box">
            <div><span><BiSort />Ordenar por</span><span className='filter-sort'>Data</span></div>
            <hr />
            {dimensoesTipos.map(dimensao => {
              const qtd = data.reduce((acc: number, cur: any) => cur.tipo === dimensao ? ++acc : acc, 0);
              return <div key={`span-${dimensao}`}><span><FaEye />{DimensaoEnum[dimensao]}</span><span>{qtd}</span></div>
            })}
          </div>
        )}
      </header>
      <div className="deck-cards">
        {data.map((dimensao: any) => {
          const n = Math.round(Math.random() * 10);
          return <Card key={`${n}-${dimensao.data.dimensaoId}`} data={dimensao} onClick={onCardClick}/>
        })}
      </div>
    </section>
  );
}

export default CardDeck;