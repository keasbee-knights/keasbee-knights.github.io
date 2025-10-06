let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
    "overrideStorage": true,
    "temperature": {
        "location": "New York City, New York",
        "scale": "F"
    },
    "clock": {
        "format": "H:i // a, B d Y",
        "iconColor": "#d65d0e"
    },
    "search": {
        "engines": {
            "d": [
                "https://duckduckgo.com/html?q=",
                "DuckDuckGo"
            ],

            "g": [
                "https://google.com/search?q=",
                "Google"
            ],

            "p": [
                "https://www.pinterest.es/search/pins/?q=",
                "Pinterest"
            ],
                             
            "r": [
                "https://www.reddit.com/search/?q=",
                "Reddit"
            ],

            "sp": [
                "https://www.startpage.com/sp/search?query=",
                "Startpage"
            ],

            "y": [
                "https://youtube.com/results?search_query=",
                "Youtube"
            ]
        }
    },
    "keybindings": {
        "s": "search-bar",
        "q": "config-tab"
    },
    "disabled": [],
    "localIcons": false,
    "fastlink": "https://duck.ai",
    "openLastVisitedTab": true,
    "tabs": [
        {
            "name": "page 1",
            "background_url": "src/img/banners/cbg-3.gif",
            "categories": [
                {
                    "name": "Social Media",
                    "links": [
                        {
                            "name": "discord",
                            "url": "https://www.discord.com/",
                            "icon": "brand-discord",
                            "icon_color": "#8ec07c"
                        },
                        {
                            "name": "twitch",
                            "url": "https://www.twitch.tv/",
                            "icon": "brand-twitch",
                            "icon_color": "#d3869b"
                        },
                        {
                            "name": "twitter",
                            "url": "https://twitter.com/home",
                            "icon": "brand-twitter-filled",
                            "icon_color": "#83a598"
                        },
                        {
                            "name": "youtube",
                            "url": "https://www.youtube.com/",
                            "icon": "brand-youtube-filled",
                            "icon_color": "#fabd2f"
                        }
                    ],
                },
                {
                    "name": "Games",
                    "links": [
                        {
                            "name": "EA Origin",
                            "url": "https://www.ea.com/ea-app",
                            "icon": "brand-electronic-arts",
                            "icon_color": "#fb4934"
                        },
                        {
                            "name": "Epic Games",
                            "url": "https://epicgames.com/",
                            "icon": "device-gamepad-2",
                            "icon_color": "#fe8019"
                        },                        
                        {
                            "name": "Humble",
                            "url": "https://humblebundle.com/",
                            "icon": "moneybag",
                            "icon_color": "#8ec07c"
                        },
                        {
                            "name": "Steam",
                            "url": "https://steampowered.com/",
                            "icon": "brand-steam",
                            "icon_color": "#d369b"
                        }
                    ]
                },
                {
                    "name": "Guild Wars 2",
                    "links": [
                        {
                            "name": "Arena.net",
                            "url": "https://www.arena.net",
                            "icon": "square-letter-a",
                            "icon_color": "#b8bb26"
                        },
                        {
                            "name": "GW2 Efficency",
                            "url": "https://gw2efficiency.com/",
                            "icon": "windmill",
                            "icon_color": "#fb4934"
                        },
                        {
                            "name": "GW2 Wingman",
                            "url": "https://gw2wingman.nevermindcreations.de/home",
                            "icon": "windmill",
                            "icon_color": "#fe8019"
                        },                        
                        {
                            "name": "Killproof",
                            "url": "https://humblebundle.com/",
                            "icon": "receipt",
                            "icon_color": "#8ec07c"
                        }
                    ]
                }
            ]
        },
        {
            "name": "page 2",
            "background_url": "src/img/banners/cbg-6.gif",
            "categories": [
                {
                    "name": "sports and scores",
                    "links": [
                        {
                            "name": "espn",
                            "url": "https://espn.com/",
                            "icon": "american-football",
                            "icon_color": "#83a598"
                        },
                        {
                            "name": "hltv",
                            "url": "https://hltv.org/",
                            "icon": "target",
                            "icon_color": "#83a598"
                        },
                        {
                            "name": "liquipedia",
                            "url": "https://liquipedia.net/",
                            "icon": "droplets-filled",
                            "icon_color": "#83a598"
                        }                        
                    ]
                }
            ]
        }
    ]
}

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
