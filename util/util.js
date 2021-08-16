import firebase from 'firebase/app'
import 'firebase/firestore'

export const handleOnchage = (e, setWordSpanish) => {
  setWordSpanish(e.target.value)
}

export const handleCheck = async (wordSpanish, word, showWord, setMessage, setNewStateWord, setShowWord) => {
  if (wordSpanish === word[showWord].data.spanish) {
    setMessage('correcto')
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

    console.log(countNow)
  } else {
    setMessage(`incorrecto la palabra correcta es  ${word[showWord].data.spanish}`)
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
