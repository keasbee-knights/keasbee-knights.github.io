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
            "name": "chi ll",
            "background_url": "src/img/banners/cbg-2.gif",
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
                            "name": "Arena.net",
                            "url": "https://www.arena.net",
                            "icon": "square-letter-a",
                            "icon_color": "#b8bb26"
                        },
                        {
                            "name": "EA Origin",
                            "url": "https://www.ea.com/ea-app",
                            "icon": "brand-electronic-arts",
                            "icon_color": "#fb4934"
                        },
                        {
                            "name": "Epic Games",
                            "url": "https://epicgames.com/",
                            "icon": "device-gamepad-3",
                            "icon_color": "#fe8019"
                        },                        
                        {
                            "name": "Humble",
                            "url": "https://humblebundle.com/",
                            "icon": "bubble",
                            "icon_color": "#8ec07c"
                        },
                        {
                            "name": "Steam",
                            "url": "https://steampowered.com/",
                            "icon": "brand-steam",
                            "icon_color": "#d369b"
                        }
                    ]
                }
            ]
        },
        {
            "name": "design",
            "background_url": "src/img/banners/cbg-6.gif",
            "categories": [
                {
                    "name": "inspiration",
                    "links": [
                        {
                            "name": "pinterest",
                            "url": "https://www.pinterest.es/",
                            "icon": "brand-pinterest",
                            "icon_color": "#83a598"
                        },
                        {
                            "name": "artstation",
                            "url": "https://www.artstation.com/?sort_by=community",
                            "icon": "chart-area",
                            "icon_color": "#fabd2f"
                        },
                        {
                            "name": "wallhaven",
                            "url": "https://wallhaven.cc",
                            "icon": "wall",
                            "icon_color": "#b8bb26"
                        }
                    ]
                },
                {
                    "name": "resources",
                    "links": [
                        {
                            "name": "figma",
                            "url": "https://www.figma.com",
                            "icon": "brand-figma",
                            "icon_color": "#fb4934"
                        },
                        {
                            "name": "uxpro",
                            "url": "https://uxpro.cc/",
                            "icon": "components",
                            "icon_color": "#fe8019"
                        },
                        {
                            "name": "colorhunt",
                            "url": "https://colorhunt.co/",
                            "icon": "color-picker",
                            "icon_color": "#8ec07c"
                        }
                    ]
                },
                {
                    "name": "3d resources",
                    "links": [
                        {
                            "name": "thingiverse",
                            "url": "https://www.thingiverse.com/",
                            "icon": "circle-letter-t",
                            "icon_color": "#d3869b"
                        }
                    ]
                }
            ]
        },
        {
            "name": "dev",
            "background_url": "src/img/banners/cbg-7.gif",
            "categories": [
                {
                    "name": "repositories",
                    "links": [
                        {
                            "name": "github",
                            "url": "https://github.com/",
                            "icon": "brand-github",
                            "icon_color": "#83a598"
                        },
                        {
                            "name": "gitlab",
                            "url": "https://gitlab.com/",
                            "icon": "brand-gitlab",
                            "icon_color": "#fabd2f"
                        }
                    ]
                },
                {
                    "name": "resources",
                    "links": [
                        {
                            "name": "phind",
                            "url": "https://www.phind.com/",
                            "icon": "brand-openai",
                            "icon_color": "#b8bb26"
                        },
                        {
                            "name": "flutter",
                            "url": "https://docs.flutter.dev/ui",
                            "icon": "brand-flutter",
                            "icon_color": "#fb4934"
                        },
                        {
                            "name": "hacktricks",
                            "url": "https://book.hacktricks.xyz/welcome/readme",
                            "icon": "biohazard",
                            "icon_color": "#fe8019"
                        }
                    ]
                },
                {
                    "name": "challenges",
                    "links": [
                        {
                            "name": "hackthebox",
                            "url": "https://app.hackthebox.com",
                            "icon": "box",
                            "icon_color": "#8ec07c"
                        },
                        {
                            "name": "cryptohack",
                            "url": "https://cryptohack.org/challenges/",
                            "icon": "brain",
                            "icon_color": "#d3869b"
                        },
                        {
                            "name": "tryhackme",
                            "url": "https://tryhackme.com/dashboard",
                            "icon": "brand-onedrive",
                            "icon_color": "#83a598"
                        },
                        {
                            "name": "hackerrank",
                            "url": "https://www.hackerrank.com/dashboard",
                            "icon": "code-asterix",
                            "icon_color": "#fabd2f"
                        }
                    ]
                }
            ]
        },
        {
            "name": "myself",
            "background_url": "src/img/banners/cbg-9.gif",
            "categories": [
                {
                    "name": "mails",
                    "links": [
                        {
                            "name": "mailbox",
                            "url": "https://mailbox.org",
                            "icon": "mail",
                            "icon_color": "#b8bb26"
                        }
                    ]
                },
                {
                    "name": "storage",
                    "links": [
                        {
                            "name": "hetzner",
                            "url": "https://hetzner.com",
                            "icon": "circle-letter-h",
                            "icon_color": "#fb4934"
                        }
                    ]
                },
                {
                    "name": "stuff",
                    "links": [
                        {
                            "name": "champagne piracy",
                            "url": "https://champagne.pages.dev/",
                            "icon": "skull",
                            "icon_color": "#fe8019"
                        },
                        {
                            "name": "espn",
                            "url": "https://www.espn.com",
                            "icon": "ball-american-football",
                            "icon_color": "#8ec07c"
                        },
                        {
                            "name": "hltv",
                            "url": "https://www.hltv.org",
                            "icon": "ball-american-football",
                            "icon_color": "#d3869b"
                        },
                        {
                            "name": "liquidpedia",
                            "url": "https://www.liquidpedia.com",
                            "icon": "droplets",
                            "icon_color": "#83a598"
                        },
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
