"use client"

import { fetchQueriedUsers } from '@/actions/search';
import UserAvatar from '@/components/UserAvatar';
import { UserData } from '@/lib/types';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Loading from '../loading';
import SearchBarSearchPage from '@/components/search-bar/search-bar-search-page';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Search = () => {
  const searchParams = useSearchParams();  // Access searchParams using useSearchParams
  const query = searchParams?.get('query') || '';  // Get the 'query' from searchParams
  const [results, setResults] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState("");
    const router = useRouter();
  const fetchUsers = async (value: string) => {
    if (value) {
      setLoading(true);
      try {
        const fetchedResults = await fetchQueriedUsers(value);
        setResults(fetchedResults);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]);
    }
  };

  const handleSearchPage = (value: string) => {
    if (value.trim()) {
        router.push(`/feed/search?query=${value}`)
    }
  };

  const handleSearch = (value: string) => {
    setSearchInput(value);
    fetchUsers(value);
  };

  useEffect(() => {
    if (query) {
      fetchUsers(query);  // Fetch users when the query is available
    }
  }, [query]);  // Re-run when query changes

  return (
    <div className='w-full px-4 pt-6'>
      {query.length === 0 ? (
        <div>
          <h2 className='text-zinc-900 text-4xl font-semibold'>
            Search Here
          </h2>
          <p className="text-zinc-500">Search here to find your next user</p>
          <div className="flex justify-between items-center bg-white   p-4 gap-4">
            <SearchBarSearchPage
              searchInput={searchInput}
              handleSearch={handleSearch}
              searchResults={results}
              loading={loading}
              setSearchInput={setSearchInput}
              setSearchResults={setResults}
              handleSearchPage={handleSearchPage}
            />
          </div>
        </div>
      ) : (
        <>
            <h2 className='text-zinc-900 text-4xl font-semibold'>
                Search Results for "{query}"
            </h2>
            <div className="py-6">
                {loading ? (
                <Loading />
                ) : results.length > 0 && query ? ( 
                results.map((item) => (
                    <Link 
                    href={`feed/users/${item.displayName}`} 
                    className="flex items-center px-4 gap-4 border-b border-zinc-200 py-4 hover:bg-zinc-100 duration-100 ease-linear" 
                    key={item.id}
                    >
                    <UserAvatar avatarUrl={item?.avatarUrl} size={40} />
                    <div className="grid">
                        <span className="font-semibold text-zinc-900">{item.displayName}</span>
                        <span className="text-zinc-400 text-sm w-full">{item.email}</span>
                    </div>
                    </Link>
                ))
                ) : (
                <div className='text-center w-full text-xl'>No results found</div>
                )}
            </div>
        </>

      )}
    </div>
  );
};

export default Search;
