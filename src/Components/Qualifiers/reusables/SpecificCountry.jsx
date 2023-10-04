import styled from "styled-components";
import PlayerCard from "./PlayerCard";
import { useEffect, useState } from "react";
import axios from "axios";

const FLAG="https://media.istockphoto.com/id/1217456327/vector/national-france-flag-vector-illustration.jpg?s=612x612&w=0&k=20&c=73SCididFCKYTo035ilEGq9dMI5hvzqoIAdsMUt9Miw="

const SpecificCountry = () => {
  const [players, setPlayers] = useState([])
  const URL="http://localhost:3000/players"
  const COUNTRY="France"

  useEffect(()=>{
        axios.get(`${URL}`)
        .then(response=>{
          setPlayers(response.data)
          // console.log(response.data)
        })
        .catch(error=>{
          alert("Error in players fetching!")
          console.log(error.message)
        })
  },[])
  
  return (
    <div className="w-full h-full font-poppins bg-bgcolor">
      <div className="">
        <header className="capitalize text-2xl h-[11rem] bg-red-500 text-white flex items-center pl-10">
          <div className="flex items-center gap-x-4">
            <Flag className=" w-[4rem] h-[2.7rem]"></Flag>
            <span className="font-medium text-3xl">{COUNTRY}</span>
          </div>
         
        </header>

        <section className="w-[94%] mx-auto">

        <h1 className="text-2xl font-medium mb-8 mt-7">Squad</h1>
        {
          players?
          (<div className="grid grid-cols-4 gap-7">
          {
            players.map((eachPlayer, index)=>{
              return <PlayerCard key={index} eachPlayer={eachPlayer}/>
            })
          }
        </div>)
        :<h1>Loading...</h1>
        }
      </section>
      </div>
    </div>
  )
}

const Flag=styled.div`
          background-image:url(${FLAG});
          background-size:100% 100%;
          // background-color:red;
          background-repeat:no-repeat;
          background-position: center center;
          background-attachment:scroll;
`;

export default SpecificCountry