import styled from "styled-components";

const FLAG="https://media.istockphoto.com/id/1217456327/vector/national-france-flag-vector-illustration.jpg?s=612x612&w=0&k=20&c=73SCididFCKYTo035ilEGq9dMI5hvzqoIAdsMUt9Miw="
// let photo_url;

const PlayerCard = ({eachPlayer}) => {
    // const name="Mohamed Salah"
    // const age=30
    // console.log(eachPlayer)
    const photo_url=eachPlayer.photo_url
    
    const PlayerImage=styled.div`
          background-image:url(${photo_url});
          background-size:100% 100%;
          // background-color:red;
          background-repeat:no-repeat;
          background-position: center center;
          background-attachment:scroll;
          box-shadow:inset 0px 0px 8px rgba(255,255,255,1);
`;
    
  return (
    <div className="font-poppins cursor-pointer ">
        <div className="player-card relative bg-white h-[26rem] w-[21rem] rounded-bl-[4rem] rounded-br-[4rem] rounded-lg hover:shadow-[0_0_7px_rgba(0,0,0,0.2)]">
            <Flag className="absolute w-[1.9rem] h-[1.2rem] top-8 left-6 "></Flag>
            <PlayerImage className="h-[17rem] w-[17rem] absolute left-[50%] -translate-x-[50%] top-[4rem] rounded-lg"></PlayerImage>
            <div className="absolute bottom-3 left-[50%] -translate-x-[50%] w-[18rem] ">
                <p className="font-medium text-lg border-b-[1px] border-b-gray-200">{eachPlayer.name}</p>
                <p>age: {eachPlayer.age}</p>
            </div>
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

export default PlayerCard