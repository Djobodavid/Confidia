const InputText = ({
  value,
  onChange,
  labelClassName,
  type,
  placeholder,
  className,
  required,
  textLabel,
  errorField,
}: {
  value?: string | number | readonly string[] | undefined;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>
    | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  className?: string | undefined;
  labelClassName?: string | undefined;
  textLabel?: string;
  errorField?: any;
  required?: boolean | undefined;
}) => {
  return (
    <div className="flex-col gap-0.5">
      {textLabel && <label className={labelClassName}>{textLabel}: </label>}
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        className={className}
      />
      {errorField && (
        <em className="text-sm text-red-500 mt-1.5">{errorField}</em>
      )}
    </div>
  );
};

export default InputText;
