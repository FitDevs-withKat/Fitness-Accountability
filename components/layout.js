export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col md:mx-0">
      <main className="mx-auto w-full px-4 md:container  md:px-0">
        {children}
      </main>
    </div>
  );
}
