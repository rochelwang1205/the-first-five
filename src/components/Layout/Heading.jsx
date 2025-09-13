export default function Heading({ children, className = "" }) {
  return (
    <h1 className={`hero-heading ${className}`}>
      {children}
    </h1>
  );
}
