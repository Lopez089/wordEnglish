import { Button } from 'react-bootstrap'

const ButtonOnclick = ({ children, handleClick, disabled }) => {
  return (
    <Button
      {...disabled || null}
      onClick={
        handleClick ? (e) => handleClick(e) : null
      }
    >{children}
    </Button>
  )
}

export default ButtonOnclick
