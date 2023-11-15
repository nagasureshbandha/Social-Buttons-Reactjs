const Button = props => {
  const {className, buttonText} = props
  return <button className={`button ${className}`}> {buttonText}</button>
}

const element = (
  <div className='social-buttons-container'>
    <div className='content-container'>
      <h1 className='heading'>Social Buttons</h1>

      <div className='buttons-container'>
        <Button buttonText='Like' className='Like-button' />
        <Button buttonText='Comment' className='Comment-button' />
        <Button buttonText='Share' className='Share-button' />
      </div>
    </div>
  </div>
)
ReactDOM.render(<element />, document.getElementById('root'))
