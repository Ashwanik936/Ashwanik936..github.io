/*	GOOGLE
	----------------------------------------------------- */

    eng.duckduckgo = {
        pageTitle: "Search",
        logo: "search.png",
        places: {
            'Web'    : ["https://duckduckgo.com/?q=%query%&kp=-1&kl=us-en", false],
            'Images' : ["https://images.google.com/images?q=%query%", false],
            'Maps'   : ["https://maps.google.com/maps?q=%query%", false]
        }
    };
    
    
    /*	WIKIPEDIA
        ----------------------------------------------------- */
        
    eng.wikipedia = {
        pageTitle: "Wikipedia",
        logo: "wikipedia.png",
        places: {
            'Search'        : ["https://wikipedia.org/wiki/Special:Search?search=%query%&fulltext=Search", false],
            'Go to Article' : ["https://wikipedia.org/wiki/Special:Search?search=%query%&go=Go", false],
        }
    };
    
    
    /*	YOUTUBE
        ----------------------------------------------------- */
    
    eng.youtube = {
        pageTitle: "YouTube",
        logo: "youtube.png",
        places: {
            'Videos' : ["https://www.youtube.com/results?search_query=%query%", false]
        },
    };
    
    
    /*	TWITTER
        ----------------------------------------------------- */
    
    eng.pirate = {
        pageTitle: "Pirated",
        logo: "pirate.png",
        places: {
            'Search Twitter' : ["https://thepiratebay.party/search/%query%", false]
        }
    };