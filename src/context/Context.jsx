import { createContext, useEffect, useState } from "react";
import runChat from "../config/gemini";


export const Context=createContext();

const ContextProvider=(props)=>{

    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompt] = useState('')
    const [previousPrompt, setPreviousPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState('')
    // setPreviousPrompt(prev=>[...prev,input])

    useEffect(() => {
    if (recentPrompt) {
      setPreviousPrompt(prev => [...prev, input]);
    }
  }, [recentPrompt]);

    const delaypara=(index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        },10*index)
    }

    const newChat=()=>{
        setShowResult(false)
        setResultData("")   
        setLoading(false)
        setRecentPrompt("")
    }

    const onsent=async(prompt)=>{
       setResultData("")
       setLoading(true)
       setShowResult(true)
      let response;
       if(prompt!==undefined
       ){
        response= await runChat(prompt)
       setRecentPrompt(prompt)
       
       }else{
        setPreviousPrompt(prev=>[...prev,input])
        setRecentPrompt(input)
        response= await runChat(input)
       }
       let responseArray=response.split('**')
       let newResponse;
       for(let i=0;i<responseArray.length;i++){
        if(i===0 || i%2!==1){
            newResponse+=responseArray[i]
        }else{
           newResponse+="<b>"+responseArray[i]+"</b>"
        }
       }
       let newResponse2=newResponse.split("*").join("</br>")
      let newResponseArray=newResponse2.split("");
      for(let i=0;i<newResponseArray.length;i++){
        const nextWord=newResponseArray[i];
        delaypara(i,nextWord+"")
      }
       setLoading(false)
    }
    

    const contextValue={
           previousPrompt,
           setPreviousPrompt,
           onsent,
           setRecentPrompt,
           recentPrompt,
           showResult,
           loading,
           resultData,
           input,
           setInput,
           newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider