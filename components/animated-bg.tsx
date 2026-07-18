'use client'

export default function AnimatedBackground() {
  return (
    <>
      <div className="gradient-bg" />
      <div className="ambient-lines" />
      <div className="ambient-noise" />
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="gradient-blob gradient-blob-1" />
        <div className="gradient-blob gradient-blob-2" />
        <div className="gradient-blob gradient-blob-3 signal-orbit" />
      </div>
    </>
  )
}
