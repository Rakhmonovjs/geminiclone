import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../../assets/assets'
import { Context } from '../context/Context'

const Main = () => {

    const {onSent,recentprompt,showresult,load, resultdata,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt='' />
        </div>
        <div className='main_container'>

                {!showresult
                ?<>
                    <div className='greet'>
                        <p><span>Hello, Dev</span></p>
                        <p>How can I help you today</p>
                    </div>
                    <div className='cards'>

                        <div className='card'>
                            <p>Suggest beatiful places to see on an upcoming road trip</p>
                            <img src={assets.compass_icon} alt='' />
                        </div>    

                        <div className='card'>
                            <p>Briefly summarize this concept: urban planing</p>
                            <img src={assets.bulb_icon} alt='' />
                        </div>

                        <div className='card'>
                            <p>Brainstorm team bonding activities for our work rereat</p>
                            <img src={assets.message_icon} alt='' />
                        </div>

                        <div className='card'>
                            <p>Improve the readability of the following code</p>
                            <img src={assets.code_icon} alt='' />
                        </div>
                    </div>
                </>
                :<div className='result'>
                    <div className='result_title'>
                        <img src={assets.user_icon} alt='' />
                        <p>{recentprompt}</p>
                    </div>
                    <div className='result_data'>
                        <img src={assets.gemini_icon} alt='' />
                        {load
                        ?<div className='loader'>
                            <hr/>
                            <hr/>
                            <hr/>
                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultdata}}></p>
                        }
                    </div>
                 </div>   
                }

            

            <div className="main_battom">
                <div className="search_box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a promt here' />
                    <div>
                        <img src={assets.gallery_icon} alt='' />
                        <img src={assets.mic_icon} alt='' />
                        {input ?<img onClick={()=>onSent()} src={assets.send_icon} alt='' />:null}
                    </div>
                </div>
                <div className='bootom_info'>
                    Gemini may display inaccurrate info, including about people, so double-check its responses Your privacy and Gemini Apps 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main