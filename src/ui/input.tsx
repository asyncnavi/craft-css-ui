import clsx from "clsx";
import { FC, forwardRef, ForwardedRef, InputHTMLAttributes } from "react";

type TextFieldProps = {
  label: string;
  htmlFor?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField: FC<TextFieldProps> = forwardRef(
  ({ label, htmlFor, error, ...rest }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="flex flex-col items-start space-y-2 w-full">
        {label && <label htmlFor={htmlFor}>{label}</label>}
        <input
          ref={ref}
          {...rest}
          className={clsx(
            "p-4 outline-none rounded-2xl text-slate-200 w-full bg-slate-800 border-white",
            `border-2 ${
              error ? "border-red-600 placeholder:text-red-600" : "border-black"
            }`
          )}
        />
        {error && <span className="text-red-600">{error}</span>}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export { TextField };
