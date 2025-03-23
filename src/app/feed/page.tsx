"use client"
import PostEditor from "@/components/posts/editor/PostEditor";
import TrendsSidebar from "@/components/TrendsSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FollowingFeed from "./FollowingFeed";
import ForYouFeed from "./ForYouFeed";
import { validateRequest } from "@/auth";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import ProfileSection from "@/components/profile/profile";
import { useState } from "react";
import { UserData } from "@/lib/types";
import { fetchQueriedUsers } from "@/actions/search";
import SearchBar from "@/components/search-bar/search-bar";

export default function Home() {

    const [searchInput, setSearchInput] = useState("");
    const [searchResults,setSearchResults] = useState<UserData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchSearchData = async (value:string) => {
        if (!value.trim()) { 
          setSearchResults([]); 
          return;  
        }
        try {
            setIsLoading(true)
            const findQueiredUser = await fetchQueriedUsers(value)
            setSearchResults(findQueiredUser);
        } catch (error) {
            console.log("Error fetching users: ", error)
        }finally{
            setIsLoading(false);
        }
      }
      const handleSearch = (value:string) => {
        setSearchInput(value)
        fetchSearchData(value)
    
      }

    return (

        <main className="flex w-full min-w-0">
            <div className="w-full min-w-0  bg-[#f2f4f5]">
                <div className="flex justify-between items-center bg-white border-b  border-gray-200 p-4 gap-4">
                    <SearchBar searchInput={searchInput} handleSearch={handleSearch} searchResults={searchResults} loading={isLoading} setSearchInput={setSearchInput} setSearchResults={setSearchResults}/>
                </div>
                <div className="mt-5 px-4">
                    <PostEditor />
                </div>
                
                <div className="space-y-5 mt-5 px-4">
                <Tabs defaultValue="for-you">
                    <TabsList>
                        <TabsTrigger value="for-you">For you</TabsTrigger>
                        <TabsTrigger value="following">Following</TabsTrigger>
                    </TabsList>
                    <TabsContent value="for-you">
                        <ForYouFeed />
                    </TabsContent>
                    <TabsContent value="following">
                        <FollowingFeed />
                     </TabsContent>
                 </Tabs>
                </div>
                
                
            </div>
            
            

        </main>
    );
}