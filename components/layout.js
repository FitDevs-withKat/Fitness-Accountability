export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full md:container">{children}</main>
    </div>
  );
}
