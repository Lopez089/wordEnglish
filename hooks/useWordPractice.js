import { useEffect, useRef, useState } from 'react'
import { handleOnchage, handleCheck, haldleNext, handleshowTooltip, calculateProgress } from '../util/util'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { newArray } from '../util/util'

export const useWordPractice = () => {
  const [word, setWord] = useState([])
  const [totalNumberWord, setTotalNumberWord] = useState(0)
  const [progressBar, setProgressBar] = useState(0)
  const [newStateWord, setNewStateWord] = useState([])
  const [showWord, setShowWord] = useState(0)
  const [wordSpanish, setWordSpanish] = useState('')
  const [message, setMessage] = useState('')
  const [showTooltip, setshowTooltip] = useState(false)
  const [hasPushTooltip, setHasPushTooltip] = useState(false)
  const target = useRef(null)


  useEffect(() => {
    firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).get()
      .then(querySnapshot => {

        const AllWordGetDB = []

        querySnapshot.forEach((doc) => {
          const newState = {
            id: doc.id,
            data: doc.data()
          }
          AllWordGetDB.push(newState)

        })


        setTotalNumberWord(15)
        setWord(newArray(15, AllWordGetDB))
      }

      )
  }, [])

  useEffect(() => {
    setProgressBar(calculateProgress(totalNumberWord, 15 - word.length))
  }, [word])

  return {
    hasPushTooltip, setHasPushTooltip, totalNumberWord, progressBar, word, showWord, wordSpanish, message, target, showTooltip, handleOnchage, handleCheck, haldleNext, newStateWord, handleshowTooltip, setWordSpanish, setMessage, setNewStateWord, setShowWord, setWord, setshowTooltip
  }
}
