import {useState} from "react";
import { CardBody } from "reactstrap";
function TOP1() {

const[card,setcard]= useState([
    {id:1,picture:"https://digitalhub.fifa.com/transform/1664e96c-cb18-4b1b-af5c-a2a648b4558c/Portugal-s-players-celebrate?io=transform:fill,aspectratio:16x9,width:404&quality=100",title:"Football Unites the world", description:"Matuidi:Football has the power to create a better world.",date:"18 Nov 2022"}
  ,{id:2,picture:"https://digitalhub.fifa.com/transform/75223765-8827-4d30-b9ae-55089e256bfe/WOMEN-S-FOOTBALL-DEVELOPMENT?io=transform:fill,aspectratio:16x9,width:306&quality=100",title:"Football Unites the world", description:"Mario Yepes:Football needs to provide a 'bridge' education",date:"15 Nov 2022"}
   ,{id:3,picture:"https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:16x9,width:306&quality=100",title:"Football Unites the world", description:"Lylod: Every Worldcup has its own highs and lows.",date:"14 Nov 2022"}
   ,{id:4,picture:"https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:16x9,width:306&quality=100",title:"Football Unites the world", description:"Lylod: Every Worldcup has its own highs and lows.",date:"14 Nov 2022"}
   ,{id:5,picture:"https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:16x9,width:306&quality=100",title:"Football Unites the world", description:"Lylod: Every Worldcup has its own highs and lows.",date:"14 Nov 2022"},
   {id:5,picture:"https://digitalhub.fifa.com/transform/a55109fa-3cef-4a20-b8f2-614a57972976/FIFA-Forward-Programme-New-DFB-Campus?io=transform:fill,aspectratio:16x9,width:306&quality=100",title:"Football Unites the world", description:"Lylod: Every Worldcup has its own highs and lows.",date:"14 Nov 2022"}
  ])
  const handleDelete=(item)=>{ const filterData=card.filter((se)=>se.id !=item ); setcard(filterData);}
    return (
        <div style={{display:"inline-block",backgroundColor:" rgb(15, 133, 162)",height:0,marginTop:"10px",position:"relative",}}>

  
 
<div className="row" style={{display:"inline-block",flexDirection:"row",marginLeft:450,position:"relative",marginTop:"-240px"}}>
{card.map((item)=>
(
    <div className="row row-cols-1 row-cols-md-2" >
  <div class="col mb-2" >
    <div class="card" style={{marginTop:"150px"}}>
      <img src={item.picture} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.description}</p>
        <button onClick={(se)=> handleDelete(card.id)}>Delete</button>

      </div>
    </div>
  </div>
  </div>


))
}

{/* <div class="card" style={{width: "18rem"}}>
  <img src={item.picture} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
    <button>Delete</button>
  </div>
</div> */}
{/* <div className="row row-cols-1 row-cols-md-2" style={{width:"20.6rem",backgroundColor:"white",marginLeft:-330,marginTop:"250px"}} >
<img className="col mb-4"  style={{width:330,height:190}} src={item.picture} alt="Card image cap"/>
<div className="card-body">
    <p className="card-text" style={{marginLeft:"8%",fontFamily:"serif"}}>{item.title}</p>
    <h2 style={{marginLeft:"8%" ,fontFamily:"Serif"}}>{item.description}</h2>
    <h3 style={{marginLeft:"8%"}}>{item.date}</h3>
    <button onClick={(se)=> handleDelete(card.id)}>Delete</button>
  </div> 0
</div> */}


</div>
</div>
);
}

export default TOP1;