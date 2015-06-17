Geopollinator
=============

##Architecture
Geopollinator utilizes jQuery and Kinetic.js.

###Kinetic.js:
Takes arguments of svg format, and returns a graphic. Kinetic also allows the user to interact with the svg and allows calls from the output image object.

###compileMap Function:
This function is called every time the user clickes on the "Update Map" button, or when the user reloads the page every 24 hours. This function stores the time the website was accessed last (in ms) and the map information in local storage.

###Map Information:
The map data is pulled directly from a google api fusion-table. This returns a json format list of information about countries names and locations. This table is updated regularly, and is used by google maps as well.

###WorldDrawer.js:
Returns an object which has:
#### - stage:
  Background which contains the mapLayer
#### - scale:
  Contains the size of the stage
#### - paths:
  Contains all of the svg strings and the color and stroke of the line
#### - mapLayer:
  Countains all of the paths and creates a visual SVG

###Geopollinator.html:
This is the only html template there is, which means that it displays all of the visuals and contains all of the interactions.

###Bugs:
The map is displayed upside-down because the svg is expecting Kinetic.js to load the y inversly. To fix this, the y coordinates for each point need to be flipped relative to the height of the map.

The map also has bundaries that are incorrectly sized. This is related to the body padding, as well as the scale of the stage in WorldDrawer.js.
