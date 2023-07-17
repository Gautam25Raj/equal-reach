import { MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';

const Search = () => {
  return (
    <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 py-3 px-4">
      <SearchIcon className="h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search Supporters"
        className="flex-1 bg-transparent outline-none"
      />
    </div>
  );
};
export default Search;
