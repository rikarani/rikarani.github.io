import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }): React.JSX.Element {
  return (
    <main className="flex-1 bg-primary bg-center px-4">
      <div className="xl:mx-auto xl:max-w-5xl">{children}</div>
    </main>
  );
}
