var newBuild = {
"/pa/units/PAEIOU/crawler/t1/fab/fab.json": ["crawler", 0,{ row: 2, column: 0, titans: true }],
"/pa/units/PAEIOU/crawler/t1/can/can.json": ["crawler", 0,{ row: 2, column: 1, titans: true }],
"/pa/units/PAEIOU/crawler/t1/quincy/quincy.json": ["crawler", 0,{ row: 2, column: 2, titans: true }],
"/pa/units/PAEIOU/crawler/t1/arc/arc.json": ["crawler", 0,{ row: 2, column: 4, titans: true }],
"/pa/units/PAEIOU/crawler/t2/luddite/luddite.json": ["bot", 0,{ row: 0, column: 1, titans: true }],
"/pa/units/PAEIOU/crawler/t2/foxhound/foxhound.json": ["bot", 0,{ row: 0, column: 2, titans: true }],
"/pa/units/PAEIOU/crawler/t2/gale/gale.json": ["bot", 0,{ row: 0, column: 3, titans: true }],
"/pa/units/PAEIOU/heavy_crawler/t1/ogre/ogre.json": ["heavy_crawler", 0,{ row: 2, column: 1, titans: true }],
"/pa/units/PAEIOU/heavy_crawler/t1/monitor/monitor.json": ["heavy_crawler", 0,{ row: 2, column: 2, titans: true }],
"/pa/units/PAEIOU/structure/t1/power_plant/power_plant.json": ["utility", 0,{ row: 1, column: 5, titans: true }],
"/pa/units/PAEIOU/structure/t1/crawler_factory/crawler_factory.json": ["factory", 0,{ row: 2, column: 5, titans: true }],

}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
_.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}