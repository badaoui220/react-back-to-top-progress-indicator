import React from 'react'
import ReactDOM from 'react-dom/client'
import { BackToTop } from 'react-back-to-top-progress-indicator'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div style={{ height: '3000px' }}>
      <BackToTop />
    </div>
  </React.StrictMode>,
)
