import { FaTrash } from "react-icons/fa"
import { Button } from "./Button"
import { Items, ReactSetState } from "../types/utils"

type ItemList={
    items:Items[];
    setItems:ReactSetState<Items[]>;
}

export const ItemList = ({items, setItems}:ItemList) => {

    const handleDelete=(id:string)=>{
        setItems((prev)=>prev.filter((data)=>data.id!==id))
    }

  return (
    items.map(data=>(
        <div key={data.id} className='flex justify-between items-center rounded-lg border-4 border-slate-400 px-2 py-2 mb-2'>
          <p>{data.title}</p>
          <Button onClick={()=>handleDelete(data.id)} >
            <FaTrash className='ml-2'/>
          </Button>
        </div> 
      ))
  )
}
