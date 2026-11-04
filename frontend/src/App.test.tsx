import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App'

describe('App', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('shows the backend as connected when /health responds ok', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ status: 'ok' }), { status: 200 }),
    )

    render(<App />)

    expect(await screen.findByText('Backend: conectado')).toBeInTheDocument()
  })

  it('shows the backend as disconnected when the request fails', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('network down'))

    render(<App />)

    expect(await screen.findByText('Backend: sin conexión')).toBeInTheDocument()
  })
})
