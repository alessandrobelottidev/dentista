export const Section = ({
  children,
  bgTwCSS,
  id,
}: {
  children: React.ReactNode;
  bgTwCSS?: string;
  id?: string;
}) => {
  return (
    <div className={bgTwCSS} id={id}>
      <div className="py-[60px] lg:py-[100px] grid grid-cols-12 max-w-7xl mx-auto w-full p-4">
        {children}
      </div>
    </div>
  );
};
