import '../css/Card.css';

interface Props {
  title: string;
  image_url?: string;
}

function Card({ title, image_url = 'https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg' }: Props) {
  return (
    <div className="card-div">
      <img src={image_url} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;