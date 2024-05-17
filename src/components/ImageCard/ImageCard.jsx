export default function ImageCard({ item, onClick }) {
  return (
    <div onClick={onClick}>
      <img src={item.urls.small} alt={item.title} />
    </div>
  );
}
