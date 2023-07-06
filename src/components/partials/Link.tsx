import { ReactNode, forwardRef } from "react";

interface LinkProps {
  to: string;
  children: ReactNode;
  openInNewTab?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ to, children, openInNewTab = true }, ref) => {
  return (
    <a href={to} ref={ref} target={openInNewTab ? "_blank" : "_self"} onClick={(e) => e.stopPropagation()}>
      {children}
    </a>
  );
});

export default Link;
