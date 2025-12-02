import React, { useState, Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import LoadingPage from './components/LoadingPage'
import './index.css'

// Lazy load App component for better performance
const App = lazy(() => import('./App'))

const Root = () => {
  const [loading, setLoading] = useState(true)

  const handleLoadingComplete = () => {
    setLoading(false)
  }

  if (loading) {
    return <LoadingPage onComplete={handleLoadingComplete} />
  }

  return (
    <Suspense fallback={null}>
      <App />
    </Suspense>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)

