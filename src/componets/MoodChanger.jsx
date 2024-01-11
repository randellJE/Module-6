import { useState } from "react";

function MoodChanger() {
    const [mood, setMood] = useState('Happy')

    console.log('MoodChanger.jsx Line 6', mood)

    const handleWinLotto = () => {
        console.log('Above', mood)
        setMood('Ecstatic')
        console.log('Below', mood)
    }

    const handleRunningLate = () => {
        let newMood = 'Stressed';
        if (mood === 'Stressed') newMood = 'Really stressed'
        else if (mood === 'Really stressed') newMood = 'Giving up'

        setMood(newMood)
    }

    return (
        <div className="MoodChanger componentBox">
            Current Mood: {mood}

            {/* Using arrow functions */}
            <button onClick={()  => setMood('Tired')}>
                Stayed Up Late
            </button>

            <button onClick={() => setMood('Hungry')}>
                Skipped Lunch
            </button>
            
            <button onClick={() => setMood('Sick')}>
                Licked The Floor
            </button>
            
            <button onClick={() => setMood('Healthy')}>
                Didn't Lick The Floor
            </button>
            
            <button onClick={() => setMood('Happy')}>
                Had a Good Day
            </button>
            
            {/* Using custom event handler functions */}
            <button onClick={handleWinLotto}>Won the Lotto</button>
            
            <button onClick={handleRunningLate}>Running Late</button>
        </div>
    )
}

export default MoodChanger;