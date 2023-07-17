import { ReactNode } from "react";

interface LinkProps {
  to: string;
  children: ReactNode;
  openInNewTab?: boolean;
}

function Link({ to, children, openInNewTab = true }: LinkProps): React.JSX.Element {
  return (
    <a href={to} target={openInNewTab ? "_blank" : "_self"} onClick={(e) => e.stopPropagation()}>
      {children}
    </a>
  );
}

export default Link;
