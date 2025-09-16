// components/RPGGame.tsx
'use client'

import { useEffect } from 'react'

export default function RPGGame() {
  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        script.type = 'module'
        script.onload = () => resolve()
        script.onerror = () => reject()
        document.body.appendChild(script)
      })
    }

    const loadCSS = (href: string) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
    }

    // Carga los CSS y JS generados por el build de RPGJS
    loadCSS('/rpgjs/assets/vendor-2e71e604.css')
    loadScript('/rpgjs/assets/main-48e4a6fd.js')
      .then(() => loadScript('/rpgjs/assets/main-48e4a6fd.js'))
      .catch((err) => console.error('Error cargando RPGJS:', err))
  }, [])

  return (
    <div
      id="rpg"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        maxWidth: '816px',
        maxHeight: '624px',
        margin: '0 auto',
      }}
    />
  )
}
