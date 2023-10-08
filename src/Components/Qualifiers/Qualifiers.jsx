import GroupTableRow from "./reusables/GroupTableRow";
import QualifierNews from "./reusables/QualifierNews";
import Matches from "./reusables/Matches";


const Qualifiers = () => {
  const GROUP_STAGES=[
    {
        Name:'Group A',
        countries:[
            {
                id:1,
                name:"NED",
                coach:"Johnson"
            },
            {
                id:2,
                name:"SEN",
                coach:"Johnson"
            },
            {
                id:3,
                name:"ECU",
                coach:"Johnson"
            },
            {
                id:4,
                name:"QTR",
                coach:"Johnson"
            }
        ]

    },
    {
        Name:'Group B',
        countries:[
            {
                id:5,
                name:"ENG",
                coach:"Johnson"
            },
            {
                id:6,
                name:"USA",
                coach:"Johnson"
            },
            {
                id:7,
                name:"IRN",
                coach:"Johnson"
            },
            {
                id:8,
                name:"WAL",
                coach:"Johnson"
            }
        ]

    },

  ]

  return (
    <div className="h-full w-full bg-bgcolor font-poppins">
      <div className="h-full ">
        <header className=" text-[2rem] h-[10rem] bg-blue-500 text-white flex items-center pl-12 font-semibold">
          2024 Africa Cup of Nations&trade; Qualifiers
        </header>

        <div className="w-[95%] m-auto">
          <h1 className="my-7 uppercase text-[1.3rem] font-semibold">
            Follow the 2024 AFCON Qualifiers
          </h1>

          <Matches />

        <h1 className="text-2xl my-5">GROUPS</h1>
        <div className="grid grid-cols-3 gap-x-[8rem]">
            {
                GROUP_STAGES.map((eachGroup,index)=>{
                    return(
                        <table key={index} className="w-[31rem] bg-white p-20 rounded-xl">
                            <thead>
                                <tr className="h-[4rem] border-b-[1px] border-b-gray-300 font-normal">
                                    <th className="text-center font-semibold text-2xl text-black w-[8rem]">{eachGroup.Name}</th>
                                    {/* <th className="text-center font-normal text-sm text-gray-500">A</th> */}
                                    <th className="text-center font-normal text-sm text-gray-500 w-[3rem]">P</th>
                                    <th className="text-center font-normal text-sm text-gray-500 w-[3rem]">W</th>
                                    <th className="text-center font-normal text-sm text-gray-500 w-[3rem]">D</th>
                                    <th className="text-center font-normal text-sm text-gray-500 w-[3rem]">L</th>
                                    <th className="text-center font-normal text-sm text-gray-500 w-[3rem]">GD</th>
                                    <th className="text-center font-normal text-sm text-gray-500 w-[3rem]">Pts</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    eachGroup.countries.map((eachCountry,index)=>{
                                        return <GroupTableRow key={index} No={index+1} onEachCountry={eachCountry}/>
                                    })
                                }
                                
                                
                            </tbody>
                        </table>
                    )
                })
            }
            

        </div>

        <section className="h-screen w-full mb-10 mt-20">
            <h1 className="mb-2 uppercase text-[1.7rem] font-semibold">latest qualifiers news</h1>
            
            <QualifierNews/>

        </section>

        </div>
      </div>
    </div>
  );
};

export default Qualifiers;
