import { cn } from "@/lib/utils";

interface TitleSectionProps {
  title: string;
  description?: string;
  text: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  detail?: string;
}

const TitleSection = ({
  title,
  description,
  text,
  className,
  titleClassName,
  descriptionClassName,
  detail,
}: TitleSectionProps) => {
  return (
    <section
      className={cn(
        "mt-12 grid grid-cols-1 md:mt-20 md:grid-cols-6",
        className,
      )}
    >
      <div className="col-span-2 flex w-full pt-4 md:justify-center md:pt-20">
        <div className="flex h-fit w-fit items-center gap-2 rounded-md border border-gray-400 px-3 py-1 font-normal">
          <div className="h-1.5 w-1.5 animate-[blink_0.75s_steps(1,_start)_infinite] rounded-xs bg-[#636edf]"></div>
          <span>{text}</span>
        </div>
      </div>
      <div className="col-span-4 flex w-full flex-col gap-y-6 p-5 pl-0 md:flex-row md:gap-0">
        <div className="flex flex-col gap-4">
          <h2
            className={cn(
              "text-5xl leading-12 font-medium tracking-tight md:text-6xl md:leading-16",
              titleClassName,
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "mt-2 mb-12 leading-6 text-[#484848] md:mt-10 md:mb-20",
                descriptionClassName,
              )}
            >
              {description}
            </p>
          )}
        </div>
        {detail && (
          <div className="flex h-full items-center">
            <span className="max-w-80 text-sm text-[#484848]">{detail}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default TitleSection;
