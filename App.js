import {useState} from "react";
import{data} from"./Birth";
function App(){
    const[people,setPeople]=useState(data)
    const removeperson=(id)=>{
      let newPerson=people.filter((person) =>person.id!==id)
      setPeople(newPerson)
    }


return(
    <>
    <h3 style={{backgroundColor:"yellow",color:"purple",textAlign:"center",fontFamily:"cursive",fontSize:"40px"}}>
        you have {people.length}Birthday's today</h3>
        {people.map((person)=>{
          const {id,name,age,country,image}=person
          return(
            <div className="container" key={id}>
              <img src={image} alt={name} />
              <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{country}</li>
              </ul>
              
                <button className="btn"onClick={()=>removeperson(id)} >DISMISS</button>
                

              </div>
              
          )


              
            
          


        }
        )

        }
    
    </>



)


}
export default App