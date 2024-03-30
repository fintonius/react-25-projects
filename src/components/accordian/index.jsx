// single selection accordian
// multiple selection accordian

export default function Accordian() {

  const [selected, setSelected] = useState(null);

  return (
    <div className="wrapper">
      <div className="accordian">
        {/* checks to make sure data is being received */}
        {data && data.length > 0 ? 
        : <div>No data found</div> }
      </div>
    </div>
  )
}