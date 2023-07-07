import { Home as HomeIcon, Search, Library } from "lucide-react";
import { Plus, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 px-6 pt-8">
          <div className="flex gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
          </div>

          <nav className="space-y-4 mb-8">
            <a
              href=""
              className="flex gap-3 items-center text-sm font-semibold text-zinc-300 hover:text-neutral-50"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex gap-3 items-center text-sm font-semibold text-zinc-300 hover:text-neutral-50"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex gap-3 items-center text-sm font-semibold text-zinc-300 hover:text-neutral-50"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <div className="space-y-3 border-b border-zinc-700 pb-5">
            <a className="flex gap-3 cursor-pointer text-zinc-300 hover:text-neutral-50 font-semibold">
              <div className="w-6 h-6 bg-zinc-300 rounded ">
                <Plus className="w-4 m-auto text-zinc-800" />
              </div>
              Criar playlist
            </a>
            <a className="flex gap-3 cursor-pointer text-zinc-300 hover:text-neutral-50 font-semibold">
              <div className="w-6 h-6 bg-zinc-300 rounded ">
                <Heart className="w-4 m-auto text-zinc-800 fill-current" />
              </div>
              Músicas curtidas
            </a>
          </div>

          <nav className="pt-4 flex flex-col gap-3">
            <a href="" className="text-zinc-300 hover:text-neutral-50 text-sm font-semibold">
              Playlist 1
            </a>
            <a href="" className="text-zinc-300 hover:text-neutral-50 text-sm font-semibold">
              Playlist 2
            </a>
            <a href="" className="text-zinc-300 hover:text-neutral-50 text-sm font-semibold">
              Playlist 3
            </a>
            <a href="" className="text-zinc-300 hover:text-neutral-50 text-sm font-semibold">
              Playlist 4
            </a>
            <a href="" className="text-zinc-300 hover:text-neutral-50 text-sm font-semibold">
              Playlist 5
            </a>
            <a href="" className="text-zinc-300 hover:text-neutral-50 text-sm font-semibold">
              Playlist 6
            </a>
            <a href="" className="text-zinc-300 hover:text-neutral-50 text-sm font-semibold">
              Playlist 7
            </a>
            <a href="" className="text-zinc-300 hover:text-neutral-50 text-sm font-semibold">
              Playlist 8
            </a>
            <a href="" className="text-zinc-300 hover:text-neutral-50 text-sm font-semibold">
              Playlist 9
            </a>
          </nav>
        </aside>
        <main className="flex-1 px-4 pt-8">main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
