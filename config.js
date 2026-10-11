const CONFIG = {
    // General Info
    recipientName: "ened okey",
    senderName: "Subhasharaddy",
    
    // Theme preferences (Premium Red & Gold)
    colors: {
        primary: "#F02D3A", // Celebration red
        secondary: "#FFD166", // Champagne gold
        backgroundStart: "#36040D", // Deep burgundy
        backgroundEnd: "#8B0000", // Romantic red
        text: "#FFF8F2" // Warm cream
    },

    // Landing Page
    landing: {
        title: "Happy Birthday, {name}!", // {name} will be replaced with recipientName
        subtitle: "Today is all about celebrating you."
    },

    // Countdown
    countdown: {
        // Format: YYYY-MM-DDTHH:MM:SS (Viewer's local time)
        targetDate: "2026-10-10T00:00:00", 
        celebrationMessage: "It's Finally Here! Happy Birthday!"
    },

    // Personal Message
    message: {
        title: "A Special Message for You",
        content: [
            "Happy Birthday! I hope your day is filled with joy, laughter, and all the things you love most.",
            "You bring so much light into the lives of everyone around you, and today is the perfect day to celebrate how amazing you are.",
            "Wishing you a year ahead full of beautiful surprises and unforgettable moments!"
        ],
        signature: "With love and best wishes,"
    },

    // Special Memories
    memories: {
        title: "Beautiful Memories",
        photos: [
            { path: "assets/photos/photo1.jpeg", caption: "That unforgettable trip we took together." },
            { path: "assets/photos/photo2.jpeg", caption: "Laughing until we cried." },
            { path: "assets/photos/photo3.jpeg", caption: "A perfect summer day." },
            { path: "assets/photos/photo4.jpeg", caption: "Celebrating milestones." },
            { path: "assets/photos/photo5.jpeg", caption: "Just being silly." }
        ]
    },

    // Why You Are Special
    reasons: {
        title: "Why You Are Special",
        items: [
            { title: "Your Kindness", description: "You always know how to make others feel seen and loved." },
            { title: "Your Beautiful Smile", description: "It genuinely lights up any room you walk into." },
            { title: "Your Support", description: "You are always there for me, no matter what." },
            { title: "The Happiness You Bring", description: "Life is just more fun with you around." },
            { title: "The Memories We Share", description: "Every moment with you is an adventure." },
            { title: "The Person You Are", description: "You are authentic, inspiring, and completely unique." }
        ]
    }
};
