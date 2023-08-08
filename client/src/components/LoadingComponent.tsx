interface Props {
  className: string;
  message?: string;
  textSize: string;
}

export default function LoadingComponent({ className, message, textSize }: Props) {
  return (
    <>
      <p className={`loading loading-ring ${className}`}></p>
      {message && <p className={textSize}>{message}</p>}
    </>
  );
}
