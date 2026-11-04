const API_URL = import.meta.env.VITE_API_URL ?? '/api'

export type HealthResponse = { status: string }

export async function fetchHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_URL}/health`)
  if (!response.ok) {
    throw new Error(`Health check failed: ${response.status}`)
  }
  return response.json()
}
