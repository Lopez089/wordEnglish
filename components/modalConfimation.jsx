import { modalConfimation } from '../constants/index'

export const ModalConfimation = ({ actionYes, actionNo, type }) => {
  const textHeader = {
    edit: modalConfimation.edit.header,
    delete: modalConfimation.delete.header
  }

  return (
    <div>
      <h2>{textHeader[type]}</h2>
      <div>
        <button onClick={actionYes}>{modalConfimation.button.yes}</button>
        <button onClick={actionNo}>{modalConfimation.button.no}</button>
      </div>
    </div>
  )
}
