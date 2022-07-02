import firebase from 'firebase/app'
import 'firebase/firestore'

export const calculateProgress = (wordLength, totalNumberWord) => {
  return ((100 * totalNumberWord) / wordLength)

  // const woldMissing = (totalNumberWord - wordLength)
  // const calculate = (woldMissing / totalNumberWord) * 100
  // return calculate
}

export const wordNextEnd = (word) => {
  const Word = [...word]
  const wordFail = Word.splice(0, 1)
  // setNewStateWord(Word.concat(wordFail))
  return (Word.concat(wordFail))
}

export const handleOnchage = (e, setWordSpanish) => {
  setWordSpanish(e.target.value)
}

export const handleCheck = async (wordSpanish, word, showWord, setMessage, setNewStateWord, setShowWord, setWord, newStateWord) => {
  if (wordSpanish === word[showWord].data.spanish) {
    const message = {
      type: 'success',
      message: '✔️ Palabra correcta',
      word: word[showWord].data.spanish
    }

    setMessage(message)
    const Word = [...word]
    const wordSuccess = Word.splice(0, 1)

    setNewStateWord(Word)
    let countNow
    await firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).doc(wordSuccess[0].id).get()
      .then(querySnapshot => {
        countNow = querySnapshot.data().count
      }

      )
    if (countNow >= 10) {
      firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).doc(wordSuccess[0].id).delete()
        .then((data) => console.log('eliminado bien'))
    } else {
      firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).doc(wordSuccess[0].id).set(
        { count: countNow + 1 }, { merge: true }
      )
    }

    setShowWord(0)
  } else {
    const message = {
      type: 'danger',
      message: '❌ icorecto la palacra corecta es',
      word: word[showWord].data.spanish
    }

    setMessage(message)
    const Word = [...word]
    const wordFail = Word.splice(0, 1)
    // console.log({ wordFail })
    // console.log({ Word })

    firebase.firestore().collection(process.env.NEXT_PUBLIC_COLLECTION).doc(wordFail[0].id).set(
      { count: 0 }, { merge: true }
    )

    setNewStateWord(Word.concat(wordFail))
  }
}

export const haldleNext = (setHasPushTooltip, word, newStateWord, setWord, setNewStateWord, setMessage, setWordSpanish, nextWordUser) => {
  if (newStateWord.length !== 0) {
    console.log({ word })
    setWord(newStateWord)
  } else {
    if (word.length === 1) {
      setWordSpanish('')
      setWord([])
      return
    }
  }
  if (newStateWord.length === 0) setWord(wordNextEnd(word))

  setHasPushTooltip(false)
  setNewStateWord([])
  setMessage('')
  setWordSpanish('')
}

export const handleshowTooltip = (setshowTooltip, setHasPushTooltip) => {
  setshowTooltip(true)
  setHasPushTooltip(true)

  setTimeout(() => {
    setshowTooltip(false)
  }, 3000)
}

const randomNumber = (min, max) => {
  return Math.floor((Math.random() * (max - min + 1)) + min)
}

export const newArray = (userSelect, array) => {
  const inicialArray = array

  // devolver todo el array si hay menos elemento de los que el usuario pide
  if (inicialArray.length <= userSelect) { return inicialArray }

  // el array que retornar
  const newArray = []

  // for de los elemento y extraemos random
  for (let b = 0; (b < userSelect); b++) {
    // tener un numero random desde 1 a el numero que tien el array inicial

    const numberRandom = randomNumber(0, inicialArray.length - 1)

    // push elemento select to newarray
    newArray.push(inicialArray[numberRandom])

    // extraer elemento
    const elemetExtract = inicialArray.splice(numberRandom, 1)
  }

  return newArray
}
