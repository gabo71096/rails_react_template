interface Props {
  className: string;
  handleClick: () => void;
  loading: boolean;
  loadingText: string;
  text: string;
}

export default function LoadingButton({ className, handleClick, loading, loadingText, text }: Props) {
  return (
    <button className={className} disabled={loading} onClick={handleClick}>
      {loading ? (
        <>
          <span className="loading loading-ring w-5"></span>
          {loadingText}
        </>
      ) : (
        text
      )}
    </button>
  );
}
