import css from './LoadMoreBtn.module.css';
export default function LoadMoreBtn({ handleLoadMore }) {
  return (
    <button className={css.btn} onClick={handleLoadMore}>
      Load more
    </button>
  );
}
