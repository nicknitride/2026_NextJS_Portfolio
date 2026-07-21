import { portfolioContent } from '@/lib/portfolio-content'

type Terminal = typeof portfolioContent.hero.terminal

const toneClasses = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  accent: 'text-accent',
  success: 'text-[var(--signal)]',
} as const

export default function DecorativeTerminal({ terminal }: { terminal: Terminal }) {
  return (
    <aside aria-hidden="true" className="overflow-hidden rounded-xl border border-border bg-card/95 shadow-2xl shadow-black/20">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/70 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-400/80" />
        <span className="size-2.5 rounded-full bg-amber-300/80" />
        <span className="size-2.5 rounded-full bg-[var(--signal)]/80" />
        <span className="ml-2 font-mono text-[10px] text-muted-foreground">{terminal.windowTitle}</span>
      </div>
      <div className="space-y-4 p-4 font-mono text-xs leading-relaxed sm:p-5">
        {terminal.entries.map((entry) => (
          <div key={entry.command}>
            <p className="text-foreground">
              <span className="mr-2 text-accent">{terminal.prompt}</span>
              {entry.commandTokens.map((token, tokenIndex) => (
                <span key={`${token.text}-${tokenIndex}`} className={toneClasses[token.tone]}>{token.text}</span>
              ))}
            </p>
            <div className="pl-4 text-muted-foreground">
              {entry.output.map((line, lineIndex) => (
                <p key={`${entry.command}-${lineIndex}`}>
                  {line.map((token, tokenIndex) => (
                    <span key={`${token.text}-${tokenIndex}`} className={toneClasses[token.tone]}>{token.text}</span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
