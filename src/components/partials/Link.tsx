import React from "react";

interface LinkProps {
  to: string;
  children: React.JSX.Element;
  openInNewTab?: boolean;
}

function Link({ to, children, openInNewTab = true }: LinkProps): React.JSX.Element {
  return (
    <div>
      <a href={to} target={openInNewTab ? "_blank" : "_self"}>
        {children}
      </a>
    </div>
  );
}

export default Link;
