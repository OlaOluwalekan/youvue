'use client'

import { setSelectedViewPopupIsOpen } from '@/store/calendarSlice'
import { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const PopupDismissProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch()

  const handleDocumentClicked = (e: MouseEvent) => {
    let targetElement = e.target as HTMLElement // The particular element clicked
    // console.log(targetElement)

    // checks if the clicked element has a class of a-modal and closes all modal if id does not
    while (targetElement) {
      if (targetElement.classList.contains('a-modal')) {
        return
      }
      targetElement = targetElement.parentElement as HTMLElement // Move up the DOM tree
    }

    dispatch(setSelectedViewPopupIsOpen(false))
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClicked)

    return () => {
      document.removeEventListener('click', handleDocumentClicked)
    } // Cleanup function to remove event listener on unmounting component
  }, [])

  return <>{children}</>
}

export default PopupDismissProvider
