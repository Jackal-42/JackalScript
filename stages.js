// game.addObject("dynamicOil")
game.addObject("terrain", "this.refresh = false; this.layerId = \"terrain\"; this.id = 'baseLayer'")

var emptyLayer = [
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  "----------------------------------------------------------------",
  
];

game.addObject("terrain", "this.mapData = emptyLayer; this.id = \"activeLayer\"")

areas.push(new Area("shore", [
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~11111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~1111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~1111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~11111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~~~~~~~~~~111111111111111111111111111111111111111",
  "1111~~~~~~1111~~~~~~~~~~1111111111111111111111111111111111111111",
  "11111111111111111~~~11111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "~~~111~~~~~~1111111111111111111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~111~~~111111111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~~~~~~~~11111111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~~~~~~~~11111111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~~~~~~~111111111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~~~~~~1111111111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~~~~~~1111111111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~~~~~11111111111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~~~~~1111111111111111111111111111111111111111111111",
  "~~~~~~~~~~~~~~11111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111"],
emptyLayer.slice(), [], []));


areas.push(new Area("island", [
  "1111111111111111111111111111111111111111111111111111111111111111",  "1111111111111111111111111111111111111111111111111111111111111111",  "1111111111111111111111111111111111111111111111111111111111111111",  "1111111111111111111111111111111111111111111111111111111111111111",  "1111111111111111111111111111111111111111111111111111111111111111",  "1111111111111111111111111111111111111111111111111111111111111111",  "1111111111111111111111111111111111111111111111111111111111111111",  "1111111111111111111111111111111111111111111111111111111111111111",  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",    "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",    "1111111111111111111111111111111111111111111111111111111111111111",
  "111111111111111111111111111111111~~11111111111111111111111111111",  "1111111111111111111111111111111~~~~~1111111111111111111111111111",  "111111111111111111111111111111~~~~~~~~11111111111111111111111111",  "1111111111111111111111111111~~~~~~~~~~~~~11111111111111111111111",  "1111111111111111111111111111111~~~~~~~~~111111111111111111111111",  "1111111111111111111111111111111111~~~~~1111111111111111111111111",  "111111111111111111111111111111111111~~11111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111",
  "1111111111111111111111111111111111111111111111111111111111111111"],
emptyLayer.slice(), [], []));


createNetwork(7, 3, "crude_source")
createNetwork(10, 3, "distiller")
createNetwork(14, 1, "hydrogen_source")
createNetwork(14, 3, "hydrotreater")

createNetwork(14, 5, "hydrotreater")
createNetwork(27, 2, "ship")

game.addObject("selector")
