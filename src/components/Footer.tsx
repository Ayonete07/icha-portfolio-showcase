import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-10 text-sm text-muted-foreground sm:flex sm:justify-between">
        <div className="flex min-w-0 items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
          <span className="lowercase text-foreground">icha.ng</span>
          <span className="ml-3 truncate">© {new Date().getFullYear()} Icha Victory</span>
        </div>
        <div className="flex shrink-0 items-center gap-5">
          <Link to="/projects" className="hover:text-foreground">Work</Link>
          <Link to="/process" className="hover:text-foreground">Process</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
