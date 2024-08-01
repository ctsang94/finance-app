export interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  upperText?: string;
  lowerText?: string;
  logo?: string;
}

const ButtonLink = ({ href, children, className, target }: ButtonLinkProps) => {
  return (
    <a
      href={href}
      children={children}
      className={className}
      target={target}
    ></a>
  );
};

export default ButtonLink;
