import React from "react";
import '../css/Card.css';

type Props = {
  title: string;
  value: React.ReactNode;
  image_url?: string;
  onClick: (dimensao: any) => void;
};

export default function Card({
  title,
  value,
  image_url = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg',
  onClick
}: Props) {
  const getDimensaoData = async () => {
    const response = await fetch(`http://localhost:3000/api/dimensoes/` + (data.tipo === "cursos" ? `disciplinas/cursos/${data.id}` :`${data.tipo}/${data.id}`));
    if (!response.ok) return {};
    const dimensaoData = await response.json();
    return dimensaoData;
  }
  
  return (
    <div className="card card-white bg-white rounded-2xl p-6 shadow-md text-center" onClick={() => getDimensaoData().then(data => onClick(data))}>
      <div className="card-title text-sm font-medium text-black opacity-100">{title}</div>
      <div className="card-value text-2xl font-bold text-black opacity-100">{value}</div>
      <img src={image_url} alt={data.data.nome} />
      <h3>{data.data.nome}</h3>
    </div>
  );
}