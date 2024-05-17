import ImageCard from '../ImageCard/ImageCard';
export default function ImegeGallery({ items, openModal }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ImageCard onClick={() => openModal(item)} item={item} />
        </li>
      ))}
    </ul>
  );
}
