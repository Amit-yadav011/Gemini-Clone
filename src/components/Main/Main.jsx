import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const{onsent,recentPrompt,showResult,loading,resultData,setInput,input,newChat}=useContext(Context)

  return (
    <div className='w-full p-6'>
      <div onClick={()=>{
        newChat()
      }} className='flex justify-between cursor-pointer items-center text-[#585858]'>
        <p className='lg:text-2xl text-lg'>Gemini</p>
        <img className='rounded-full lg:h-11 h-7' src={assets.user_icon} alt="" />
      </div>
      <div className=' lg:ml-110 mt-20 lg:w-[46vw]'>
        {!showResult ? <><div className='flex flex-col select-none'>
          <p className='text lg:text-[55px] text-[30px] font-bold'><span>Hello, Dev</span></p>
          <p className='lg:text-[55px] text-[30px] text-[#c4c5c7] '>How can i help you today?</p>
        </div>
        <div className='cards flex mt-20 gap-4 overflow-x-auto w-[80vw]'>
          <div className='relative h-[20vh] lg:w-[12vw] rounded-xl bg-gray-100 p-3 text-lg text-[#585858] hover:bg-gray-200  cursor-pointer'> <p>Suggest beautiful places to explore in Uttrakhand</p>
           <img className='absolute bottom-2 right-2 h-8 bg-white rounded-full p-1' src={assets.compass_icon} alt="" />
          </div>
          <div className='relative h-[20vh] lg:w-[12vw] rounded-xl bg-gray-100 p-3 text-[#585858] text-lg  hover:bg-gray-200 cursor-pointer'> <p>Suggest me a Suv under 20 lakhs</p>
           <img className='absolute bottom-2 right-2 h-8 bg-white rounded-full p-1' src={assets.bulb_icon} alt="" />
          </div>
          <div className='relative h-[20vh] lg:w-[12vw] rounded-xl bg-gray-100 p-3 text-[#585858] text-lg hover:bg-gray-200 cursor-pointer'> <p>What to learn next after React js</p>
           <img className='absolute bottom-2 right-2 h-8 bg-white rounded-full p-1' src={assets.code_icon} alt="" />
          
          </div>
           <div className='relative h-[20vh] lg:w-[12vw] rounded-xl bg-gray-100 text-[#585858]  p-3 text-lg hover:bg-gray-200 cursor-pointer'> <p>Problem-solving escape rooms (physical or virtual)</p>
           <img className='absolute bottom-2 right-2 h-8 bg-white rounded-full p-1' src={assets.message_icon} alt="" />
          </div>
        </div></> : <div className='answer h-[65vh] overflow-auto'>
          <div className='flex gap-3 text-xl items-center overflow-auto '>
            <img className='h-10 rounded-full' src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className='flex mt-13 gap-1 text-lg lg:w-[42vw] overflow-auto'>
            <img className='h-10' src={assets.gemini_icon} alt="" />
            {loading ? <div className='loader h-20px w-full flex flex-col gap-3'>
             <hr />
             <hr />
             <hr />
            </div>: <p className='transition-transform' dangerouslySetInnerHTML={{__html:resultData}}></p>}
          </div>
          </div>}
        
        <div className='flex flex-col absolute bottom-6 gap-3'>
          <div className='flex lg:w-[42vw] w-[72vw] bg-gray-200 rounded-full px-5 py-2 text-xl'>
            <input value={input} onChange={(e)=>{
              setInput(e.target.value)
            }} className='w-[35vw] outline-none' type="text" placeholder='Enter a prompt here' />
            <div className='flex gap-3 h-10 ml-5 border-0 justify-center items-center'>
              <img className='h-6 cursor-pointer' src={assets.gallery_icon} alt="" /><img className='cursor-pointer h-6' src={assets.mic_icon} alt="" /><img className='cursor-pointer h-6' onClick={()=>{
                onsent()
                setInput('')
              }} src={assets.send_icon} alt="" />
            </div>
          </div>
          <div>
              <p className='text-sm flex justify-center lg:mr-19 lg:text-[14px] text-[6px] text-[#585858]'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
