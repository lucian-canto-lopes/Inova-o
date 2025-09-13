import { ReactNode } from 'react';
import { FaFilter } from 'react-icons/fa';
import '../css/CardDeck.css';

interface Props {
  title: string;
  hasFilter?: boolean;
  children: ReactNode
}

function CardDeck({ title, hasFilter = false, children }: Props) {
  return (
    <section className="CardDeck">
      <header>
        <h2>{title}</h2>
        {hasFilter ? <FaFilter size={'1.25em'}/> : ''}
      </header>
      <div className="deck-cards">
        {children}
      </div>
    </section>
  );
}

export default CardDeck;