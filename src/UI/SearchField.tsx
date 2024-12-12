import React from 'react'
interface Props{
    searchQuery:string;
    setSearchQuery:(e:string) => void;
    handleSearch:()=>void;
}
const SearchField = ({searchQuery,setSearchQuery,handleSearch}:Props) => {
  return (
    <div>
      <div className=" border xm-5 border-gray-300 flex justify-between items-center w-[50%] px-4 py-2 rounded-lg mb-5">
        <input
          type="text"
          className="focus:outline-none"
          placeholder="Enter Query Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSearch}
          className="bg-red-500 text-white px-6 py-2 rounded-lg ml-4"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchField
