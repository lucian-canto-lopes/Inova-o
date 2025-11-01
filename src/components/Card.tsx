import '../css/Card.css';

interface Props {
  data: any;
  image_url?: string;
  onClick: (dimensao: any) => void;
}

function Card({
  data,
  image_url = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg',
  onClick
}: Props) {
  const getDimensaoData = async () => {
    const response = await fetch(`http://localhost:3000/api/dimensoes/` + (data.tipo === "cursos" ? `disciplinas/${data.id}/cursos` :`${data.tipo}/${data.id}`));
    if (!response.ok) return {};
    const dimensaoData = await response.json();
    return dimensaoData;
  }
  
  return (
    <div className="card-div" onClick={() => getDimensaoData().then(data => onClick(data))}>
      <img src={image_url} alt={data.data.nome} />
      <h3>{data.data.nome}</h3>
    </div>
  );
}

export default Card;