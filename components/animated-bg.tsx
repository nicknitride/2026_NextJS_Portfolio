'use client'

export default function AnimatedBackground() {
  return (
    <>
      {/* Main gradient background */}
      <div className="gradient-bg" />
      
      {/* Animated gradient blobs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="gradient-blob gradient-blob-1" />
        <div className="gradient-blob gradient-blob-2" />
        <div className="gradient-blob gradient-blob-3" />
      </div>
    </>
  )
}
