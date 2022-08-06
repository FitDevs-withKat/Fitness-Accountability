import Heading from "./Heading";

export default function Layout({ children }: any) {
  return (
    <div className="flex min-h-screen flex-col md:mx-0">
      <main className="mx-auto w-full px-4 md:container  md:px-0">
        <Heading />
        {children}
      </main>
    </div>
  );
}
