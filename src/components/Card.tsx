import '../css/Card.css';

interface Props {
  title: string;
  image_url?: string;
  onClick?: () => void;
}

function Card({
  title,
  image_url = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg',
  onClick
}: Props) {
  return (
    <div className="card-div" onClick={onClick}>
      <img src={image_url} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;