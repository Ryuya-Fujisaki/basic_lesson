import React, { useState, useEffect } from 'react'

const CleanUp: React.FC = () => {
    const [currentNum, setCurrentNum] = useState(0);

    return <div>{currentNum}</div>
}

export default CleanUp
