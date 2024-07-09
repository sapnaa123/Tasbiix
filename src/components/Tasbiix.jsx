import { useState } from "react"
function Tasbiix(){

   const [counter, setCount]= useState(0)


    // update the button increment
    const increment= () => {
        setCount(counter +1);
        if(counter == 0){
            document.body.style.backgroundColor = "yellow"
        }
       else if(counter == 1){
         document.body.style.backgroundColor = "blue"
       }
       else if(counter == 2){
        document.body.style.backgroundColor = "green"
      }
      else if(counter == 3){
        document.body.style.backgroundColor = "red"
      }

      else{
        document.body.style.backgroundColor = "white"
      }
    }
    // update the button decrement
    const Decrement= () => {
        setCount(counter -1);
        if(counter== 0){
            setCount(0)
            
        }

        if(counter == 5){
            document.body.style.backgroundColor = "yellow"
        }
       else if(counter == 4){
         document.body.style.backgroundColor = "blue"
       }
       else if(counter == 3){
        document.body.style.backgroundColor = "green"
      }
      else if(counter == 2){
        document.body.style.backgroundColor = "red"
      }

      else{
        document.body.style.backgroundColor = "white"
      }
     
    }
    const Reset= () => {
        setCount(0);
     
    }
    return <div className="flex justify-center mt-8">
<div>
    <div counter  className="sm:w-[350px] w-[300px] mx-10  h-[100px] rounded text-center text-4xl font-bold border-2 border-black sm:ml-16 my-10">
    <h1 className="mt-8">{counter} </h1>
    </div>
    
    <button   onClick={increment}  className="bg-orange-600 w-[120px] h-[60px]  sm:text-3xl text-1xl sm:px-3 px-1 py-2 sm:m-3 m-1 sm:ml-8 ml-2   rounded">increment</button>
    <button  onClick={Decrement} className="bg-orange-600 w-[120px] h-[60px] sm:text-3xl text-1xl sm:px-3 px-1 py-2 sm:m-3 m-1 rounded">Decrement</button>
    <button  onClick={Reset} className="bg-orange-600 w-[90px] h-[60px]  sm:text-3xl text-1xl sm:px-3 px-1 py-2 sm:m-3 m-1 rounded">Reset</button>
   
</div>
    </div>
}

export default Tasbiix