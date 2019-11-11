var newBuild = {
"/pa/units/PAEIOU/crawler/t1/can/can.json": ["bot", 0,{ row: 3, column: 1, titans: true }],
"/pa/units/PAEIOU/crawler/t1/arc/arc.json": ["vehicle", 0,{ row: 3, column: 4, titans: true }],
"/pa/units/PAEIOU/crawler/t2/luddite/luddite.json": ["bot", 0,{ row: 0, column: 1, titans: true }],
"/pa/units/PAEIOU/crawler/t2/foxhound/foxhound.json": ["bot", 0,{ row: 0, column: 2, titans: true }],
"/pa/units/PAEIOU/crawler/t2/gale/gale.json": ["bot", 0,{ row: 0, column: 3, titans: true }],
"/pa/units/PAEIOU/heavy_crawler/t1/ogre/ogre.json": ["combat", 0,{ row: 3, column: 1, titans: true }],
"/pa/units/PAEIOU/heavy_crawler/t1/monitor/monitor.json": ["combat", 0,{ row: 3, column: 2, titans: true }],
"/pa/units/PAEIOU/structure/t1/power_plant/power_plant.json": ["utility", 0,{ row: 3, column: 3, titans: true }],

}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
_.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}