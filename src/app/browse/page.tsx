import { agents, categories } from "@/data/agents";
import BrowseClient from "./BrowseClient";

const sortOptions = ["Popular", "Price low", "Price high", "Rating"];

export default function BrowsePage() {
  return (
    <div className="container-main flex gap-8 py-8">
      <aside className="hidden w-[220px] shrink-0 sm:block">
        <BrowseClient
          agents={agents}
          categories={categories}
          sortOptions={sortOptions}
        />
      </aside>
      <div className="min-w-0 flex-1 sm:hidden">
        <BrowseClient
          agents={agents}
          categories={categories}
          sortOptions={sortOptions}
          mobile
        />
      </div>
    </div>
  );
}
