import { useEffect, useState } from 'react';

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length)
  }

  function handlCreateRandomHexColor() {
    const hex = [1,2,3,4,5,6,7,8,9,0, 'A','B','C','D','E','F'];
    let hexColor ='#';

    for(let i=0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor);
  }

  function handlCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if(typeOfColor === 'rgb') {
      handlCreateRandomRgbColor();
    } else {
      handlCreateRandomHexColor();
    } 
  }, [typeOfColor]);

  return (
    <div className="container" style={{
      width: '100vh',
      height: '100vh',
      background: color,
    }}>
      <button onClick={() => setTypeOfColor('hex')}>Create HEX Colour</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Colour</button>
      <button onClick={typeOfColor === 'hex' 
      ? handlCreateRandomHexColor 
      : handlCreateRandomRgbColor }>
        Generate Colour
      </button>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '60px',
        marginTop: '50px',
      }}>
        <h3>{typeOfColor === 'rgb' ? 'RGB Colour' : 'Hex Colour'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}