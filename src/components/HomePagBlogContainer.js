export default function HomePagBlogContainer({ children }) {
  return (
    <div className="container">
      {/* <div className="space-y-4 prose">{children}</div> */}
      <div className="max-w-full space-y-4 prose">{children}</div>
    </div>
  );
}
