import { ThemeToggle } from '@/components/ui/mode-toggle'

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 flex h-16 items-center justify-between p-4">
      <ThemeToggle />
    </header>
  )
}
