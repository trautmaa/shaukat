---
layout: page
title: Journey
permalink: /journey/
---
<div id="mapwrap">
    <div id='map'></div>
    <div id='features'>
    {% assign sortedWaypoints = site.waypoints | sort: 'date' %}
    {% for waypoint in sortedWaypoints %}
    {% if forloop.first == true %}
        <section id='{{ waypoint.slug }}' class='active'>
        {% else %}
        <section id='{{ waypoint.slug }}'>
        {% endif %}
        <div class="text">
            <h3>{{ waypoint.name }}</h3>
            <p>{{ waypoint.content }}</p>
        </div>
        <div class="image">
            <img src="/assets/{{ waypoint.source | prepend: site.baseurl }}">
        </div>
        </section>
    {% endfor %}
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
{% for waypoint in site.waypoints %}
  '{{ waypoint.slug }}': {
    bearing: {{ waypoint.bearing }},
    center: {{ waypoint.center }},
    zoom: {{ waypoint.zoom }},
    pitch: {{ waypoint.pitch }},
    duration: {{ waypoint.duration }},
    speed: {{ waypoint.speed }},
    center: {{ waypoint.center }}
  },
{% endfor %}
}
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
