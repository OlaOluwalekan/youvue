'use client'

import { views } from '@/data/views'
import { RootState } from '@/store'
import {
  setSelectedView,
  setSelectedViewPopupIsOpen,
} from '@/store/calendarSlice'
import clsx from 'clsx'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'

const ViewList = () => {
  const { selectedView, selectedViewPopupIsOpen } = useSelector(
    (store: RootState) => store.calendar
  )
  const dispatch = useDispatch()

  return (
    <div className='relative'>
      <button
        className='a-modal capitalize flex gap-4 items-center px-4 py-2'
        onClick={() =>
          dispatch(setSelectedViewPopupIsOpen(!selectedViewPopupIsOpen))
        }
      >
        {selectedView}{' '}
        <span className='pointer-events-none'>
          {selectedViewPopupIsOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      {selectedViewPopupIsOpen && (
        <div className='flex flex-col items-start w-[250px] rounded absolute right-3 shadow-lg bg-base-300 overflow-hidden'>
          {views.map((view, i) => {
            return (
              <button
                key={view}
                className={clsx(
                  'leading-10 px-3 hover:bg-base-100 w-full text-start capitalize',
                  i !== 0 && i !== views.length - 1
                    ? 'border-t-[1.5px] border-t-base-100 border-b-[1.5px] border-b-black'
                    : i === 0
                    ? 'border-b-[1.5px] border-b-black'
                    : 'border-t-[1.5px] border-t-base-100'
                )}
                onClick={() => {
                  dispatch(setSelectedView(view))
                  dispatch(setSelectedViewPopupIsOpen(false))
                }}
              >
                {view}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ViewList
