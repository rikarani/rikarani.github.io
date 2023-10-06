type Props = {
  to: string;
  children: React.ReactNode;
  openInNewTab?: boolean;
  className?: string;
};

function Link({ to, children, openInNewTab = true, className }: Props): React.JSX.Element {
  return (
    <a href={to} target={openInNewTab ? "_blank" : "_self"} onClick={(e) => e.stopPropagation()} className={className || undefined}>
      {children}
    </a>
  );
}

export default Link;
