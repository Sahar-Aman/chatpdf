import { useEffect, useState } from 'react'
import { fetchHealth } from './api/health'

type Status = 'loading' | 'ok' | 'error'

const LABELS: Record<Status, string> = {
  loading: 'comprobando...',
  ok: 'conectado',
  error: 'sin conexión',
}

function App() {
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    fetchHealth()
      .then((data) => setStatus(data.status === 'ok' ? 'ok' : 'error'))
      .catch(() => setStatus('error'))
  }, [])

  return (
    <main>
      <h1>chatpdf</h1>
      <p>Backend: {LABELS[status]}</p>
    </main>
  )
}

export default App
