import { Music, Star, Guitar, Headphones, Drumstick, Bot, Piano, Disc3, AudioLines, Music2, Home, Bell, Mail, Bookmark } from "lucide-react";
import { Drum, Wind, Keyboard, Speaker } from "lucide-react";
export const preferences = [
    {
        title: "Pop",
        icon: <Star />, 
    },
    {
        title: "Rock",
        icon: <Guitar />, 
    },
    {
        title: "Jazz",
        icon: <Music2 />, 
    },
    {
        title: "Classical",
        icon: <Piano />, // Treble clef for classical sheet music
    },
    {
        title: "Hip-Hop",
        icon: <Headphones />, // Headphones for modern hip-hop culture
    },
    {
        title: "Electronic",
        icon: <AudioLines />, // Music note to represent synthesized music
    },
    {
        title: "Country",
        icon: <Drumstick />, // Drumstick for country rhythm
    },
    {
        title: "Blues",
        icon: <Disc3 />, // Vinyl for blues nostalgia
    },
    {
        title: "Reggae",
        icon: <Music />, // Music icon for reggae's all-encompassing vibe
    },
    // {
    //     title: "Hindi",
       
    // },
    // {
    //     title: "Chinese",
       
    // },
    // {
    //     title: "Korean",
       
    // },
    // {
    //     title: "Japanese",
       
    // },
    // {
    //     title: "Italian",
       
    // },
    // {
    //     title: "German",
       
    // },
    // {
    //     title: "French",
       
    // },
    // {
    //     title: "Spanish",
       
    // },
    // {
    //     title: "English",
    // },
];
export const instruments = [
    { 
        title: "String", 
        icon: <Guitar /> // Guitar represents string
    },
    { 
        title: "Percussion", 
        icon: <Drum /> // Drum for percussion
    },
    { 
        title: "Wind", 
        icon: <Wind /> // Wind icon for wind
    },
    { 
        title: "Keyboard", 
        icon: <Keyboard /> // Keyboard icon for keyboard-based
    },
    { 
        title: "Brass", 
        icon: <Music2 /> // Trumpet represents brass
    },
    { 
        title: "Electronic", 
        icon: <Speaker /> // Speaker icon for electronic
    }
];

export const feedMenuItems = [
    {
        title: "Home",
        icon: <Home className="h-5"/>,
        href: "/feed"
    },
    {
        title: "Notifications",
        icon: <Bell className="h-5"/>,
        href: "/feed/notifications"
    },
    {
        title: "Messages",
        icon: <Mail className="h-5"/>,
        href: "/feed/messages"
    },
    {
        title: "Bookmarks",
        icon: <Bookmark className="h-5"/>,
        href: "/feed/bookmarks"
    },

]