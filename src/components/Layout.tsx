import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }): React.JSX.Element {
  return (
    <main className="bg-beams-7 flex-1 bg-primary bg-center px-4 pt-4 md:px-6">
      <div className="xl:mx-auto xl:max-w-6xl">{children}</div>
    </main>
  );
}
