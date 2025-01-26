import { Button } from "./button";

export function ButtonCustom({
  children,
  className,
  ...props
}: React.PropsWithChildren & React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      className={`bg-purple-500 hover:bg-purple-700 text-white rounded-lg mt-5 w-full md:w-3/4 transition-all duration-300 hover:scale-105 text-wrap py-7 md:py-2 ${className}`}
    >
      {children}
    </Button>
  );
}
