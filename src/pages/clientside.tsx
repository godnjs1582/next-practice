import { useState, useEffect } from "react";
import axios from "axios";

function ClientSide(){
    const [data,setData]=useState<any[]>([]);
    const [isLoading, setIsLoading]=useState(false);

    const getPost = async()=>{
        setIsLoading(true)
        try{
            const res= await axios.get("https://jsonplaceholder.typicode.com/posts")
            const data =res.data
            setData(data)
            setIsLoading(false)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
    getPost() 
    },[])


  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <h1>clientSide</h1>
        {data.map((item:any,index:any)=>{return(
            <div key={index}>
                {item.userId}
                {item.title}
                {item.body}
            </div>
        )})}
       </div>
    </>
  );
}

export default ClientSide