
export function Button({ children, className }) {
  return (
    <button className={`transition-all duration-300 ${className}`}>
      {children}
    </button>
  );
}
