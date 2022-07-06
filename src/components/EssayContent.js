import { useState } from 'react'
import React from 'react'
import Axios from 'axios'

import AddYourEssay from './AddYourEssay'

function EssayContent() {
    const [essays, setEssays] = useState([])
    const [newEssay, setNewEssay] = useState('')
   

    const addEssay = () => {
        if (newEssay) {
            let num = essays.length
            let newEssayObj = { id: num, content: newEssay }
            setEssays([...essays, newEssayObj])
            setNewEssay('')
            Axios.post('http://localhost:3001', newEssayObj).then((res) => {
                res.data
            })
        }
    }

    const deleteEssay = (id) => {
        let idTouch = essays.filter(essay => essay.id !== id)
        setEssays(idTouch)
        Axios.delete('http://localhost:3001', { id })
    }



    const editEssay = (index) => {
        essays[index].isEdit = false
        Axios.put('http://localhost:3001', essays[index]) 
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

                {essays.map((essay, index) => {
                    return <div className='essayContainer'>
                        {
                            essay.isEdit
                                ? <input value={essay.content} onInput={({ target }) => { essay.content=target.value }} />
                                : <p className='essayContent' id={essay.id}>{essay.content} </p>
                        }
                        <button onClick={() => deleteEssay(essay.id)}>Delete</button>

                        {!essay.isEdit
                            ? <button onClick={essay.isEdit=true}>Edit</button>
                            : <button onClick={() => editEssay(index)}>Save</button>
                        }
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