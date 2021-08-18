import { useEffect, useRef, useState } from 'react'
import { handleOnchage, handleCheck, haldleNext, handleshowTooltip, calculateProgress } from '../util/util'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const useWordPractice = () => {
  const [word, setWord] = useState([])
  const [totalNumberWord, setTotalNumberWord] = useState(0)
  const [progressBar, setProgressBar] = useState(0)
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
          setTotalNumberWord(querySnapshot.size)
        })
      )
  }, [])

  useEffect(() => {
    setProgressBar(calculateProgress(totalNumberWord, word))
  }, [word])

  return {
    progressBar, word, showWord, wordSpanish, message, target, showTooltip, handleOnchage, handleCheck, haldleNext, newStateWord, handleshowTooltip, setWordSpanish, setMessage, setNewStateWord, setShowWord, setWord, setshowTooltip
  }
}
