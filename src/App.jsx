import { motion } from "framer-motion";

const images = [
  "/pic_big_01.jpg",
  "/pic_big_02.jpg",
  "/pic_big_03.jpg"
];

export default function App(){
  return (
    <div style={{background:"#0b0f1a",color:"white",padding:"40px",minHeight:"100vh"}}>
      <h1 style={{fontSize:"32px",marginBottom:"20px"}}>RespectSky Portfolio</h1>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:"20px"}}>
        {images.map((img,i)=>(
          <motion.img 
            key={i} 
            src={img} 
            whileHover={{scale:1.05}} 
            style={{width:"100%",borderRadius:"10px"}}
          />
        ))}
      </div>
    </div>
  )
}
