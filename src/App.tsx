import './App.css'
import { useState } from 'react';
import { ImageHeader } from './components/ImageHeader'
import { Input } from './components/Input';
import { Button } from './components/Button';
import { type Items } from './types/utils';
import { ItemList } from './components/ItemList';


function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault()
    setItems((prev)=>[...prev,{title:inputValue, id:Date.now().toString()}]);
    setInputValue("");
  }
  
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
    <ImageHeader/>
    <div className='w-[350px]'>

       <form className='mb-5' onSubmit={handleSubmit}>
        <Input  type="text" inputValue={inputValue} setInputValue={setInputValue}/>
        <Button className='w-full bg-green-500 px-4 py-0.5 
        border-2 rounded-md font-semibold'>Add</Button>
       </form>

       <div className='h-52 overflow-y-auto'>
          <ItemList items={items} setItems={setItems}/>
       </div>

    </div>

    </div>
  )
}

export default App
