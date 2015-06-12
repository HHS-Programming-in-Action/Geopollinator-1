Geopollinator
=============

##Introduciton:
The menu of the website shows a list of all the countries. Here the user can choose what countries he or she wants to studdy. Each of the country names are organized in their own divs, with values that show if the contries are selected or not. When a county is clicked on, the div updates its class name. When the user clicks the "Start Studying" button, all of the divs are looped through, and the selected country names are added to a list.

There is also a "Select All" button that selects or deselects all of the countries in the list by generating a click on each one of the divs, using jQuery.

The Update Map button alows the user to update his or her local storage with the most recent version of the map. Every 24 hours, when the user reloads the site, the map will update automaticaly.

The "send support email" button allows the user to send an email. All this does is open the email link, on macs this opens the mail app.

Once the "start studying" button has been pressed, the map is set visible, aswell as the text that displays the answeres and question number. The center and size of the selected countries location are found, and the map zooms in to that area, with a slight random offset. The user can zoom using the mouse wheel, and click and drag his mouse to move the map. Clicking makes the map move, by moving the maps X and Y coordinates.
