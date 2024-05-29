import { ReactSetState } from "../types/utils";

type Input={
    type:"text"|"checkbox"|"color"
    inputValue:string;
    setInputValue: ReactSetState<string>;
}

export const Input = ({type, inputValue,setInputValue}:Input) => {
  return (
    <input className="w-full p-2 rounded-md mb-2 text-black" 
        type={type}
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}/>
  )
}
