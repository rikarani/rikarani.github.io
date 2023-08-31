import type { LinkProps } from "@/types";

function Link({ to, children, openInNewTab = true, className }: LinkProps): React.JSX.Element {
  return (
    <a href={to} target={openInNewTab ? "_blank" : "_self"} onClick={(e) => e.stopPropagation()} className={className || undefined}>
      {children}
    </a>
  );
}

export default Link;
