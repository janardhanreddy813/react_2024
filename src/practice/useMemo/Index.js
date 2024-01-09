import React, { useMemo, useState } from 'react'

const Index = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const isEven = useMemo(() => {
    for (let index = 0; index < 2000000000; index++) {}
    return countOne % 2 === 0
  }, [countOne])
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setCountOne(countOne + 1)
          }}
        >
          {' '}
          One :{countOne}
        </button>
        {isEven ? 'Even' : 'Odd'}
      </div>
      <div>
        <button
          onClick={() => {
            setCountTwo(countTwo + 1)
          }}
        >
          One :{countTwo}
        </button>
      </div>
    </div>
  )
}

export default Index
