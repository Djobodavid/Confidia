

export const BoutonComponent = ({count,onClick,buttonText='count est',className}:{count?:number;onClick?: React.MouseEventHandler<HTMLButtonElement>;buttonText?:string;className?: string | undefined}) => {
  return (
        <button onClick={onClick} className={className}>
          {buttonText} {' '} {count&&count}
        </button>
  )
}

export default BoutonComponent
