"use client";

import React, { useState, FC, ReactNode } from "react";


interface TabItem {
    value: string;
    label: string;
    content: ReactNode;
}

interface TabsProps {
    defaultValue: string;
    items: TabItem[];
}

const Tabs: FC<TabsProps> = ({ defaultValue, items }) => {
    const [activeTab, setActiveTab] = useState<string>(defaultValue);

    return (
        <div>
            {/* Tab triggers */}
            <div className="flex space-x-2">
                {items.map((item) => (
                    <button
                        key={item.value}
                        onClick={() => setActiveTab(item.value)}
                        className={`px-4 py-2 rounded-md transition-colors ${activeTab === item.value
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-black"
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            {/* Active tab content */}
            <div className="mt-4">
                {items.map(
                    (item) =>
                        activeTab === item.value && <div key={item.value}>{item.content}</div>
                )}
            </div>
        </div>
    );
};

// ===== Post Editor Component =====

const PostEditor: FC = () => {
    const [postContent, setPostContent] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("New post:", postContent);
        setPostContent("");
    };

    return (
        <div className="p-4 bg-white shadow rounded-md">
            <form onSubmit={handleSubmit}>
                <textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full border border-gray-300 rounded-md p-2 resize-none"
                    rows={3}
                />
                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Post
                </button>
            </form>
        </div>
    );
};

// ===== For You Feed Component =====

interface Post {
    id: number;
    username: string;
    content: string;
    time: string;
}

const ForYouFeed: FC = () => {
    const dummyPosts: Post[] = [
        {
            id: 1,
            username: "alice",
            content: "Just had an amazing day at the park!",
            time: "2h ago",
        },
        {
            id: 2,
            username: "bob",
            content: "Loving the new React features.",
            time: "4h ago",
        },
        {
            id: 3,
            username: "carol",
            content: "Can't wait for the weekend!",
            time: "6h ago",
        },
    ];

    return (
        <div className="space-y-4">
            {dummyPosts.map((post) => (
                <div key={post.id} className="p-4 bg-white shadow rounded-md">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">{post.username}</span>
                        <span className="text-sm text-gray-500">{post.time}</span>
                    </div>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

// ===== Following Feed Component =====

const FollowingFeed: FC = () => {
    const followingPosts: Post[] = [
        {
            id: 1,
            username: "dave",
            content: "Check out my new blog post on web development!",
            time: "1h ago",
        },
        {
            id: 2,
            username: "eve",
            content: "Anyone up for a coding challenge?",
            time: "3h ago",
        },
    ];

    return (
        <div className="space-y-4">
            {followingPosts.map((post) => (
                <div key={post.id} className="p-4 bg-white shadow rounded-md">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">{post.username}</span>
                        <span className="text-sm text-gray-500">{post.time}</span>
                    </div>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

// ===== Trends Sidebar Component =====

interface Trend {
    id: number;
    topic: string;
    tweets: string;
}

const TrendsSidebar: FC = () => {
    const trends: Trend[] = [
        { id: 1, topic: "#React", tweets: "120K Tweets" },
        { id: 2, topic: "#NextJS", tweets: "80K Tweets" },
        { id: 3, topic: "#JavaScript", tweets: "150K Tweets" },
    ];

    return (
        <aside className="w-80 p-4 bg-white shadow rounded-md space-y-4">
            <h2 className="text-xl font-bold">Trends for you</h2>
            <ul className="space-y-2">
                {trends.map((trend) => (
                    <li
                        key={trend.id}
                        className="p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                    >
                        <div className="flex justify-between">
                            <span className="font-medium">{trend.topic}</span>
                            <span className="text-sm text-gray-500">{trend.tweets}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

// ===== Main App Component =====

const App: FC = () => {
    // Define tab items for the feed tabs
    const tabItems: TabItem[] = [
        { value: "for-you", label: "For you", content: <ForYouFeed /> },
        { value: "following", label: "Following", content: <FollowingFeed /> },
    ];

    return (
        <main className="flex w-full min-w-0 gap-5 p-4 bg-gray-100">
            {/* Main content column */}
            <div className="w-full min-w-0 space-y-5">
                <PostEditor />
                <Tabs defaultValue="for-you" items={tabItems} />
            </div>
            {/* Sidebar */}
            <TrendsSidebar />
        </main>
    );
};

export default App;
