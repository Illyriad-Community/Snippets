//Increase max-height so the town menu starts scrolling based on available screen size instead of at 12 towns.
$("#citiesMenu").css("max-height", screen.availHeight);
//Increase max-width so the original width of the menu is still visible with the scrollbar.
$("#citiesMenu").css("max-width", 260);
