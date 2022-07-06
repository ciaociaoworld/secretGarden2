import { useState } from 'react'
import React from 'react'

import AddYourEssay from './AddYourEssay'

function EssayContent() {
    const [essays, setEssays] = useState([])
    const [newEssay, setNewEssay] = useState('')
   

    const addEssay = () => {
        if(newEssay) {
            let num = essays.length
            let newEssayObj = { id: num, content: newEssay }
            setEssays([...essays, newEssayObj])
            setNewEssay('')
        }
    }

    const deleteEssay = (id) => {
        let idTouch = essays.filter( essay => essay.id !== id)
        setEssays(idTouch)
    }

    

    const editEssay = (content) => {
        

    }



    // const newEditEssay = ()


    // function getEssay() {
    //     fetch('/essays')
    //     .then(res => res.json())
    //     .then(res => setEssays(res.essays))
    // }

    // function updateEssay() {
    //     if (essays !== null) {
    //         fetch('/essays', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json'},
    //             body: JSON.stringify({ essays })
    //         })
    //     }
    // }
    //   const handleSubmit = (event) => {
    //     event.preventDefault()
    // }

    return (
        <div className='container'>
            <div className='showAll'> 
                <h3>Your Secret Diary</h3>
                
                {essays.map((essay) => {
                   return <div className='essayContainer'>
                        <p className='essayContent' id={essay.id}>{essay.content} </p>
                    
                        <button onClick={() => deleteEssay(essay.id)}>Delete</button>
                    
                        <button onClick={() => editEssay(essay.content) }>Update</button>
                    </div>
                })}
                
            </div>

            <div className='EssayInput'>
                <h3>Add Your Secret</h3>
                    <AddYourEssay
                        addEssay={addEssay}
                        newEssay={newEssay}
                        setNewEssay={setNewEssay}
            
                    /> 
            </div>
        </div>
    )
}

export default EssayContent