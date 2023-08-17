import { ReactNode } from "react";

interface LinkProps {
  to: string;
  children: ReactNode;
  openInNewTab?: boolean;
  className?: string;
}

function Link({ to, children, openInNewTab = true, className }: LinkProps): React.JSX.Element {
  return (
    <a href={to} target={openInNewTab ? "_blank" : "_self"} onClick={(e) => e.stopPropagation()} className={className || undefined}>
      {children}
    </a>
  );
}

export default Link;
