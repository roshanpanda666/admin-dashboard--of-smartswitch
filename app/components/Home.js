import Nav from './Nav'

const Home = () => {
  return (
    <div>
      <div >
        <Nav></Nav>
        <div className='flex justify-center items-center lg:flex-row flex-col'>
          <div className='lg:border-r-[1px] border-0 border-[#273464] lg:w-[40%] w-full  flex flex-col justify-center lg:items-end items-center ml-8 '>
            <div className='w-[83%] h-30 flex justify-center items-center'>
              <div className='lg:w-[60%] h-[90%] w-full'>
                <div className='rounded-4xl bg-[#141A30] h-[90%] w-[80%] flex flex-col justify-center lg:items-start items-center'>
                  <div className='lg:text-[1.3rem] test-[0.5rem] lg:ml-3 text-center lg:text-start' >LIVE RELAY STATUS</div>
                  <div>
                    <div className='rounded-2xl lg:w-28 w-16 h-9 bg-[#273464] flex text-center items-center justify-end ml-3'>
                      <div className='text-center rounded-full bg-[#3a4a87] w-[40%] h-full flex justify-center items-center'>
                        ON
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className='lg:w-[40%] w-full h-[90%] '>
              <div className='rounded-4xl bg-[#141A30] h-[90%] w-[80%] flex flex-col justify-center items-start'>
                  <div className='lg:text-[1.3rem] text-[0.6rem] ml-3'>CONDITION</div>
                  <div>
                    <div className=' w-28 h-9 flex text-center items-center justify-start ml-3'>
                      <div className='text-start text-green-300'>
                        GOOD
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[83%]  h-63'>
              <div className='w-[93%] h-full rounded-4xl bg-[#141A30] flex justify-center items-center'>
                <div className='h-full w-[30%] flex flex-col lg:text-2xl'>
                  <div className='mt-3'>Pin:</div>
                  <div className='bg-[#0E1523] flex justify-center items-center w-14 h-14 mt-4 text-green-300'>09</div>
                  <div className='bg-[#0E1523] flex justify-center items-center w-14 h-14 mt-4 text-green-300'>10</div>
                  <div className='bg-[#0E1523] flex justify-center items-center w-14 h-14 mt-4 text-green-300 mb-2'>11</div>

                </div>
                <div className='h-full w-[30%] flex flex-col lg:text-2xl'>
                  <div className='mt-3'>Port:</div>
                  <div className='bg-[#0E1523] flex justify-center items-center w-20 h-14 mt-4 text-[#09A1FF]'>com 8</div>
                  <div className='bg-[#0E1523] flex justify-center items-center w-20 h-14 mt-4 text-[#09A1FF]'>com 8</div>
                  <div className='bg-[#0E1523] flex justify-center items-center w-20 h-14 mt-4 text-[#09A1FF] mb-2'>com 8</div>

                </div>
                <div className='h-full w-[30%] flex flex-col lg:text-2xl'>
                  <div className='mt-3 text-[#727272]'>Relay:</div>
                  <div className='bg-[#0E1523] flex justify-center items-center w-14 h-14 mt-4 text-white'>01</div>
                  <div className='bg-[#0E1523] flex justify-center items-center w-14 h-14 mt-4 text-white'>02</div>
                  <div className='bg-[#0E1523] flex justify-center items-center w-14 h-14 mt-4 text-white mb-2'>03</div>

                </div>  
              </div>
            </div>
            <div className='w-[83%]  h-32'>
              <div className='bg-[#141A30] h-[90%] w-[93%] rounded-3xl mt-4 flex justify-center items-center flex-col'>
                  <div className=' w-full h-full lg:text-[1.3rem] ml-4'>
                    REMOTE SWITCH CONTROL
                  </div>
                  <div className=' w-full h-full flex mb-2'>
                    <div className=' w-full h-full bg-[#273464] text-[#09A1FF] rounded-2xl flex justify-center items-center text-center lg:text-2xl'> ONLINE</div>
                    <div className=' w-full h-full lg:text-2xl text-[#31C370] flex justify-center items-center text-center'>ONLINE</div>
                    <div className='bg-[#0F1727] w-full h-full rounded-2xl flex justify-center items-center'>
                      <div className='bg-[#EF6060] w-[70%] h-[70%] rounded-3xl text-black text-center lg:text-2xl justify-center items-center flex font-bold'>OFF</div>
                      <div className='ml-1 w-[20%] h-[70%] flex flex-col justify-center items-center'>
                        <div className='w-full h-2 bg-[#31C370] rounded-4xl'></div>
                        <div className='w-full h-2 bg-[#D9D9D9] rounded-4xl mt-2'></div>

                      </div>
                    </div>

                  </div>

              </div>
            </div>
            <div className='w-[83%]  h-20 mt-4 '>
              <div className=' bg-[#141A30] rounded-3xl w-[93%] h-full flex justify-center items-center'>
              <div className=' w-full h-full'>
                <div className='mt-2'>CONNECTION STATUS</div>
                <div className='text-[#31C370] lg:text-2xl'>CONNECTED</div>
              </div>
              <div className=' w-full h-full flex justify-center items-center '>
                <div className='border-2 rounded-2xl border-[#273464] bg-[#090F19] h-[80%] w-[80%] flex justify-center items-center text-3xl'> ^_^ </div>
              </div>
              </div>
              
            </div>
          </div>
          {/* right side */}
          <div className=' lg:w-[60%] w-full h-[87vh] flex justify-center items-center flex-col mt-10 lg:mt-0'>
            <div className='h-full w-full flex justify-center items-center lg:-ml-16'>
              <div className='h-[90%] w-[87%] bg-[#141A30] rounded-3xl flex flex-col'>
                  <div className='mt-4 lg:text-2xl ml-2'>FACE DETECTION LOGS</div>
                  <div className=' h-full w-full flex'>
                    <div className=' ml-2 h-full w-full'>
                      <div className='mt-3 text-gray-500 bg-[#0F1727] h-10'>TIME STAMP</div>
                      <div className='mt-3 text-white lg:text-[1.6rem]'>2025-05-24 12:31:45</div>
                      <div className='mt-3 text-white lg:text-[1.6rem] bg-[#0F1727]'>2025-05-24 12:31:45</div>
                      <div className='mt-3 text-white lg:text-[1.6rem]'>2025-05-24 12:31:45</div>
                      
                    </div>
                    <div className='h-full w-full '>
                    <div className='mt-3 text-gray-500 bg-[#0F1727] h-10'>DETAILS</div>
                      <div className='mt-3 text-white lg:text-[1.6rem]'>Face detected</div>
                      <div className='mt-3 text-white lg:text-[1.6rem] bg-[#0F1727]'>Face detected</div>
                      <div className='mt-3 text-white lg:text-[1.6rem]'>Face detected</div>
                      
                    </div>
                  </div>
              </div>

            </div>
            <div className='h-full w-full flex justify-center items-center lg:-ml-16'>
            <div className='h-[96%] w-[87%] bg-[#141A30] rounded-3xl flex '>
                  <div className=' h-full w-full flex flex-col'>
                    <div className='lg:text-2xl mt-3 ml-3'>DEVICES</div>
                    <div className=' mt-3 ml-3 text-gray-500 bg-[#0F1727]'>NAME</div>
                    <div className='lg:text-2xl mt-3 ml-3 '>DEVICE 1</div>
                    <div className='lg:text-2xl mt-3 ml-3 bg-[#0F1727]'>DEVICE 2</div>
                    <div className='lg:text-2xl mt-3 ml-3'>DEVICE 3</div>




                  </div>
                  <div className=' h-full w-full'>
                  <div className='lg:text-2xl lg:mt-14 mt-12'></div>
                    <div className=' lg:mt-3  text-gray-500 bg-[#0F1727]'>STATUS</div>
                    <div className='lg:text-2xl mt-3 text-[#31C370]'>Online</div>
                    <div className='lg:text-2xl mt-3 bg-[#0F1727] text-[#EF6060]'>Offline</div>
                    <div className='lg:text-2xl mt-3 text-[#EF6060]'>Offline</div>

                  </div>
                  <div className=' h-full w-full flex flex-col'>
                    <div className='text-gray-500 lg:mt-5'>From mongoDB data:-</div>
                    <div className=' lg:mt-3 text-gray-500 bg-[#0F1727]'>LAST ACTIVE</div>
                    <div className='lg:text-2xl text-[0.8rem] lg:mt-3 mt-6'>2025-05-24 12:31:45</div>
                    <div className='lg:text-2xl text-[0.8rem] mt-3 lg:bg-[#0F1727]'>2025-05-24 12:31:45</div>
                    <div className='lg:text-2xl text-[0.8rem] mt-3'>2025-05-24 12:31:45</div>




                  </div>
            </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
