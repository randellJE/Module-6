import { useState } from "react";

function Bomb() {
    throw new Error('KABOOM')
}

function ExplodingBomb() {
    const [exploded, setExoloded] = useState(false)

    return (
        <div className="ExplodedBomb">
            <button onClick={() => setExoloded(!exploded)}>
                Danger: Click to explode bomb!
            </button>
            {exploded ? <Bomb /> : null}
        </div>
    )
}

export default ExplodingBomb