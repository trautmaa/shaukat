---
layout: page
title: Journey
permalink: /journey/
---

<style>
    /* body { margin:0; padding:0; }
    #map { position:absolute; top:0; bottom:0; width:100%; } */
</style>

<style>
#map {
    height: 300px;

}
#features {
height:300px;
overflow-y:scroll;
} 

/*#map {
  height:300px;
  width:50%;
}

#map {
    position: fixed;
    width:50%;
}*/
#features {
    font-family: sans-serif;
    overflow-y: scroll;
    background-color: #fafafa;
} 
section {
    padding:  25px 50px;
    line-height: 25px;
    border-bottom: 1px solid #ddd;
    opacity: 0.25;
    font-size: 13px;
}
section.active {
    opacity: 1;
}
section:last-child {
    border-bottom: none;
    margin-bottom: 200px;
} */
</style>

<div id="mapwrap">
<div id='map'></div>
<div id='features'>
    <section id='croton' class='active'>
        <h3>croton</h3>
        <p>November 1895. London is shrouded in fog and Sherlock Holmes and Watson pass time restlessly awaiting a new case. "The London criminal is certainly a dull fellow," Sherlock bemoans. "There have been numerous petty thefts," Watson offers in response. Just then a telegram arrives from Sherlock's brother Mycroft with a mysterious case.</p>
    </section>
    <section id='nyc'>
        <h3>New York</h3>
        <p>Arthur Cadogan West was found dead, head crushed in on train tracks at Aldgate Station at 6AM Tuesday morning. West worked at Woolwich Arsenal on the Bruce-Partington submarine, a secret military project. Plans for the submarine had been stolen and seven of the ten missing papers were found in West's possession. Mycroft implores Sherlock to take the case and recover the three missing papers.</p>
    </section>
    <section id='morocco'>
        <h3>Morocco</h3>
        <p>Holmes and Watson's investigations take them across London. Sherlock deduces that West was murdered elsewhere, then moved to Aldgate Station to create the illusion that he was crushed on the tracks by a train. On their way to Woolwich Sherlock dispatches a telegram to Mycroft at London Bridge: "Send list of all foreign spies known to be in England, with full address."</p>
    </section>
    <section id='miami'>
        <h3>Miami</h3>
        <p>While investigating at Woolwich Arsenal Sherlock learns that West did not have the three keys&mdash;door, office, and safe&mdash;necessary to steal the papers. The train station clerk mentions seeing an agitated West boarding the 8:15 train to London Bridge. Sherlock suspects West of following someone who had access to the Woolwich chief's keyring with all three keys.</p>
    </section>
    <section id='newhaven'>
        <h3>New Haven</h3>
        <p>Mycroft responds to Sherlock's telegram and mentions several spies. Hugo Oberstein of 13 Caulfield Gardens catches Sherlock's eye. He heads to the nearby Gloucester Road station to investigate and learns that the windows of Caulfield Gardens open over rail tracks where trains stop frequently.</p>
    </section>
    <section id='northfield'>
        <h3>Northfield</h3>
        <p>Holmes deduces that the murderer placed West atop a stopped train at Caulfield Gardens. The train traveled to Aldgate Station before West's body finally toppled off. Backtracking to the criminal's apartment, Holmes finds a series of classified ads from <em>The Daily Telegraph</em> stashed away. All are under the name Pierrot: "Monday night after nine. Two taps. Only ourselves. Do not be so suspicious. Payment in hard cash when goods delivered."</p>
    </section>
    <section id='oxford'>
        <h3>Oxford</h3>
        <p>Holmes and Watson head to The Daily Telegraph and place an ad to draw out the criminal. It reads: "To-night. Same hour. Same place. Two taps. Most vitally important. Your own safety at stake. Pierrot." The trap works and Holmes catches the criminal: Colonel Valentine Walter, the brother of Woolwich Arsenal's chief. He confesses to working for Hugo Oberstein to obtain the submarine plans in order to pay off his debts.</p>
    </section>
    <section id='moab'>
        <h3>Moab</h3>
        <p>Holmes and Watson head to The Daily Telegraph and place an ad to draw out the criminal. It reads: "To-night. Same hour. Same place. Two taps. Most vitally important. Your own safety at stake. Pierrot." The trap works and Holmes catches the criminal: Colonel Valentine Walter, the brother of Woolwich Arsenal's chief. He confesses to working for Hugo Oberstein to obtain the submarine plans in order to pay off his debts.</p>
    </section>
    <section id='granada'>
        <h3>Granada</h3>
        <p>Holmes and Watson head to The Daily Telegraph and place an ad to draw out the criminal. It reads: "To-night. Same hour. Same place. Two taps. Most vitally important. Your own safety at stake. Pierrot." The trap works and Holmes catches the criminal: Colonel Valentine Walter, the brother of Woolwich Arsenal's chief. He confesses to working for Hugo Oberstein to obtain the submarine plans in order to pay off his debts.</p>
    </section>
    <section id='tucson'>
        <h3>Tucson</h3>
        <p>Walter writes to Oberstein and convinces him to meet in the smoking room of the Charing Cross Hotel where he promises additional plans for the submarine in exchange for money. The plan works and Holmes and Watson catch both criminals.</p>
        <small id="citation">
            Adapted from <a href='http://www.gutenberg.org/files/2346/2346-h/2346-h.htm'>Project Gutenberg</a>
        </small>
    </section>
</div>
<div style="clear:both;"></div>
</div>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleHRyIiwiYSI6ImNpZ2ExbG15YzA4bzF0a20zYzltaGFlaHkifQ.wLsWFLI8mnMHcTRsDpuRYg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alextr/cjfbh3kum2fa92sq95lwlowfv',
    center: [-73.8912, 41.2084], //Croton
    zoom: 7,
    bearing: 27,
    pitch: 45
});
var chapters = {
    'morocco': {
        bearing: 27,
        center: [-6.017073, 32.350751], //Morocco
        zoom: 7,
        pitch: 20
    },
    'miami': {
        bearing: 27,
        center: [-80.1937, 25.7743], //Miami
        zoom: 7,
        pitch: 20
    },
    'croton': {
        duration: 6000,
        center: [-73.8912, 41.2084], //Croton
        bearing: 150,
        zoom: 7,
        pitch: 0
    },
    'northfield': {
        bearing: 90,
        center: [-93.1612, 44.4582], //Nofo
        zoom: 7,
        speed: 0.6,
        pitch: 40
    },
    'newhaven': {
        bearing: 90,
        center: [-72.9251, 41.3082], //New Haven
        zoom: 7
    },
    'nyc': {
        bearing: 45,
        center: [-73.9808, 40.7648], //NYC
        zoom: 7,
        pitch: 20,
        speed: 0.5
    },
    'oxford': {
        bearing: 180,
        center: [-1.25778, 51.75194], //Oxford
        zoom: 7
    },
    'tucson': {
        bearing: 90,
        center: [-110.9265, 32.2217], //Tucson
        zoom: 7,
        pitch: 40
    },
    'moab': {
        bearing: 90,
        center: [-109.5462, 38.5738], //Moab
        zoom: 7,
        pitch: 20
    },
    'granada': {
        bearing: 90,
        center: [-3.60083, 37.17806], //Granada
        zoom: 7,
        pitch: 20
    }
};
// On every scroll event, check which element is on screen
$("#features").scroll(function() {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementInView(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
});
var activeChapterName = 'croton';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;
    map.flyTo(chapters[chapterName]);
    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');
    activeChapterName = chapterName;
}
function isElementInView(id) {
    var element = document.getElementById(id);
    var elementRect = element.getBoundingClientRect();
    var parent = element.parentNode;
    var parentRect = parent.getBoundingClientRect();
    var parentMidline = (parentRect.height / 2) + parentRect.top;
    return (elementRect.top < parentMidline) && (elementRect.bottom > parentMidline);
}
</script>




<!-- {% for waypoint in site.waypoints %}
  <h3>{{ waypoint.name }}</h3>
{% endfor %}

<div id='map' style='width: 800px; height: 600px;'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleHRyIiwiYSI6ImNpZ2ExbG15YzA4bzF0a20zYzltaGFlaHkifQ.wLsWFLI8mnMHcTRsDpuRYg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alextr/cjfbh3kum2fa92sq95lwlowfv',
    center: [-96, 37.8],
    zoom: 3
});
</script> -->