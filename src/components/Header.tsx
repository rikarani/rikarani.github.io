type Props = {
  section: string;
  tagline: string;
};

export default function Header({ section, tagline }: Props): React.JSX.Element {
  return (
    <div className="text-gray-300">
      <h1 className="text-3xl font-medium lg:text-4xl">{section}</h1>
      <h6 className="bg-gradient-to-r from-sky-500 to-sky-300 bg-clip-text text-2xl font-semibold text-transparent">{tagline}</h6>
    </div>
  );
}
