import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../../assets/assets'
import { Context } from '../context/Context'

const Sidebar = () => {

    const [extended, SetExtended] = useState(false)
    const {onSent, prevPrompts, setrecentpropmt} = useContext(Context)
    
    const loadPromt = async (prompt) => {
        setrecentpropmt(prompt)
        await onSent(prompt)
    }

  return (
    <div className='sidebar'>
        <div className='top'>
            <img className='menu' onClick={()=>SetExtended(prev=>!prev)}  src={assets.menu_icon} alt="" />
            <div onClick={() => newChat()} className='new_chat'>
                <img src={assets.plus_icon} alt='' />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended
                ?   <div className='recent'>
                        <p className='recent_title'>Recent</p>
                        {prevPrompts.map((item,index)=>{
                            return (
                                <div onClick={()=>loadPromt(item)} className='recent_entry'>
                                    <img src={assets.message_icon} alt='' />
                                    <p>{item.slice(0,18)} ...</p>
                                </div>
                            )
                        })}
                    </div>
                : null    
            }           
        </div>

        
        <div className='bottom'>
            <div className='bottom_item recent_entry'>
                <img src={assets.question_icon} alt='' />
                {extended?<p>Help ...</p>:null}
            </div>

            <div className='bottom_item recent_entry'>
                <img src={assets.history_icon} alt='' />
                {extended?<p>Activity</p>:null}
            </div>

            <div className='bottom_item recent_entry'>
                <img src={assets.setting_icon} alt='' />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar