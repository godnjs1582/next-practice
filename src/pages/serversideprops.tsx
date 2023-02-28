import axios from "axios";

function About({data}:{data:any}){
  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <h1>getServerSideProps|계속 데이터가 바껴야하는 경우</h1>
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



export default About;

export async function getServerSideProps(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const data =res.data
    return { props: {data} }
}