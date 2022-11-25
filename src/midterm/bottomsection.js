
import {useState} from "react";

function BottomSection() {

   const [men,setMen]=useState([
       {rk:1, team:"https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/BRA?tx=c_fill,g_auto,q_auto,w_70,h_46", country:"Brazil", tpoints:"1841.30"},
       {rk:2, team:"https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/BEL?tx=c_fill,g_auto,q_auto,w_70,h_46", country:"Belgium", tpoints:"1816.71"},
       {rk:3, team:"https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/ARG?tx=c_fill,g_auto,q_auto,w_70,h_46", country:"Argentina", tpoints:"1773.88"},
       {rk:4, team:"https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/FRA?tx=c_fill,g_auto,q_auto,w_70,h_46", country:"France", tpoints:"1759.88"},
       {rk:5, team:"https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/ENG?tx=c_fill,g_auto,q_auto,w_70,h_46", country:"England", tpoints:"728.47      "},
   ]);

   const [women,setWomen]=useState([
    {rk:1, team:"https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/USA?tx=c_fill,g_auto,q_auto,w_70,h_46", country:"USA", tpoints:"2087.48"},
    {rk:2, team:"https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/SWE?tx=c_fill,g_auto,q_auto,w_70,h_46", country:"Sweden", tpoints:"2066.30"},
    {rk:3, team:"https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/GER?tx=c_fill,g_auto,q_auto,w_70,h_46", country:"Germany", tpoints:"2064.75"},
    {rk:4, team:"https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/FRA?tx=c_fill,g_auto,q_auto,w_70,h_46", country:"France", tpoints:"2051.61"},
    {rk:5, team:"https://cloudinary.fifa.com/api/v1/picture/flags-sq-2/ENG?tx=c_fill,g_auto,q_auto,w_70,h_46", country:"England", tpoints:"2023.09"},
]);




    return ( 
 
 <div>



<div style={{width:"400px",height:"100%",marginLeft:"1px",marginBottom:"-220px"}}>

<h4>MEN</h4>
<table className="table table-bordered">

<tr>
<td>RK</td>
<td>TEAM</td>
<td></td>
<td>TOTAL POINTS</td>
</tr>
{
    men.map((index,key)=>(
    <tr key={index.rk}>
    <th>{index.rk}</th>
    <th><img src={index.team} style={{width:"120px",height:"70px"}}/></th>
    <th>{index.country}</th>
    <th>{index.tpoints}</th>
    </tr>
))
}
</table>
<p>Updated 6 October 2022</p>
<h6 style={{color:"blue"}}>Check full men's ranking table </h6>
</div>

<div style={{width:"400px",height:"100%",marginLeft:"400px",marginTop:"-513px"}}>

 <h4>WOMEN</h4> 
 <table className="table table-bordered">

<tr>
<td>RK</td>
<td>TEAM</td>
<td></td>
<td>TOTAL POINTS</td>
</tr>
{
    women.map((index,key)=>(
    <tr key={index.rk}>
    <th>{index.rk}</th>
    <th><img src={index.team} style={{width:"120px",height:"70px"}}/></th>
    <th>{index.country}</th>
    <th>{index.tpoints}</th>
    </tr>
))
}
</table> 
<p>Updated 13 October 2022</p>
<h6 style={{color:"blue"}}>Check full women's ranking table </h6> 
</div>



 </div>
 






     );
}

export default BottomSection;