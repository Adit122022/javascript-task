import React from 'react';

const MainSection = () => {
  return (
    <>
    <div className="relative w-screen md:h-[100vh] h-[50vh] md:px-20 px-5 md:pt-20 py-5">
      {/* Wrapper with group class */}
      <div className="relative w-full h-full group overflow-hidden rounded-3xl active:rounded-[30px] md:rounded-[3rem] md:hover:rounded-[8rem] hover:rounded-[5rem] transition-all duration-500">
        {/* First Image */}
        <img
          className="md:rounded-[3rem] w-full h-full object-cover transition-all duration-500   md:group-hover:scale-125"
          src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b562e62e676d4159713_NS_Wayfinding%20_%20NaN-p-2000.jpg"
          alt="Background"
        />
        {/* Second Image */}
        <img
          className="md:group-hover:rounded-[8rem] opacity-0 group-hover:opacity-100 w-1/2 md:w-[400px] md:h-[400px] object-cover absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[3rem] transition-all duration-500"
          src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b6d98261b9aedd2482e_NS_Logo-NaN-p-500.jpg"
          alt="Logo"
        />
      </div>
    </div>
    <div className='md:px-20 px-5'> 
        <p className='text-[#B2B2B5]'>Nieuw Schaijk</p>
        <p className='text-xl font-semibold mb-5'>De smaak van thuis</p>
        <div className='text-xs uppercase'> 
      <span className='px-3  py-[2px] border border-gray-700 rounded-lg'>  Brand Story</span>
      <span className='px-3 ml-3 py-[2px] border border-gray-700 rounded-lg'> Merkidentiteit</span>
        </div>
    </div>
{/* Section bottom */}
    <div className='md:flex md:px-20 px-5'>
   <div className='md:w-1/2'>
   <div className="relative w-full h-3/4 md:px-12 md:pt-20 py-5">
      {/* Wrapper with group class */}
      <div className="relative md:w-full md:h-full h-96  group overflow-hidden rounded-[3rem] md:hover:rounded-[8rem] hover:rounded-[5rem] transition-all duration-500">
        {/* First Image */}
        <img
          className="rounded-[3rem] w-full h-full object-cover transition-all duration-500  group-hover:scale-125"
          src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac65e2bf6eb87608fe500_GC_Flyers-Nan-min-p-2000.jpg"
          alt="Background"
        />
        {/* Second Image */}
        <img
          className="md:group-hover:rounded-[8rem] group-hover:rounded-[3rem] opacity-0 group-hover:opacity-100 md:w-[400px]  md:h-[400px] w-[200px]  h-[200px] object-cover absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[3rem] transition-all duration-500"
          src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64b7f94076df56f95d20243d_GAAF_DowntoEarth-min-p-2000.jpg"
          alt="Logo"
        />
      </div>
    </div>
    <div className='md:px-20 '> 
        <p className='text-[#B2B2B5]'>Gaaf Creaties</p>
        <p className='text-xl font-semibold mb-5'>Creating mood-boosting experiences</p>
        <div className='text-xs uppercase flex items-center '> 
      <span className='px-3  py-[2px] border border-gray-700 rounded-lg shrink-0 flex-wrap'>  Brand Story</span>
      <span className='px-3 ml-3 py-[2px] border border-gray-700 rounded-lg'> Merkidentiteit</span>
      <span className='px-3 ml-3 py-[2px] border border-gray-700 rounded-lg'> Webdesign</span>
        </div>
    </div>
   </div>
   <div className='md:w-1/2'>
   <div className="relative w-full md:h-[100vh] md:px-12 md:pt-20 py-5">
      {/* Wrapper with group class */}
      <div className="relative w-full md:h-full h-96 group overflow-hidden rounded-[3rem] md:hover:rounded-[8rem] hover:rounded-[5rem] transition-all duration-500">
        {/* First Image */}
        <img
          className="rounded-[3rem] w-full h-full object-cover transition-all duration-500  group-hover:scale-125"
          src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb716dc15a767d726cdea_DM_header-p-2000.jpg  "
          alt="Background"
        />
        {/* Second Image */}
        <img
          className="md:group-hover:rounded-[8rem] group-hover:rounded-[3rem] opacity-0 group-hover:opacity-100 md:w-[400px]  md:h-[400px] w-[200px]  h-[200px] object-cover absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[3rem] transition-all duration-500"
          src="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb59c356882b9497fea77_DM_Hand%20Holding%20Pin-min-p-2000.jpg"
          alt="Logo"
        />
      </div>
    </div>
    <div className='md:px-20 '> 
        <p className='text-[#B2B2B5]'>Don't Mind</p>
        <p className='text-xl font-semibold mb-5'>Campaigners for eventful brands</p>
        <div className='text-xs uppercase '> 
      <span className='px-3  py-[2px] border border-gray-700 rounded-lg'>  Brand Story</span>
      <span className='px-3 ml-3 py-[2px] border border-gray-700 rounded-lg'> Merkidentiteit</span>
      <span className='px-3 ml-3 py-[2px] border border-gray-700 rounded-lg'>Webdesign</span>
        </div>
    </div>
   </div>
    

      
    </div>
    <div className=' md:ml-24 md:mt-0 mt-10 mb-20 md:flex md:w-[40vw] justify-between items-center bg-white px-9   py-4 rounded-2xl'>
      <p>Ook aan de slag met jouw merk?</p>
      <button className='md:py-4 md:px-4 py-2 px-4 underline-offset-4 mt-4  rounded-2xl   hover:rounded-[3rem] transition-all ease-linear duration-200 hover:underline text-zinc-800 text-base font-semibold border border-1 border-gray-700 '>Bekijk projecten <i class="ri-arrow-right-line ml-5"></i></button>
    </div>


    </>
  );
};

export default MainSection;
    