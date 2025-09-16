// components/RPGGame.tsx
'use client'

export default function RPGGame() {
  return (
    <iframe
      src="/rpgjs/index.html"
      style={{
        width: '100%',
        height: '100vh', // ocupa toda la altura del viewport
        border: 'none',
        display: 'block',
      }}
      title="RPGJS Game"
    />
  )
}
