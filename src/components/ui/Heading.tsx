interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">
        {title}
      </h2>
      <p className="text-xs md:text-sm text-muted-foreground pr-2">
        {description}
      </p>
    </div>
  );
};
