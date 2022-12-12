/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'

const BackToTop = () => {
  const ref = useRef<SVGPathElement>(null)
  const [scrollValue, setScrollValue] = useState<number>(0)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (ref.current != null) {
      const progressPath = ref.current
      const pathLength = typeof progressPath?.getTotalLength !== 'undefined' ? progressPath?.getTotalLength() : 0
      progressPath.style.transition = 'none'
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength
      progressPath.style.strokeDashoffset = pathLength?.toString()
      progressPath.getBoundingClientRect()
      progressPath.style.transition = 'stroke-dashoffset 10ms linear'
    }
  }, [])

  useEffect(() => {
    if (ref.current != null) {
      const progressPath = ref.current
      const pathLength = typeof progressPath?.getTotalLength !== 'undefined' ? progressPath?.getTotalLength() : 0
      const win: Window = window

      const onScroll: EventListener = (_event: Event) => {
        const scroll = document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const progress = pathLength - (scroll * pathLength) / height
        progressPath.style.strokeDashoffset = progress.toString()
        setScrollValue(scroll)
      }
      win.addEventListener('scroll', onScroll)

      return () => window.removeEventListener('scroll', onScroll)
    }
    return () => null
  }, [])

  return (
    <div className={`progress-wrap ${scrollValue > 50 ? 'active-progress' : ''}`} onClick={scrollToTop}>
      <svg className='progress-circle svg-content' width='100%' height='100%' viewBox='-1 -1 102 102'>
        <path d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98' ref={ref} />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='progress-arrow'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75' />
      </svg>
    </div>
  )
}

export default BackToTop
