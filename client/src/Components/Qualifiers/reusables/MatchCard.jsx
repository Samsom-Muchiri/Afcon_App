const MatchCard = () => {
    

  return ( 
    <div className='w-full font-poppins'>
        <div  className="bg-white p-4 relative w-[42rem] h-[11rem] rounded-lg bg-transparent border-2 border-transparent transition-all duration-500 hover:border-blue-500 shadow-[0_0_4px_rgba(0,0,0,0.2)] hover:shadow-[0_4px_18px_0_rgba(0,0,0,0.28)] cursor-pointer overflow-hidden">
            <div className="text-gray-500 flex justify-between items-center text-sm">
                <div>
                    <p className="">Round One</p>
                    <p>Kasarani Stadium, Home of Heroes</p>
                </div>
                
                <p>21 Sep 2023</p>
            </div>
            
            <div className=" flex justify-between items-center mt-1">
                <div className="w-[38rem]">
                    <p className="flex justify-between mt-3">
                        <span className="uppercase text-[0.8rem] font-semibold ">Uruguay</span>
                        <span className="">1</span>
                    </p>
                    <p className="flex justify-between mt-2">
                        <span className="uppercase text-[0.8rem] font-semibold ">Brazil</span>
                        <span className="">4</span>
                    </p>
                </div>
                <span className="bg-blue-500 text-sm px-2 rounded-lg ml-3">FT</span>
            </div>
            
        </div>
    </div>
  )
}

export default MatchCard