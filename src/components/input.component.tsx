
const InputText = ({value,onChange,labelClassName,type,placeholder,className,textLabel,errorField}:{
    value?: string | number | readonly string[] | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement> | undefined;
    type?: React.HTMLInputTypeAttribute | undefined;
    placeholder?: string | undefined;
    className?: string | undefined;
     labelClassName?: string | undefined;
    textLabel?:string;
    errorField?:any
}) => {
  return (
    <div className="flex-col gap-1"> 
        {textLabel&&<label className={labelClassName} >{textLabel}: </label>}
        <input value={value} onChange={onChange} type="text" placeholder="Votre nom" required className="" />
        {errorField&&  <em className="text-sm text-red-500 mt-1.5" >{errorField}</em>  }
    </div>
  )
}

export default InputText
