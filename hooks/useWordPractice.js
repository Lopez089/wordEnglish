import { useEffect, useRef, useState } from 'react'
import { handleOnchage, handleCheck, haldleNext, handleshowTooltip } from '../util/util'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const useWordPractice = () => {
  const [word, setWord] = useState([])
  const [newStateWord, setNewStateWord] = useState([])
  const [showWord, setShowWord] = useState(0)
  const [wordSpanish, setWordSpanish] = useState('')
  const [message, setMessage] = useState('')
  const [showTooltip, setshowTooltip] = useState(false)
  const target = useRef(null)
  useEffect(() => {
    firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).get()
      .then(querySnapshot =>

        querySnapshot.forEach((doc) => {
          const newState = {
            id: doc.id,
            data: doc.data()
          }

          setWord((preState) => preState.concat(newState))
        })
      )
  }, [])

  return {
    word, showWord, wordSpanish, message, target, showTooltip, handleOnchage, handleCheck, haldleNext, newStateWord, handleshowTooltip, setWordSpanish, setMessage, setNewStateWord, setShowWord, setWord, setshowTooltip
  }
}
