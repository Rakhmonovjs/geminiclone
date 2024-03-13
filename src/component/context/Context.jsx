import { createContext, useState } from "react";
import runChat from "../config/gemini"

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentprompt, setrecentpropmt] = useState("")
    const [prev, setprev] = useState([])
    const [showresult, setshowresult] = useState(false)
    const [load, setload] = useState(false)
    const [resultdata, setresultdata] = useState("")

    const delayPara = (index,nextWord) =>{
        setTimeout(function () {
            setresultdata(prev => prev+nextWord)
    
        },75*index)
    }    

    const newChat = () => {
        setload(false)
        setshowresult(false)
    }

    // const response =  runChat(input)
    const onSent = async (prompt) => {

        setresultdata("")
        setload(true)
        setshowresult(true)
        let response;
        if (prompt !== undefined) {
            response = await runChat(prompt);
            setrecentpropmt(prompt)
        }

        else
        {
            setprev(prev=>[...prev,input])
            setrecentpropmt(input)
            response = await runChat(input)
        }

        let responArray = response.split('**');
        let newResponse="" ;
        for (let i = 0; i < responArray.length; i++) {
            if (i === 0 || i%2 !== 1) {
                newResponse +=responArray[i]
            } else {
                newResponse += "<b>" + responArray[i]+"</b>"
            }
            
        }
        let newrespon = newrespon.split("*").join("</br>")
        let newresponseArray = newrespon.split(" ");
            for (let i = 0; i<newresponseArray.length;i++)
            {
                const nextWord = newresponseArray[i];
                delayPara(i,nextWord+" ");
            }
        setload(false)
        setInput("")
    }
 
    onSent ("Sent is react js")

    const contextValue = {
        prev,
        setprev,
        onSent,
        setrecentpropmt,
        recentprompt,
        showresult,
        load,
        resultdata,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue} >
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;