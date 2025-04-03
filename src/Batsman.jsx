import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
 
    const [sixes, setSixes] =useState(0)

    const [fours, setFour] = useState(0)

    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns)
    }

    const handleFour = () => {
        const updateRuns = runs + 4;
        const updateFour = fours + 1 ;
        setFour(updateFour)
        setRuns(updateRuns);

    }
    const handleSix = () => {
        const updateRuns = runs + 6;
        const updateSex = sixes + 1
        setSixes(updateSex)
        setRuns(updateRuns)
    }
    return (
        <div>
            <h3> Player the  Bangladesh </h3>
            <p> <small> Six: {sixes} </small></p>
            <p> Fours : {fours} </p>
            {
                runs >= 50 && <p> Great your Score is 50  </p>
            }
            {
                runs >= 100 && <p> Good your Score is 100</p>
            }
            <h1> Score: {runs} </h1>
            <button onClick={handleSingle} >singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}