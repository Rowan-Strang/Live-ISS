import { useState, useEffect } from 'react'
import { getIss } from '../apiClient.ts'
import { Iss } from '../../models/iss.ts'

function OurApp() {
  const [satellite, setSatellite] = useState<Iss | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const data = await getIss('Link')
        setSatellite(data)
      } catch (err) {
        setError(String(err))
      }
    }, 1055)
    return () => clearInterval(intervalId)
  }, [])

  if (error) {
    return <p>Something went wrong: {error}</p>
  }

  if (!satellite) {
    return <>Loading...</>
  }

  return (
    <>
      <h2>This is the ISS</h2>
      <p>
        <b>Latitude</b>: {satellite.latitude}
      </p>
      <p>
        <b>Longitude</b>: {satellite.longitude}
      </p>
      <p>
        <b>Altitude</b>: {satellite.altitude.toFixed(3)}
      </p>
      <p>
        <b>Velocity</b>: {satellite.velocity.toFixed(3)}
      </p>
    </>
  )
}

export default OurApp
