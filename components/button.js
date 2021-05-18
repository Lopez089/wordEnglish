import { Button } from 'react-bootstrap'

const ButtonOnclick = ({ children, handleClick }) => {
  return (
    <Button
      onClick={
      handleClick ? (e) => handleClick(e) : null
}
    >{children}
    </Button>
  )
}

export default ButtonOnclick
