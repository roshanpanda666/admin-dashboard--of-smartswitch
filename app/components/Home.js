import Nav from './Nav'
const Home = () => {
  
  return (
    <div className="min-h-screen bg-[#0F1727] text-white">
      <Nav />
      <div className="flex flex-col lg:flex-row justify-center items-start w-full px-4 lg:px-20 py-6 gap-8">

        {/* Left Side */}
        <div className="w-full lg:w-[40%] flex flex-col gap-6">

          {/* Relay & Condition */}
          <div className="flex flex-col lg:flex-row gap-4 text-center">
            <div className="flex-1 bg-[#141A30] p-4 rounded-3xl flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold">LIVE RELAY STATUS</h3>
              <div className="mt-3 w-24 h-9 bg-[#273464] rounded-2xl flex items-center justify-end">
                <div className="w-[40%] h-full bg-[#3a4a87] rounded-full flex items-center justify-center">ON</div>
              </div>
            </div>
            <div className="flex-1 bg-[#141A30] p-4 rounded-3xl flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold">CONDITION</h3>
              <div className="mt-3 text-green-300 text-xl">GOOD</div>
            </div>
          </div>

          {/* Pin/Port/Relay Info */}
          <div className="bg-[#141A30] rounded-3xl p-4 flex justify-between">
            <div className="flex flex-col gap-4 items-center text-xl">
              <span className="text-gray-400">Pin:</span>
              <div className="w-14 h-14 bg-[#0E1523] text-green-300 flex items-center justify-center rounded-lg">09</div>
              <div className="w-14 h-14 bg-[#0E1523] text-green-300 flex items-center justify-center rounded-lg">10</div>
              <div className="w-14 h-14 bg-[#0E1523] text-green-300 flex items-center justify-center rounded-lg">11</div>
            </div>
            <div className="flex flex-col gap-4 items-center text-xl">
              <span className="text-gray-400">Port:</span>
              <div className="w-20 h-14 bg-[#0E1523] text-[#09A1FF] flex items-center justify-center rounded-lg">COM 8</div>
              <div className="w-20 h-14 bg-[#0E1523] text-[#09A1FF] flex items-center justify-center rounded-lg">COM 8</div>
              <div className="w-20 h-14 bg-[#0E1523] text-[#09A1FF] flex items-center justify-center rounded-lg">COM 8</div>
            </div>
            <div className="flex flex-col gap-4 items-center text-xl">
              <span className="text-gray-400">Relay:</span>
              <div className="w-14 h-14 bg-[#0E1523] flex items-center justify-center rounded-lg">01</div>
              <div className="w-14 h-14 bg-[#0E1523] flex items-center justify-center rounded-lg">02</div>
              <div className="w-14 h-14 bg-[#0E1523] flex items-center justify-center rounded-lg">03</div>
            </div>
          </div>

          {/* Remote Control */}
          <div className="bg-[#141A30] rounded-3xl p-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold">REMOTE SWITCH CONTROL</h3>
            <div className="flex gap-2 mt-2">
              <div className="flex-1 bg-[#273464] text-[#09A1FF] rounded-2xl flex items-center justify-center text-xl">ONLINE</div>
              <div className="flex-1 text-[#31C370] flex items-center justify-center text-xl">ONLINE</div>
              <div className="flex-1 bg-[#0F1727] rounded-2xl flex items-center justify-between px-2">
                <div className="bg-[#EF6060] w-[70%] h-[70%] flex items-center justify-center rounded-3xl font-bold text-black text-xl">OFF</div>
                <div className="flex flex-col gap-1 w-[20%] h-[70%]">
                  <div className="w-full h-2 bg-[#31C370] rounded-4xl"></div>
                  <div className="w-full h-2 bg-[#D9D9D9] rounded-4xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Status */}
          <div className="bg-[#141A30] rounded-3xl p-4 flex justify-between items-center">
            <div>
              <h3 className="text-md text-gray-300">CONNECTION STATUS</h3>
              <div className="text-[#31C370] text-xl">CONNECTED</div>
            </div>
            <div className="border-2 border-[#273464] bg-[#090F19] rounded-2xl w-20 h-16 flex items-center justify-center text-3xl">^_^</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[60%] flex flex-col gap-6">

          {/* Face Detection Logs */}
          <div className="bg-[#141A30] rounded-3xl p-4">
            <h3 className="text-lg mb-4">FACE DETECTION LOGS</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="bg-[#0F1727] text-gray-400 p-2">TIME STAMP</div>
                <div className="mt-2 text-lg">2025-05-24 12:31:45</div>
                <div className="mt-2 bg-[#0F1727] text-lg p-2">2025-05-24 12:31:45</div>
                <div className="mt-2 text-lg">2025-05-24 12:31:45</div>
              </div>
              <div>
                <div className="bg-[#0F1727] text-gray-400 p-2">DETAILS</div>
                <div className="mt-2 text-lg">Face detected</div>
                <div className="mt-2 bg-[#0F1727] text-lg p-2">Face detected</div>
                <div className="mt-2 text-lg">Face detected</div>
              </div>
            </div>
          </div>

          {/* Devices */}
          <div className="bg-[#141A30] rounded-3xl p-4">
            <h3 className="text-lg mb-2">DEVICES</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="bg-[#0F1727] text-gray-400 p-2">NAME</div>
                <div className="mt-2 text-lg">DEVICE 1</div>
                <div className="mt-2 bg-[#0F1727] text-lg p-2">DEVICE 2</div>
                <div className="mt-2 text-lg">DEVICE 3</div>
              </div>
              <div>
                <div className="bg-[#0F1727] text-gray-400 p-2">STATUS</div>
                <div className="mt-2 text-[#31C370] text-lg">Online</div>
                <div className="mt-2 bg-[#0F1727] text-[#EF6060] text-lg">Offline</div>
                <div className="mt-2 text-[#EF6060] text-lg">Offline</div>
              </div>
              <div>
                <div className="text-gray-500">From MongoDB:</div>
                <div className="bg-[#0F1727] text-gray-400 p-2 mt-2">LAST ACTIVE</div>
                <div className="mt-2 text-sm lg:text-lg">2025-05-24 12:31:45</div>
                <div className="mt-2 bg-[#0F1727] text-sm lg:text-lg p-2">2025-05-24 12:31:45</div>
                <div className="mt-2 text-sm lg:text-lg">2025-05-24 12:31:45</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
