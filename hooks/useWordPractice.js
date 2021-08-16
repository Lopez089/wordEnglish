import { useEffect, useRef, useState } from 'react'
import { handleOnchage, handleCheck } from '../util/util'
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

  const haldleNext = () => {
    if (newStateWord !== []) {
      setWord(newStateWord)
    }

    setNewStateWord([])
    setMessage('')
    setWordSpanish('')
  }

  const handleshowTooltip = () => {
    setshowTooltip(!showTooltip)

    setTimeout(() => {
      setshowTooltip(showTooltip)
    }, 3000)
  }

  return {
    word, showWord, wordSpanish, message, target, showTooltip, handleOnchage, handleCheck, haldleNext, handleshowTooltip, setWordSpanish, setMessage, setNewStateWord, setShowWord
  }
}
