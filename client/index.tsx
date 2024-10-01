import { createRoot } from 'react-dom/client'

import OurApp from './components/App.tsx'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(<OurApp />)
})
