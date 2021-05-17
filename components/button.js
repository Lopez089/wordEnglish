const Button = ({ children, handleClick }) => {
  return (
    <button
      onClick={
      handleClick ? (e) => handleClick(e) : null
}
    >{children}
    </button>
  )
}

export default Button
