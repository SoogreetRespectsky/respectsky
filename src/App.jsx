import { useState } from "react";

const content = {
  en:{
    hero:"We Build Systems That Increase Revenue",
    sub:"Trusted by enterprise clients",
    cta:"🚀 Get Free Consultation",
    case:"Case Study",
    founder:"Founder",
    contact:"Contact"
  },
  th:{
    hero:"เราสร้างระบบที่ช่วยเพิ่มรายได้",
    sub:"ได้รับความไว้วางใจจากองค์กร",
    cta:"🚀 ปรึกษาฟรี",
    case:"ผลงาน",
    founder:"ผู้ก่อตั้ง",
    contact:"ติดต่อ"
  },
  cn:{
    hero:"我们打造能提升收入的系统",
    sub:"服务大型企业客户",
    cta:"🚀 免费咨询",
    case:"案例",
    founder:"创始人",
    contact:"联系"
  }
};

const portfolio=[
"/pic_big_01.jpg",
"/pic_big_02.jpg",
"/pic_big_03.jpg"
];

export default function App(){
  const [lang,setLang]=useState("en");
  const [selected,setSelected]=useState(null);
  const t=content[lang];

  return(
    <div style={{background:"#020617",color:"white"}}>

      <div style={{position:"fixed",top:0,width:"100%",display:"flex",justifyContent:"space-between",padding:"20px",background:"rgba(0,0,0,0.5)"}}>
        <div>RespectSky</div>
        <div>
          <button onClick={()=>setLang("th")}>TH</button>
          <button onClick={()=>setLang("en")}>EN</button>
          <button onClick={()=>setLang("cn")}>CN</button>
        </div>
      </div>

      <section style={{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h1>{t.hero}</h1>
        <p>{t.sub}</p>

        <a href="https://line.me/ti/g2/4i2NsUZAYvaga8MT6lq_leX5nEG9DtAn2VEoZg"
           style={{marginTop:"20px",background:"#06C755",padding:"14px 24px",borderRadius:"999px"}}>
          {t.cta}
        </a>
      </section>

      <section style={{padding:"100px 20px",textAlign:"center"}}>
        <h2>{t.case}</h2>
        <p>
          SCB System – รองรับ 1M+ transactions<br/>
          Amway – เพิ่มยอดขาย +35%
        </p>
      </section>

      <section style={{padding:"100px 20px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"20px"}}>
          {portfolio.map((img,i)=>(
            <img key={i} src={img} onClick={()=>setSelected(img)} style={{width:"100%"}}/>
          ))}
        </div>
      </section>

      {selected && (
        <div onClick={()=>setSelected(null)} style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"black"}}>
          <img src={selected} style={{width:"80%"}}/>
        </div>
      )}

      <section style={{padding:"100px 20px",textAlign:"center"}}>
        <h2>{t.founder}</h2>
        <p>Soogreet Pornpibul – Technology Strategist</p>
      </section>

      <section style={{padding:"100px 20px",textAlign:"center"}}>
        <h2>{t.contact}</h2>
        <iframe src="https://www.google.com/maps?q=13.6069,100.7054&output=embed"
          width="100%" height="300"></iframe>
      </section>

    </div>
  )
}
