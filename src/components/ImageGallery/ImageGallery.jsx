import ImageCard from "../ImageCard/ImageCard";
export default function ImegeGallery({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}
