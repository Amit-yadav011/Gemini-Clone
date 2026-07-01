import React, { useContext, useState } from 'react'
import {assets} from'../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
     const{onsent,previousPrompt,setRecentPrompt,newChat}=useContext(Context)

     const handleRecentClick=async (prompt)=>{
        setRecentPrompt(prompt)
       await onsent(prompt)
     }

  return (
    <div className='sidebar bg-gray-200 p-3 w-fit flex flex-col justify-between items-center transition-all'>
      <div id="top">
        <img onClick={()=>{
            setExtended(prev=>!prev)
        }}
         className='h-6 mb-10 cursor-pointer ml-3' src={assets.menu_icon} alt="" />
        <div onClick={()=>{
          newChat()
        }} className='flex cursor-pointer gap-3 text-sm w-fit bg-gray-300 px-5 py-3 items-center rounded-full text-'>
            <img className='h-7 opacity-65' src={assets.plus_icon} alt="" />
           {extended? <p className='opacity-35 font-light'>New Chat</p>:null}
        </div>
        {extended?<div className='mt-10 '>
            <p className='text-lg'>Recent</p>
            {previousPrompt.map((item,index)=>{
              return <div onClick={()=>{
                handleRecentClick(item)
              }} key={index} className='flex gap-2 cursor-pointer text-sm w-fit py-5 items-center'><img className='h-5' src={assets.message_icon} alt="" />  
            <p>{item.slice(0,18)}...</p></div>
            })}
            
           
        </div>:null}
      </div>
      <div id="bottom" className='flex flex-col'>
        <div className='flex items-center gap-3 mb-4 cursor-pointer w-fit'>
            <img className='h-5' src={assets.question_icon} alt="" />
           {extended? <p>
                Help
            </p>:null}
        </div>
        <div className='flex items-center gap-3 mb-4 cursor-pointer w-fit'>
            <img className='h-5' src={assets.history_icon} alt="" />
          {extended? <p>
                Activity
            </p>:null}
        </div>
        <div className='flex items-center gap-3 mb-3 cursor-pointer w-fit'>
            <img className='h-5' src={assets.setting_icon} alt="" />
          {extended?  <p >
                Setting
            </p>:null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
