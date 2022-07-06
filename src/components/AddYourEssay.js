// import { useState } from 'react'

function AddYourEssay ( { addEssay, newEssay, setNewEssay } ) {
    // const [yourEssay, setYourEssay] = useState('')
    
    // const handleContentChange = (event) => {
    //     setYourEssay(event.targe.value)
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    //     addEssay({yourEssay})
    //     setYourEssay('')
    // }

    return (
      <section className='submitForm'>
        <form onSubmit={handleSubmit}>
            <textarea value={newEssay} placeholder="Type Your Content Here" cols="70" rows="5" onChange={(event) => setNewEssay(event.target.value)}></textarea>

            <button onClick={addEssay}>
                Submit
            </button>
        </form>
      </section>
    )
}

export default AddYourEssay