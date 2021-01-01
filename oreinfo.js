let Minerals = {
    //Ore
    Tritanium: {Name: "Tritanium", Price: 0.0, TypeID: 34},
    Pyerite: {Name: "Pyerite", Price: 0.0, TypeID: 35},
    Mexallon: {Name: "Mexallon", Price: 0.0, TypeID: 36},
    Isogen: {Name: "Isogen", Price: 0.0, TypeID: 37},
    Nocxium: {Name: "Nocxium", Price: 0.0, TypeID: 38},
    Zydrine: {Name: "Zydrine", Price: 0.0, TypeID: 39},
    Megacyte: {Name: "Megacyte", Price: 0.0, TypeID: 40},
    Morphite: {Name: "Morphite", Price: 0.0, TypeID: 11399},
    
    //R4
    Atmospheric: {Name: "Atmospheric Gases", Price: 0.0, TypeID: 16634},
    Evaporite: {Name: "Evaporite Deposits", Price: 0.0, TypeID: 16635},
    Hydrocarbons: {Name: "Hydrocarbons", Price: 0.0, TypeID: 16633},
    Silicates: {Name: "Silicates", Price: 0.0, TypeID: 16636},

    //R8
    Cobalt: {Name: "Cobalt", Price: 0.0, TypeID: 16640},
    Scandium: {Name: "Scandium", Price: 0.0, TypeID: 16639},
    Titanium: {Name: "Titanium", Price: 0.0, TypeID: 16638},
    Tungsten: {Name: "Tungsten", Price: 0.0, TypeID: 16637},

    //R16
    Vanadium: {Name: "Vanadium", Price: 0.0, TypeID: 16642},
    Cadmium: {Name: "Cadmium", Price: 0.0, TypeID: 16643},
    Chromium: {Name: "Chromium", Price: 0.0, TypeID: 16641},
    Platinum: {Name: "Platinum", Price: 0.0, TypeID: 16644},

    //R32
    Caesium: {Name: "Caesium", Price: 0.0, TypeID: 16647},
    Mercury: {Name: "Mercury", Price: 0.0, TypeID: 16646},
    Technetium: {Name: "Technetium", Price: 0.0, TypeID: 16649},
    Hafnium: {Name: "Hafnium", Price: 0.0, TypeID: 16648},

    //R64
    Dysprosium: {Name: "Dysprosium", Price: 0.0, TypeID: 16650},
    Neodymium: {Name: "Neodymium", Price: 0.0, TypeID: 16651},
    Promethium: {Name: "Promethium", Price: 0.0, TypeID: 16652},
    Thulium: {Name: "Thulium", Price: 0.0, TypeID: 16653},

    //Ice
    HeavyWater: {Name: "Heavy Water", Price:0.0, TypeID:16272},
    LiquidOzone: {Name: "Liquid Ozone", Price:0.0, TypeID:16273},
    Strontium: {Name: "Strontium Clathrates", Price:0.0, TypeID:16275},
    OxygenIsotopes: {Name: "Oxygen Isotopes", Price:0.0, TypeID:17887},
    HeliumIsotopes: {Name: "Helium Isotopes", Price:0.0, TypeID:16274},
    HydrogenIsotopes: {Name: "Hydrogen Isotopes", Price:0.0, TypeID:17889},
    NitrogenIsotopes: {Name: "Nitrogen Isotopes", Price:0.0, TypeID:17888},

}

let Buybacks = {
    NormalOre: 0.95,
    MoonOre: 0.80,
    Ice: 0.90
}

let Ore = [
    /*
    {
        Name: "Arkonor",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Crimson Arkonor", Bonus: 1.05},
            {Name: "Prime Arkonor", Bonus: 1.1},
            {Name: "Flawless Arkonor", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 0},
            {Type: Minerals.Pyerite, QTY: 3200},
            {Type: Minerals.Mexallon, QTY: 1200},
            {Type: Minerals.Isogen, QTY: 0},
            {Type: Minerals.Nocxium, QTY: 0},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 120},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Bezdnacine",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Abyssal Bezdnacine", Bonus: 1.05},
            {Name: "Hadal Bezdnacine", Bonus: 1.1}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 40000},
            {Type: Minerals.Pyerite, QTY: 0},
            {Type: Minerals.Mexallon, QTY: 0},
            {Type: Minerals.Isogen, QTY: 4800},
            {Type: Minerals.Nocxium, QTY: 0},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 120},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Bistot",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Triclinic Bistot", Bonus: 1.05},
            {Name: "Monoclinic Bistot", Bonus: 1.1},
            {Name: "Cubic Bistot", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 0},
            {Type: Minerals.Pyerite, QTY: 3200},
            {Type: Minerals.Mexallon, QTY: 1200},
            {Type: Minerals.Isogen, QTY: 0},
            {Type: Minerals.Nocxium, QTY: 0},
            {Type: Minerals.Zydrine, QTY: 160},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Crokite",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Sharp Crokite", Bonus: 1.05},
            {Name: "Crystalline Crokite", Bonus: 1.1},
            {Name: "Pellucid Crokite", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 0},
            {Type: Minerals.Pyerite, QTY: 800},
            {Type: Minerals.Mexallon, QTY: 2000},
            {Type: Minerals.Isogen, QTY: 0},
            {Type: Minerals.Nocxium, QTY: 800},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Dark Ochre",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Onyx Dark Ochre", Bonus: 1.05},
            {Name: "Obsidian Dark Ochre", Bonus: 1.1},
            {Name: "Jet Dark Ochre", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 0},
            {Type: Minerals.Pyerite, QTY: 0},
            {Type: Minerals.Mexallon, QTY: 1360},
            {Type: Minerals.Isogen, QTY: 1200},
            {Type: Minerals.Nocxium, QTY: 320},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Gneiss",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Iridescent Gneiss", Bonus: 1.05},
            {Name: "Prismatic Gneiss", Bonus: 1.1},
            {Name: "Brilliant Gneiss", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 0},
            {Type: Minerals.Pyerite, QTY: 2000},
            {Type: Minerals.Mexallon, QTY: 1500},
            {Type: Minerals.Isogen, QTY: 800},
            {Type: Minerals.Nocxium, QTY: 0},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Hedbergite",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Vitric Hedbergite", Bonus: 1.05},
            {Name: "Glazed Hedbergite", Bonus: 1.1},
            {Name: "Lustrous Hedbergite", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 0},
            {Type: Minerals.Pyerite, QTY: 450},
            {Type: Minerals.Mexallon, QTY: 0},
            {Type: Minerals.Isogen, QTY: 0},
            {Type: Minerals.Nocxium, QTY: 120},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Hemorphite",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Vivid Hemorphite", Bonus: 1.05},
            {Name: "Radiant Hemorphite", Bonus: 1.1},
            {Name: "Scintillating Hemorphite", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 0},
            {Type: Minerals.Pyerite, QTY: 0},
            {Type: Minerals.Mexallon, QTY: 0},
            {Type: Minerals.Isogen, QTY: 240},
            {Type: Minerals.Nocxium, QTY: 90},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Jaspet",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Pure Jaspet", Bonus: 1.05},
            {Name: "Pristine Jaspet", Bonus: 1.1},
            {Name: "Immaculate Jaspet", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 0},
            {Type: Minerals.Pyerite, QTY: 0},
            {Type: Minerals.Mexallon, QTY: 150},
            {Type: Minerals.Isogen, QTY: 0},
            {Type: Minerals.Nocxium, QTY: 50},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Kernite",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Luminous Kernite", Bonus: 1.05},
            {Name: "Fiery Kernite", Bonus: 1.1},
            {Name: "Resplendant Kernite", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 0},
            {Type: Minerals.Pyerite, QTY: 0},
            {Type: Minerals.Mexallon, QTY: 60},
            {Type: Minerals.Isogen, QTY: 120},
            {Type: Minerals.Nocxium, QTY: 0},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Mercoxit",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Magma Mercoxit", Bonus: 1.05},
            {Name: "Vitreous Mercoxit", Bonus: 1.1},
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 0},
            {Type: Minerals.Pyerite, QTY: 0},
            {Type: Minerals.Mexallon, QTY: 0},
            {Type: Minerals.Isogen, QTY: 0},
            {Type: Minerals.Nocxium, QTY: 0},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 140},
        ]
	},
	{
		Name: "Omber",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Silvery Omber", Bonus: 1.05},
            {Name: "Golden Omber", Bonus: 1.1},
            {Name: "Platinoid Omber", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 0},
            {Type: Minerals.Pyerite, QTY: 90},
            {Type: Minerals.Mexallon, QTY: 0},
            {Type: Minerals.Isogen, QTY: 75},
            {Type: Minerals.Nocxium, QTY: 0},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Plagioclase",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Azure Plagioclase", Bonus: 1.05},
            {Name: "Rich Plagioclase", Bonus: 1.1},
            {Name: "Sparkling Plagioclase", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 175},
            {Type: Minerals.Pyerite, QTY: 0},
            {Type: Minerals.Mexallon, QTY: 70},
            {Type: Minerals.Isogen, QTY: 0},
            {Type: Minerals.Nocxium, QTY: 0},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Pyroxeres",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Solid Pyroxeres", Bonus: 1.05},
            {Name: "Viscous Pyroxeres", Bonus: 1.1},
            {Name: "Opulent Pyroxeres", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 0},
            {Type: Minerals.Pyerite, QTY: 90},
            {Type: Minerals.Mexallon, QTY: 30},
            {Type: Minerals.Isogen, QTY: 0},
            {Type: Minerals.Nocxium, QTY: 0},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Rakovene",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Abyssal Rakovene", Bonus: 1.05},
            {Name: "Hadal Rakovene", Bonus: 1.1}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 40000},
            {Type: Minerals.Pyerite, QTY: 0},
            {Type: Minerals.Mexallon, QTY: 0},
            {Type: Minerals.Isogen, QTY: 3200},
            {Type: Minerals.Nocxium, QTY: 0},
            {Type: Minerals.Zydrine, QTY: 200},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Scordite",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Condensed Scordite", Bonus: 1.05},
            {Name: "Massive Scordite", Bonus: 1.1},
            {Name: "Glossy Scordite", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 150},
            {Type: Minerals.Pyerite, QTY: 90},
            {Type: Minerals.Mexallon, QTY: 0},
            {Type: Minerals.Isogen, QTY: 0},
            {Type: Minerals.Nocxium, QTY: 0},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Spodumain",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Bright Spodumain", Bonus: 1.05},
            {Name: "Gleaming Spodumain", Bonus: 1.1},
            {Name: "Dazzling Spodumain", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 4800},
            {Type: Minerals.Pyerite, QTY: 0},
            {Type: Minerals.Mexallon, QTY: 0},
            {Type: Minerals.Isogen, QTY: 1000},
            {Type: Minerals.Nocxium, QTY: 160},
            {Type: Minerals.Zydrine, QTY: 80},
            {Type: Minerals.Megacyte, QTY: 40},
            {Type: Minerals.Morphite, QTY: 0},
        ]
	},
	{
		Name: "Talassonite",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Abyssal Talassonite", Bonus: 1.05},
            {Name: "Hadal Talassonite", Bonus: 1.1}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 40000},
            {Type: Minerals.Pyerite, QTY: 0},
            {Type: Minerals.Mexallon, QTY: 0},
            {Type: Minerals.Isogen, QTY: 0},
            {Type: Minerals.Nocxium, QTY: 960},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 32},
            {Type: Minerals.Morphite, QTY: 0},
        ]
    },
    {
        Name: "Veldspar",
        BuybackType: Buybacks.NormalOre,
        Varients: [
            {Name: "Concentrated Veldspar", Bonus: 1.05},
            {Name: "Dense Veldspar", Bonus: 1.1},
            {Name: "Stable Veldspar", Bonus: 1.15}
        ],
        Refined: [
            {Type: Minerals.Tritanium, QTY: 400},
            {Type: Minerals.Pyerite, QTY: 0},
            {Type: Minerals.Mexallon, QTY: 0},
            {Type: Minerals.Isogen, QTY: 0},
            {Type: Minerals.Nocxium, QTY: 0},
            {Type: Minerals.Zydrine, QTY: 0},
            {Type: Minerals.Megacyte, QTY: 0},
            {Type: Minerals.Morphite, QTY: 0},
        ]
    },
*/
    //---- Moon Ore
    {
        Name: "Xenotime",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Xenotime", Bonus: 1.15},
            {Name: "Shining Xenotime", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Atmospheric, QTY: 0.2},
            {Type: Minerals.Cobalt, QTY: 0.2},
            {Type: Minerals.Vanadium, QTY: 0.1},
            {Type: Minerals.Dysprosium, QTY: 0.22},
            
        ]
    },
    {
        Name: "Monazite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Monazite", Bonus: 1.15},
            {Name: "Shining Monazite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Evaporite, QTY: 0.2},
            {Type: Minerals.Tungsten, QTY: 0.2},
            {Type: Minerals.Chromium, QTY: 0.1},
            {Type: Minerals.Neodymium, QTY: 0.22},
            
        ]
    },
    {
        Name: "Loparite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Loparite", Bonus: 1.15},
            {Name: "Shining Loparite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Hydrocarbons, QTY: 0.2},
            {Type: Minerals.Scandium, QTY: 0.2},
            {Type: Minerals.Platinum, QTY: 0.1},
            {Type: Minerals.Promethium, QTY: 0.22},
            
        ]
    },
    {
        Name: "Ytterbite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Ytterbite", Bonus: 1.15},
            {Name: "Shining Ytterbite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Silicates, QTY: 0.2},
            {Type: Minerals.Titanium, QTY: 0.2},
            {Type: Minerals.Cadmium, QTY: 0.1},
            {Type: Minerals.Thulium, QTY: 0.22},
            
        ]
    },
    {
        Name: "Pollucite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Pollucite", Bonus: 1.15},
            {Name: "Shining Pollucite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Hydrocarbons, QTY: 0.15},
            {Type: Minerals.Scandium, QTY: 0.1},
            {Type: Minerals.Caesium, QTY: 0.5},
            
        ]
    },
    {
        Name: "Carnotite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Carnotite", Bonus: 1.15},
            {Name: "Shining Carnotite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Atmospheric, QTY: 0.15},
            {Type: Minerals.Cobalt, QTY: 0.1},
            {Type: Minerals.Technetium, QTY: 0.5},
            
        ]
    },
    {
        Name: "Cinnabar",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Cinnabar", Bonus: 1.15},
            {Name: "Shining Cinnabar", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Evaporite, QTY: 0.15},
            {Type: Minerals.Tungsten, QTY: 0.1},
            {Type: Minerals.Mercury, QTY: 0.5},
            
        ]
    },
    {
        Name: "Zircon",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Zircon", Bonus: 1.15},
            {Name: "Shining Zircon", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Silicates, QTY: 0.15},
            {Type: Minerals.Titanium, QTY: 0.1},
            {Type: Minerals.Hafnium, QTY: 0.5},
            
        ]
    },
    {
        Name: "Sperrylite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Sperrylite", Bonus: 1.15},
            {Name: "Shining Sperrylite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Evaporite, QTY: 0.1},
            {Type: Minerals.Platinum, QTY: 0.4},
            
        ]
    },
    {
        Name: "Otavite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Otavite", Bonus: 1.15},
            {Name: "Shining Otavite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Atmospheric, QTY: 0.1},
            {Type: Minerals.Cadmium, QTY: 0.4},
            
        ]
    },
    {
        Name: "Chromite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Chromite", Bonus: 1.15},
            {Name: "Shining Chromite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Hydrocarbons, QTY: 0.1},
            {Type: Minerals.Chromium, QTY: 0.4},
            
        ]
    },
    {
        Name: "Zeolites",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Zeolites", Bonus: 1.15},
            {Name: "Shining Zeolites", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Hydrocarbons, QTY: 0.1},
            {Type: Minerals.Chromium, QTY: 0.4},
            
        ]
    },
    {
        Name: "Scheelite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Scheelite", Bonus: 1.15},
            {Name: "Shining Scheelite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Tungsten, QTY: 0.4},
            
        ]
    },
    {
        Name: "Vanadinite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Vanadinite", Bonus: 1.15},
            {Name: "Shining Vanadinite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Silicates, QTY: 0.1},
            {Type: Minerals.Vanadium, QTY: 0.4},
            
        ]
    },
    {
        Name: "Sylvite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Sylvite", Bonus: 1.15},
            {Name: "Shining Sylvite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Evaporite, QTY: 0.65},
            {Type: Minerals.Pyerite, QTY: 40},
            {Type: Minerals.Mexallon, QTY: 4},
        ]
    },
    {
        Name: "Titanite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Titanite", Bonus: 1.15},
            {Name: "Shining Titanite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Titanium, QTY: 0.4},
            
        ]
    },
    {
        Name: "Bitumens",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Bitumens", Bonus: 1.15},
            {Name: "Shining Bitumens", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Hydrocarbons, QTY: 0.65},
            {Type: Minerals.Pyerite, QTY: 0.4},
            {Type: Minerals.Mexallon, QTY: 0.4},
            
        ]
    },
    {
        Name: "Coesite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Coesite", Bonus: 1.15},
            {Name: "Shining Coesite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Silicates, QTY: 0.65},
            {Type: Minerals.Pyerite, QTY: 20},
            {Type: Minerals.Mexallon, QTY: 4},
            
        ]
    },
    {
        Name: "Cobaltite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Cobaltite", Bonus: 1.15},
            {Name: "Shining Cobaltite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Cobalt, QTY: 0.4},
            
        ]
    },
    {
        Name: "Euxenite",
        BuybackType: Buybacks.MoonOre,
        Varients: [
            {Name: "Bountiful Euxenite", Bonus: 1.15},
            {Name: "Shining Euxenite", Bonus: 2}
        ],
        Refined: [
            {Type: Minerals.Scandium, QTY: 0.4},
            
        ]
    },
/*
    //---- ICE
    {
        Name: "Blue Ice",
        BuybackType: Buybacks.Ice,
        Varients: [],
        Refined: [
            {Type: Minerals.HeavyWater, QTY: 69},
            {Type: Minerals.LiquidOzone, QTY: 35},
            {Type: Minerals.Strontium, QTY: 1},
            {Type: Minerals.OxygenIsotopes, QTY: 414},
        ]
    },
    {
        Name: "Thick Blue Ice",
        BuybackType: Buybacks.Ice,
        Varients: [],
        Refined: [
            {Type: Minerals.HeavyWater, QTY: 104},
            {Type: Minerals.LiquidOzone, QTY: 55},
            {Type: Minerals.Strontium, QTY: 1},
            {Type: Minerals.OxygenIsotopes, QTY: 483},
        ]
    },
    {
        Name: "Clear Icicle",
        BuybackType: Buybacks.Ice,
        Varients: [],
        Refined: [
            {Type: Minerals.HeavyWater, QTY: 69},
            {Type: Minerals.LiquidOzone, QTY: 35},
            {Type: Minerals.Strontium, QTY: 1},
            {Type: Minerals.HeliumIsotopes, QTY: 414},
        ]
    },
    {
        Name: "Enriched Clear Icicle",
        BuybackType: Buybacks.Ice,
        Varients: [],
        Refined: [
            {Type: Minerals.HeavyWater, QTY: 104},
            {Type: Minerals.LiquidOzone, QTY: 55},
            {Type: Minerals.Strontium, QTY: 1},
            {Type: Minerals.HeliumIsotopes, QTY: 483},
        ]
    },
    {
        Name: "Glacial Mass",
        BuybackType: Buybacks.Ice,
        Varients: [],
        Refined: [
            {Type: Minerals.HeavyWater, QTY: 69},
            {Type: Minerals.LiquidOzone, QTY: 35},
            {Type: Minerals.Strontium, QTY: 1},
            {Type: Minerals.HydrogenIsotopes, QTY: 414},
        ]
    },
    {
        Name: "Smooth Glacial Mass",
        BuybackType: Buybacks.Ice,
        Varients: [],
        Refined: [
            {Type: Minerals.HeavyWater, QTY: 104},
            {Type: Minerals.LiquidOzone, QTY: 55},
            {Type: Minerals.Strontium, QTY: 1},
            {Type: Minerals.HydrogenIsotopes, QTY: 483},
        ]
    },
    {
        Name: "White Glaze",
        BuybackType: Buybacks.Ice,
        Varients: [],
        Refined: [
            {Type: Minerals.HeavyWater, QTY: 69},
            {Type: Minerals.LiquidOzone, QTY: 35},
            {Type: Minerals.Strontium, QTY: 1},
            {Type: Minerals.HeliumIsotopes, QTY: 414},
        ]
    },
    {
        Name: "Pristine White Glaze",
        BuybackType: Buybacks.Ice,
        Varients: [],
        Refined: [
            {Type: Minerals.HeavyWater, QTY: 104},
            {Type: Minerals.LiquidOzone, QTY: 55},
            {Type: Minerals.Strontium, QTY: 1},
            {Type: Minerals.HeliumIsotopes, QTY: 483},
        ]
    },
    {
        Name: "Krystallos",
        BuybackType: Buybacks.Ice,
        Varients: [],
        Refined: [
            {Type: Minerals.HeavyWater, QTY: 173},
            {Type: Minerals.LiquidOzone, QTY: 691},
            {Type: Minerals.Strontium, QTY: 173},
        ]
    },
    {
        Name: "Glare Crust",
        BuybackType: Buybacks.Ice,
        Varients: [],
        Refined: [
            {Type: Minerals.HeavyWater, QTY: 1381},
            {Type: Minerals.LiquidOzone, QTY: 691},
            {Type: Minerals.Strontium, QTY: 35},
        ]
    },
    {
        Name: "Gelidus",
        BuybackType: Buybacks.Ice,
        Varients: [],
        Refined: [
            {Type: Minerals.HeavyWater, QTY: 345},
            {Type: Minerals.LiquidOzone, QTY: 691},
            {Type: Minerals.Strontium, QTY: 104},
        ]
    },
    {
        Name: "Dark Glitter",
        BuybackType: Buybacks.Ice,
        Varients: [],
        Refined: [
            {Type: Minerals.HeavyWater, QTY: 691},
            {Type: Minerals.LiquidOzone, QTY: 1381},
            {Type: Minerals.Strontium, QTY: 69},
        ]
    }
    */
]





