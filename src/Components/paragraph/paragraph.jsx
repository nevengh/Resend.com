import './paragraph.css'

const Paragraph = (props) => {
  return (
    <div className="Text">
      <p>
        {props.children}
      </p>
    </div>
  )
}

export default Paragraph