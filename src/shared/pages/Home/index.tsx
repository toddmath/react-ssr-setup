import React from 'react'
// import { useDispatch } from 'react-redux'
import Features from 'shared/components/Features'
// import { setLocale } from 'store/app/actions'
// import { Locale } from 'store/app/types'

const App: React.FC<any> = () => {
  // const dispatch = useDispatch()
  // const handleLocaleChange = useCallback(
  //   (e: React.FormEvent<HTMLButtonElement>) => {
  //     dispatch(setLocale(e.currentTarget.value as Locale))
  //   },
  //   [dispatch]
  // )

  return (
    <React.Fragment>
      <Features />
    </React.Fragment>
  )
}

export default App
