import { useState, useEffect } from 'react'
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
            Axios.post('/essays', [...essays, newEssayObj])
        }
    }

    const getEssays = () => {
        Axios.get('/essays')
            .then((res) => {
                setEssays(res.data.essays)
            })
    }

    useEffect(() => {
        setEssays([])
        getEssays()
    }, [])

    const deleteEssay = (id) => {
        let idTouch = essays.filter(essay => essay.id !== id)
        setEssays(idTouch)
        Axios.delete('/essays', { id })
    }



    const editEssay = (index) => {
        const list = [...essays]
        list[index].isEdit = false
        setEssays(list)
        Axios.put('/essays', essays[index])
    }

    return (
        <div className='container'>
            <div className='showAll'>
                <h3>Your Secret Diary</h3>

                {essays && essays.map((essay, index) => {
                    return <div className='essayContainer' key={index}>
                        {
                            essay.isEdit
                                ? <textarea cols="30" rows="5" value={essay.content} onInput={({ target }) => {
                                    const list = [...essays]
                                    list[index].content = target.value
                                    setEssays(list)
                                }} />
                                : <p className='essayContent' id={essay.id}>{essay.content} </p>
                        }
                        <button onClick={() => deleteEssay(essay.id)}>Delete</button>

                        {!essay.isEdit
                            ? <button onClick={() => {
                                const list = [...essays]
                                list[index].isEdit = true
                                setEssays(list)
                            }}>Edit</button>
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