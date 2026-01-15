import React from "react";
import '../css/Card.css';

type Props = {
  title?: string;
  value?: React.ReactNode;
  image_url?: string;
  data?: any;
  onClick?: (dimensao: any) => void;
};

export default function Card({
  title,
  value,
  image_url = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg',
  data,
  onClick
}: Props) {
  const getDimensaoData = async () => {
    if (!data) return null;
    const response = await fetch(`http://localhost:3000/api/dimensoes/` + (data.tipo === "cursos" ? `disciplinas/cursos/${data.id}` : `${data.tipo}/${data.id}`));
    if (!response.ok) return null;
    return response.json();
  };

  const isMetricCard = title !== undefined || value !== undefined;
  const canFetch = Boolean(data && onClick);
  const containerClassName = isMetricCard
    ? "card-white bg-white rounded-2xl p-6 shadow-md text-center"
    : "card-div";
  const handleClick = () => {
    if (!data || !onClick) return;
    getDimensaoData().then(result => {
      if (result) {
        onClick(result);
      }
    });
  };
  
  return (
    <div className={containerClassName} onClick={canFetch ? handleClick : undefined}>
      {isMetricCard && title && (
        <div className="card-title text-sm font-medium text-black opacity-100">{title}</div>
      )}
      {isMetricCard && value !== undefined && value !== null && (
        <div className="card-value text-2xl font-bold text-black opacity-100">{value}</div>
      )}
      {!isMetricCard && data && (
        <>
          <img src={image_url} alt={data?.data?.nome ?? "Imagem"} />
          {data?.data?.nome && <h3>{data.data.nome}</h3>}
        </>
      )}
    </div>
  );
}
