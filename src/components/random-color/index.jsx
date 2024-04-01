

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  return (
    <div className="container" style={{
      width: '100vh',
      height: '100vh',
      background: color,
    }}>
      <button>Create HEX Colour</button>
      <button>Create RGB Colour</button>
      <button>Generate Colour</button>
    </div>
  )
}