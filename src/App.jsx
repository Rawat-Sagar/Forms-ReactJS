import React , {useState} from 'react';



const App = () =>{
    
    // stores in value={snames}
    const [snames, setname] = useState('')
    // change on Submit
    const [onSubmitName, setSubmitName] = useState('')

    const inputEvent = (event) =>{
        // console.log(event.target.value);
        setname(event.target.value);
    }

    const onSubmit = () =>{
        setSubmitName(snames);
    }
    return(
        <>
            <div>
                <h1>Hello {onSubmitName}</h1>
                <input  type='text' placeholder='Enter Your Name' onChange={inputEvent} value={snames}/>
                <button onClick = {onSubmit}>Click ME 👍</button>
            </div>
        </>
    );
}


export default App;