import Button from '../components/button'

const FormAddWord = () => {
  return (
    <>
      <h2>Add Word</h2>
      <form>
        <input type='text' placeholder='word English' />
        <input type='text' placeholder='word Spanish' />
        <Button>Add </Button>
      </form>
    </>
  )
}

export default FormAddWord
