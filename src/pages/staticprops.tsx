import axios from "axios";

function About({data}:{data:any}){
  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <h1>getStaticProps|html이 build타임에 생성, 빌드된 html 재사용</h1>
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

export async function getStaticProps(){
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const data =res.data
    return { props: {data} }
}