"use client"
import { UserData } from '@/lib/types';
import { Search } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UserAvatar from '../UserAvatar';
import Loading from '@/app/loading';
import Link from 'next/link';

type Props = {
    searchInput: string;
    handleSearch: (value: string) => void;
    searchResults: UserData[];
    setSearchInput: (value: string) => void;
    setSearchResults: (value: UserData[]) => void;
    loading:boolean;
    handleSearchPage: (value:string)=> void
};

const SearchBar = ({ searchInput, handleSearch, searchResults, loading,setSearchInput,setSearchResults,handleSearchPage}: Props) => {
    const searchContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
            setSearchInput("");
            setSearchResults([]);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
  return (
    <div className="relative w-full">
      <Search className="w-5 h-5 text-zinc-400 dark:text-zinc-700 absolute top-1/2 transform -translate-y-1/2 left-2" />
      
      <input
        placeholder="Search for friends..."
        className="rounded-xl pl-9 outline-none dark:text-zinc-300 border border-gray-200 py-2 w-full"
        value={searchInput}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearchPage(searchInput)
          }
        }}
      />
    {loading ? (
            <AnimatePresence>
            {searchInput && searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-12 w-full left-0 bg-white rounded-xl border border-gray-200 px-4 py-6 z-10 shadow-md flex flex-col gap-4"
              >
                <Loading/>
            </motion.div>
            )}
        </AnimatePresence>
        
    ) : (
    <AnimatePresence>
        {searchInput && searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-12 w-full left-0 bg-white rounded-xl border border-gray-200 z-10 shadow-md flex flex-col "
            ref={searchContainerRef}
          >
            {searchResults.map((item) => (
              <Link href={`feed/users/${item.displayName}`} className="flex items-center px-4  gap-4 border-b border-zinc-200 py-4 hover:bg-zinc-100 duration-100 ease-linear" key={item.id} >
                        <UserAvatar avatarUrl={item?.avatarUrl} size={40} className="" />
                    <div className="grid">
                        <span className="font-semibold text-zinc-900">{item.displayName}</span>
                        <span className="text-zinc-400 text-sm w-full">{item.email}</span>
                    </div>
                </Link>
            ))}
            <Link href={`/feed/search?query=${searchInput}`} className="px-4 py-1 hover:bg-zinc-100 duration-100 ease-linear">
                <span className='text-sm text-zinc-500'>See more results for "{searchInput}"</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    )}
      
    </div>
  );
};

export default SearchBar;
