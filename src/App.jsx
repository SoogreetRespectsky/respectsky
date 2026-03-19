import { motion } from "framer-motion";

const images = [
"/pic_big_01.jpg","/pic_big_02.jpg","/pic_big_03.jpg"
];

export default function App(){
  return (
    <div style={{background:"#0b0f1a",color:"white",padding:"40px"}}>
      <h1>RespectSky</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
        {images.map((img,i)=>(
          <motion.img key={i} src={img} whileHover={{scale:1.05}}/>
        ))}
      </div>
    </div>
  )
}
