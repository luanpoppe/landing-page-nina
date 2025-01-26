type Props = React.PropsWithChildren & React.ComponentProps<"div">;

export function MiniCard({ children, className, ...props }: Props) {
  return (
    <div
      {...props}
      className={`border rounded-lg min-h-[125px] bg-white text-black flex justify-center items-center shadow-md shadow-purple-600 md:min-w-[150px] ${className}`}
    >
      <div className="flex flex-col items-center justify-center w-4/5 gap-2">
        {children}
      </div>
    </div>
  );
}
