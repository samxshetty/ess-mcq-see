class ESSQuizApp {
    constructor() {
        this.questions = [
  {
    id: 1,
    question: "Energy conservation refers to:",
    options: ["Efficient and wise use of energy resources", "Using more energy", "Generating electricity using coal", "Avoiding renewable energy sources"],
    correct: 0
  },
  {
    id: 2,
    question: "Which device is used to convert sunlight directly into electricity?",
    options: ["Photovoltaic cell", "Wind turbine", "Hydroelectric dam", "Biomass generator"],
    correct: 0
  },
  {
    id: 3,
    question: "Which gas is mainly responsible for the greenhouse effect?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
    correct: 0
  },
  {
    id: 4,
    question: "Which renewable energy source is generated from organic matter?",
    options: ["Biomass", "Solar", "Wind", "Hydropower"],
    correct: 0
  },
  {
    id: 5,
    question: "Wind turbines convert:",
    options: ["Kinetic energy into electricity", "Solar energy into electricity", "Heat energy into electricity", "Mechanical energy into heat"],
    correct: 0
  },
  {
    id: 6,
    question: "Which is the cleanest renewable energy source?",
    options: ["Solar", "Coal", "Natural Gas", "Oil"],
    correct: 0
  },
  {
    id: 7,
    question: "What is biomass energy primarily derived from?",
    options: ["Organic matter", "Fossil fuels", "Nuclear reactions", "Wind"],
    correct: 0
  },
  {
    id: 8,
    question: "Which gas is produced during anaerobic digestion of biomass?",
    options: ["Methane", "Oxygen", "Carbon dioxide", "Nitrogen"],
    correct: 0
  },
  {
    id: 9,
    question: "Which process converts biomass into liquid biofuels?",
    options: ["Fermentation", "Photosynthesis", "Gasification", "Combustion"],
    correct: 0
  },
  {
    id: 10,
    question: "Bioethanol is mainly produced from:",
    options: ["Corn and sugarcane", "Wood", "Coal", "Solar energy"],
    correct: 0
  },
  {
    id: 11,
    question: "Which type of biomass energy technology produces heat and electricity directly by burning biomass?",
    options: ["Combustion", "Anaerobic digestion", "Gasification", "Fermentation"],
    correct: 0
  },
  {
    id: 12,
    question: "Energy efficiency means:",
    options: ["Using less energy to perform the same task", "Using energy wastefully", "Using more energy than required", "Replacing energy with fuel"],
    correct: 0
  },
  {
    id: 13,
    question: "Biodiesel is mainly produced from:",
    options: ["Vegetable oils and animal fats", "Coal", "Natural gas", "Wood"],
    correct: 0
  },
  {
    id: 14,
    question: "Hydrogen fuel cells convert:",
    options: ["Chemical energy into electricity", "Chemical energy directly into heat", "Electrical energy into mechanical energy", "Mechanical energy into chemical energy"],
    correct: 0
  },
  {
    id: 15,
    question: "Electrolysis of water produces hydrogen and:",
    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Methane"],
    correct: 0
  },
  {
    id: 16,
    question: "What is a major challenge of using hydrogen as a fuel?",
    options: ["Storage and transportation difficulties", "High carbon emissions", "Low energy content", "Limited fuel availability"],
    correct: 0
  },
  {
    id: 17,
    question: "Which of the following is NOT a common method of hydrogen production?",
    options: ["Combustion", "Electrolysis", "Steam methane reforming", "Biomass gasification"],
    correct: 0
  },
  {
    id: 18,
    question: "Fuel cells require:",
    options: ["Hydrogen and oxygen", "Constant supply of fossil fuels", "Nuclear fuel", "Coal"],
    correct: 0
  },
  {
    id: 19,
    question: "Tidal barrages work similarly to:",
    options: ["Hydroelectric dams", "Wind turbines", "Solar panels", "Geothermal plants"],
    correct: 0
  },
  {
    id: 20,
    question: "Which country operates the largest tidal power station?",
    options: ["South Korea", "United States", "Canada", "France"],
    correct: 0
  },
  {
    id: 21,
    question: "Ocean energy is considered:",
    options: ["Renewable", "Non-renewable", "Fossil fuel-based", "Polluting"],
    correct: 0
  },
  {
    id: 22,
    question: "Which device is used to harness energy from ocean waves?",
    options: ["Oscillating water column", "Pelton wheel", "Steam turbine", "Photovoltaic cells"],
    correct: 0
  },
  {
    id: 23,
    question: "Which device helps in energy conservation in homes?",
    options: ["LED light", "Incandescent bulb", "Diesel generator", "Ceiling fan"],
    correct: 0
  },
  {
    id: 24,
    question: "The unit used to measure tidal range is:",
    options: ["Meters", "Kilowatts", "Joules", "Pascals"],
    correct: 0
  },
  {
    id: 25,
    question: "Tidal energy is converted into electricity using:",
    options: ["Turbines", "Solar panels", "Gas engines", "Batteries"],
    correct: 0
  },
  {
    id: 26,
    question: "The height difference between high tide and low tide is called:",
    options: ["Tide range", "Wave height", "Tidal flow", "Tidal speed"],
    correct: 0
  },
  {
    id: 27,
    question: "What is the primary source of geothermal energy?",
    options: ["Heat from Earth's interior", "Sunlight", "Ocean currents", "Wind movement"],
    correct: 0
  },
  {
    id: 28,
    question: "Which of the following best describes the source of geothermal energy?",
    options: ["Radioactive decay of materials in Earth's core", "Photosynthesis", "Ocean waves", "Burning of coal"],
    correct: 0
  },
  {
    id: 29,
    question: "The first commercial geothermal power plant was established in:",
    options: ["1904", "1864", "1950", "1975"],
    correct: 0
  },
  {
    id: 30,
    question: "Which layer of the Earth is the hottest and contributes most to geothermal heat?",
    options: ["Inner core", "Crust", "Mantle", "Outer core"],
    correct: 0
  },
  {
    id: 31,
    question: "What type of rock is typically associated with geothermal activity?",
    options: ["Igneous", "Sedimentary", "Metamorphic", "Limestone"],
    correct: 0
  },
  {
    id: 32,
    question: "Geothermal energy is found most abundantly in:",
    options: ["Volcanic regions and tectonic plate boundaries", "Desert areas", "Coastal regions", "High-altitude mountains"],
    correct: 0
  },
  {
    id: 33,
    question: "The transfer of geothermal heat from the Earth's interior to the surface is primarily through:",
    options: ["Convection", "Radiation", "Conduction", "Evaporation"],
    correct: 0
  },
  {
    id: 34,
    question: "Which energy management technique involves studying energy usage patterns?",
    options: ["ENERGY AUDIT", "Billing system", "Fuel combustion", "Load shedding"],
    correct: 0
  },
  {
    id: 35,
    question: "THE MAIN OBJECTIVE OF ENERGY MANAGEMENT IS:",
    options: ["TO OPTIMIZE ENERGY USE AND REDUCE WASTAGE", "TO INCREASE CONSUMPTION OF ENERGY", "TO PROMOTE ONLY FOSSIL FUELS", "TO STOP INDUSTRIAL GROWTH"],
    correct: 0
  },
  {
    id: 36,
    question: "THE FIRST STEP IN AN ENERGY MANAGEMENT PROGRAM IS:",
    options: ["ENERGY AUDIT", "ENERGY CONSERVATION", "INSTALLATION OF RENEWABLE ENERGY SYSTEMS", "MONITORING AND TARGETING"],
    correct: 0
  },
  {
    id: 37,
    question: "EXAMPLE OF ENERGY CONSERVATION IN HOUSEHOLDS:",
    options: ["INSTALLING SOLAR WATER HEATERS", "USING AN OVERSIZED AIR-CONDITIONER", "KEEPING LIGHTS ON DURING THE DAY", "USING INCANDESCENT BULBS"],
    correct: 0
  },
  {
    id: 38,
    question: "MAIN ADVANTAGE OF COGENERATION (CHP):",
    options: ["SIMULTANEOUS PRODUCTION OF HEAT AND ELECTRICITY", "INCREASED GREENHOUSE GAS EMISSIONS", "REDUCED RELIABILITY OF SUPPLY", "HIGHER TRANSMISSION LOSSES"],
    correct: 0
  },
  {
    id: 39,
    question: "PRIMARY GOAL OF ENERGY MANAGEMENT:",
    options: ["REDUCE ENERGY COSTS AND IMPROVE EFFICIENCY", "INCREASE ENERGY CONSUMPTION", "PROMOTE FOSSIL FUEL USAGE", "ELIMINATE RENEWABLE ENERGY SOURCES"],
    correct: 0
  },
  {
    id: 40,
    question: "TOOL USED IN ENERGY MANAGEMENT:",
    options: ["ENERGY AUDIT", "THERMOMETER", "BAROMETER", "ALTIMETER"],
    correct: 0
  },
  {
    id: 41,
    question: "BENEFIT OF ENERGY AUDIT:",
    options: ["IDENTIFY ENERGY-SAVING OPPORTUNITIES", "INCREASE ELECTRICITY BILLS", "PROMOTE ENERGY WASTAGE", "REDUCE EMPLOYEE PRODUCTIVITY"],
    correct: 0
  },
  {
    id: 42,
    question: "MAIN GOAL OF ENERGY CONSERVATION:",
    options: ["REDUCE ENERGY CONSUMPTION AND WASTE", "INCREASE ENERGY PRODUCTION", "PROMOTE FOSSIL FUEL USAGE", "MAXIMIZE ELECTRICITY BILLS"],
    correct: 0
  },
  {
    id: 43,
    question: "MOST ENERGY-EFFICIENT LIGHTING APPLIANCE:",
    options: ["LED", "INCANDESCENT BULB", "HALOGEN LAMP", "CFL"],
    correct: 0
  },
  {
    id: 44,
    question: "NEED TO EXPLORE NEW ENERGY SOURCES:",
    options: ["REDUCE ENVIRONMENTAL POLLUTION AND ENSURE SUSTAINABILITY", "INCREASE FOSSIL FUEL CONSUMPTION", "MAINTAIN CURRENT USAGE PATTERNS", "AVOID TECHNOLOGICAL ADVANCEMENT"],
    correct: 0
  },
  {
    id: 45,
    question: "The energy conservation act in India was passed in:",
    options: ["2001", "1995", "2010", "2005"],
    correct: 0
  },
  {
    id: 46,
    question: "MAJOR DRAWBACK OF FOSSIL FUELS:",
    options: ["CAUSE POLLUTION AND ARE NON-RENEWABLE", "RENEWABLE", "ABUNDANT AND CLEAN", "USED IN SOLAR PANELS"],
    correct: 0
  },
  {
    id: 47,
    question: "KEY BENEFIT OF RENEWABLE ENERGY SOURCES:",
    options: ["CLEAN AND SUSTAINABLE", "LIMITED AND EXPENSIVE", "EMIT HIGH CO2", "REQUIRE FOSSIL FUELS"],
    correct: 0
  },
  {
    id: 48,
    question: "GLOBAL ISSUE DRIVING SHIFT TO NEW ENERGY SOURCES:",
    options: ["CLIMATE CHANGE AND GLOBAL WARMING", "INCREASED RAINFALL", "POPULATION DECLINE", "IMPROVED FOSSIL FUELS"],
    correct: 0
  },
  {
    id: 49,
    question: "NOT A TYPE OF PRIMARY RESOURCE:",
    options: ["HYDROGEN ENERGY", "CRUDE OIL", "COAL", "SUNLIGHT"],
    correct: 0
  },
  {
    id: 50,
    question: "PRIMARY CHARACTERISTIC OF RENEWABLE ENERGY:",
    options: ["CAN BE USED INDEFINITELY WITHOUT DEPLETION", "DERIVED FROM FOSSIL FUELS", "REQUIRES LONG TIME TO REPLENISH", "CAUSES SIGNIFICANT POLLUTION"],
    correct: 0
  },
  {
    id: 51,
    question: "MAIN ENVIRONMENTAL BENEFIT OF RENEWABLE ENERGY:",
    options: ["DECREASED GREENHOUSE GAS EMISSIONS", "INCREASED DEFORESTATION", "INCREASED AIR POLLUTION", "DEPLETION OF NATURAL RESOURCES"],
    correct: 0
  },
  {
    id: 52,
    question: "SOLAR ENERGY IS:",
    options: ["RENEWABLE AND NON-CONVENTIONAL", "NON-RENEWABLE AND NON-CONVENTIONAL", "RENEWABLE AND CONVENTIONAL", "NON-RENEWABLE"],
    correct: 0
  },
  {
    id: 53,
    question: "DEMAND FOR RENEWABLE SOURCES:",
    options: ["LOW OR ZERO CARBON FOOTPRINT", "EMIT GREENHOUSE GASES", "MORE EFFICIENT", "DECREASING GLOBAL TEMPERATURES"],
    correct: 0
  },
  {
    id: 54,
    question: "TRUE ABOUT MOST RENEWABLE ENERGY SOURCES:",
    options: ["LOCATION-SPECIFIC", "UNIVERSALLY AVAILABLE", "HIGHLY EFFICIENT", "POLLUTING"],
    correct: 0
  },
  {
    id: 55,
    question: "RENEWABLE SOURCE USING EARTH'S INTERNAL HEAT:",
    options: ["GEOTHERMAL", "BIOMASS", "SOLAR", "TIDAL"],
    correct: 0
  },
  {
    id: 56,
    question: "Which body is responsible for energy efficiency in India?",
    options: ["BEE", "SEBI", "RBI", "ISRO"],
    correct: 0
  },
  {
    id: 57,
    question: "MAJOR ADVANTAGE OF RENEWABLE ENERGY:",
    options: ["LONG-TERM SUSTAINABILITY", "RAPID DEPLETION", "HIGH EMISSIONS", "LIMITED AVAILABILITY"],
    correct: 0
  },
  {
    id: 58,
    question: "RENEWABLE ENERGY USING PHOTOVOLTAIC CELLS:",
    options: ["SOLAR", "WIND", "GEOTHERMAL", "BIOMASS"],
    correct: 0
  },
  {
    id: 59,
    question: "HYDROPOWER CONVERTS:",
    options: ["KINETIC AND POTENTIAL ENERGY OF WATER", "SOLAR ENERGY", "CHEMICAL ENERGY", "WIND ENERGY"],
    correct: 0
  },
  {
    id: 60,
    question: "DISADVANTAGE OF SOLAR ENERGY:",
    options: ["LIMITED SUNLIGHT IN SOME AREAS", "EMITS GREENHOUSE GASES", "CAUSES NOISE POLLUTION", "DEPLETES NATURAL RESOURCES"],
    correct: 0
  },
  {
    id: 61,
    question: "FERMENTATION IN BIOGAS PLANT OCCURS AT:",
    options: ["30–50°C", "35–50°C", "85–15°C", "NONE"],
    correct: 0
  },
  {
    id: 62,
    question: "COMMONLY USED IN FERMENTATION:",
    options: ["YEAST", "BACTERIA", "MUSHROOMS", "VIRUS"],
    correct: 0
  },
  {
    id: 63,
    question: "SOLID BIOMASS EXAMPLE:",
    options: ["AGRICULTURAL RESIDUES", "WASTEWATER", "INDUSTRIAL EFFLUENTS", "PLASTIC"],
    correct: 0
  },
  {
    id: 64,
    question: "HYDROGEN PRODUCED COMMERCIALLY BY:",
    options: ["BOTH CRACKING AMMONIA AND ELECTROLYSIS OF WATER", "CRACKING AMMONIA", "ELECTROLYSIS OF WATER", "GASIFICATION"],
    correct: 0
  },
  {
    id: 65,
    question: "HYDROGEN IS USED IN:",
    options: ["FUEL CELLS", "FOSSIL FUELS", "ANAEROBIC DIGESTION", "COOKING"],
    correct: 0
  },
  {
    id: 66,
    question: "HYDROGEN IS HAZARDOUS BECAUSE:",
    options: ["LOW IGNITION, HIGH COMBUSTION", "HIGH IGNITION, LOW COMBUSTION", "HIGH IGNITION, HIGH COMBUSTION", "LOW IGNITION, LOW COMBUSTION"],
    correct: 0
  },
  {
    id: 67,
    question: "Energy Star label on an appliance indicates:",
    options: ["Energy efficiency", "Poor performance", "Low price", "Low warranty"],
    correct: 0
  },
  {
    id: 68,
    question: "CATALYTIC LIQUEFACTION OCCURS AT:",
    options: ["LOW TEMP, HIGH PRESSURE", "LOW TEMP, LOW PRESSURE", "HIGH TEMP, HIGH PRESSURE", "HIGH TEMP, LOW PRESSURE"],
    correct: 0
  },
  {
    id: 69,
    question: "NOT AN OCEAN ENERGY RESOURCE:",
    options: ["GEOTHERMAL", "TIDAL", "WAVE", "OCEAN THERMAL"],
    correct: 0
  },
  {
    id: 70,
    question: "PRINCIPLE OF OTEC:",
    options: ["TEMP DIFFERENCE BETWEEN SURFACE AND DEEP WATER", "HIGH SALINITY", "OCEAN CURRENTS", "SEA WAVE ACTION"],
    correct: 0
  },
  {
    id: 71,
    question: "CAUSE OF WAVE ENERGY:",
    options: ["WIND ACROSS SEA SURFACE", "OCEAN CURRENTS", "EARTH'S ROTATION", "TIDES"],
    correct: 0
  },
  {
    id: 72,
    question: "MAIN LIMITATION OF OCEAN ENERGY:",
    options: ["HIGH CAPITAL COST", "HIGH POLLUTION", "ABUNDANT", "EASY CONVERSION"],
    correct: 0
  },
  {
    id: 73,
    question: "INDIA'S FIRST WAVE ENERGY PROJECT:",
    options: ["VIZHINJAM", "CHENNAI", "MUMBAI", "GOA"],
    correct: 0
  },
  {
    id: 74,
    question: "CAUSE OF TIDES:",
    options: ["GRAVITATIONAL PULL OF MOON AND SUN", "EARTH ROTATION", "OCEAN CURRENTS", "WIND"],
    correct: 0
  },
  {
    id: 75,
    question: "COMMON METHOD OF TIDAL POWER GENERATION:",
    options: ["TIDAL BARRAGE", "OTEC", "FLOATING SOLAR", "OFFSHORE WIND"],
    correct: 0
  },
  {
    id: 76,
    question: "SINGLE-BASIN TIDAL PLANT WORKS ON:",
    options: ["ONE-WAY FLOW", "TWO-WAY FLOW", "ONLY HIGH TIDE", "ONLY LOW TIDE"],
    correct: 0
  },
  {
    id: 77,
    question: "MAIN COMPONENT CONVERTING TIDAL ENERGY:",
    options: ["TIDAL TURBINE", "HEAT EXCHANGER", "WAVE CONVERTER", "SOLAR PANEL"],
    correct: 0
  },
  {
    id: 78,
    question: "One unit of electricity is equal to:",
    options: ["1 kilowatt-hour", "1 kilowatt", "1 watt", "1 megawatt"],
    correct: 0
  },
  {
    id: 79,
    question: "ADVANTAGE OF TIDAL ENERGY:",
    options: ["PREDICTABLE", "HIGH EMISSIONS", "SHORT PLANT LIFE", "NEEDS FUEL"],
    correct: 0
  },
  {
    id: 80,
    question: "'GEOTHERMAL' WORD ORIGIN:",
    options: ["GREEK", "LATIN", "FRENCH", "GERMAN"],
    correct: 0
  },
  {
    id: 81,
    question: "GEOTHERMAL ENERGY USED FOR:",
    options: ["HEATING, COOLING, ELECTRICITY", "SOLAR POWER", "TIDAL ENERGY", "WIND ENERGY"],
    correct: 0
  },
  {
    id: 82,
    question: "HIGH-TEMPERATURE GEOTHERMAL RESOURCE:",
    options: [">150°C", "<90°C", "90–150°C", "30–60°C"],
    correct: 0
  },
  {
    id: 83,
    question: "SOURCE OF GEOTHERMAL HEAT:",
    options: ["RESIDUAL HEAT AND RADIOACTIVE DECAY", "SUNLIGHT", "OCEAN CURRENTS", "WIND"],
    correct: 0
  },
  {
    id: 84,
    question: "ISOTOPES RESPONSIBLE FOR GEOTHERMAL HEAT:",
    options: ["U-238, TH-232, K-40", "C-14, U-235, HE-3", "NA-22, CL-37, O-18", "H-1, HE-4, AR-36"],
    correct: 0
  },
  {
    id: 85,
    question: "NOT LINKED TO GEOTHERMAL:",
    options: ["SAND DUNES", "HOT ROCKS", "VOLCANIC AREAS", "FAULTS"],
    correct: 0
  },
  {
    id: 86,
    question: "HYDROTHERMAL RESERVOIRS CONSIST OF:",
    options: ["HOT WATER OR STEAM IN POROUS ROCKS", "COLD WATER", "FROZEN WATER", "SAND"],
    correct: 0
  },
  {
    id: 87,
    question: "ARTIFICIAL WATER INJECTION NEEDED IN:",
    options: ["HOT DRY ROCK SYSTEMS", "HYDROTHERMAL", "GEOPRESSURIZED", "OCEAN THERMAL"],
    correct: 0
  },
  {
    id: 88,
    question: "MOST COMMON GEOTHERMAL POWER PLANT:",
    options: ["FLASH STEAM", "DRY STEAM", "BINARY CYCLE", "HYBRID"],
    correct: 0
  },
  {
    id: 89,
    question: "Which of the following is a renewable energy source?",
    options: ["Solar Energy", "Coal", "Natural Gas", "Nuclear Energy"],
    correct: 0
  },
  {
    id: 90,
    question: "BINARY CYCLE PLANTS SUITABLE FOR:",
    options: ["MEDIUM & LOW-TEMP", "HIGH-TEMP", "ONLY VOLCANIC", "OCEAN GEOTHERMAL"],
    correct: 0
  },
  {
    id: 91,
    question: "INJECTION WELLS USED FOR:",
    options: ["RETURNING COOLED WATER", "COOLING TURBINES", "EXTRACTING STEAM", "SEPARATING MINERALS"],
    correct: 0
  },
  {
    id: 92,
    question: "MAJOR ADVANTAGE OF GEOTHERMAL:",
    options: ["PROVIDES BASELOAD POWER", "HIGHLY POLLUTING", "ONLY DAYTIME AVAILABILITY", "LARGE LAND REQUIREMENT"],
    correct: 0
  },
  {
    id: 93,
    question: "OPERATIONAL LIFESPAN OF GEOTHERMAL PLANT:",
    options: ["MORE THAN 30 YEARS", "5–10 YEARS", "10–15 YEARS", "20–25 YEARS"],
    correct: 0
  },
  {
    id: 94,
    question: "MAJOR CHALLENGE IN GEOTHERMAL:",
    options: ["HIGH INITIAL COSTS", "NO DRILLING NEEDED", "ONLY IN DESERTS", "PRODUCES LARGE CO2"],
    correct: 0
  },

  {
    id: 95,
    question: "Which of the following is not an abiotic component of an ecosystem?",
    options: ["Bacteria", "Temperature", "Soil", "Water"],
    correct: 0
  },
  {
    id: 96,
    question: "In the 10% law of energy flow, if plants capture 10,000 kcal of energy, how much will be available to herbivores?",
    options: ["1000 kcal", "10 kcal", "1,000 kcal", "5,000 kcal"],
    correct: 0
  },
  {
    id: 97,
    question: "Which organization monitors environmental issues globally?",
    options: ["UNEP", "WHO", "UNICEF", "UNESCO"],
    correct: 0
  },
  {
    id: 98,
    question: "Which term refers to the variety of life on Earth?",
    options: ["Biodiversity", "Ecology", "Habitat", "Conservation"],
    correct: 0
  },
  {
    id: 99,
    question: "What does the 3Rs principle stand for?",
    options: ["Reduce, Reuse, Recycle", "Rebuild, Reuse, Reboot", "Reduce, Recycle, Recover", "Recycle, Reuse, Repeat"],
    correct: 0
  },
  {
    id: 100,
    question: "The Environment (Protection) Act was enacted in which year?",
    options: ["1986", "1972", "1992", "2000"],
    correct: 0
  },
  {
    id: 101,
    question: "World Environment Day is celebrated on:",
    options: ["June 5", "April 1", "December 1", "March 1"],
    correct: 0
  },
  {
    id: 102,
    question: "The Environment (Protection) Act was enacted after which global event?",
    options: ["Bhopal Gas Tragedy", "Rio Earth Summit", "Kyoto Protocol", "Stockholm Conference"],
    correct: 0
  },
  {
    id: 103,
    question: "The most common indicator of water pollution is:",
    options: ["Dissolved Oxygen", "pH", "Salinity", "Conductivity"],
    correct: 0
  },
  {
    id: 104,
    question: "Which parameter indicates the amount of oxygen required by microorganisms to decompose organic matter?",
    options: ["BOD", "COD", "DO", "TOC"],
    correct: 0
  },
  {
    id: 105,
    question: "COD in water represents:",
    options: ["Oxygen required to oxidize organic & inorganic matter chemically", "Oxygen used by microorganisms", "Oxygen dissolved in water", "Oxygen consumed by fish"],
    correct: 0
  },
  {
    id: 106,
    question: "Which type of waste increases BOD levels in water?",
    options: ["Organic waste", "Plastic waste", "Heavy metals", "Salts"],
    correct: 0
  },
  {
    id: 107,
    question: "Which of the following is a biotic component of an ecosystem?",
    options: ["Fungi", "Light", "Temperature", "Water"],
    correct: 0
  },
  {
    id: 108,
    question: "High BOD in a river indicates:",
    options: ["Heavy organic pollution", "Good water quality", "High dissolved oxygen", "Low organic load"],
    correct: 0
  },
  {
    id: 109,
    question: "Dissolved Oxygen (DO) is essential for:",
    options: ["Aquatic life survival", "Maintaining pH", "Reducing hardness", "Neutralizing toxins"],
    correct: 0
  },
  {
    id: 110,
    question: "Typical BOD of clean drinking water is:",
    options: ["< 1 mg/L", "10 mg/L", "50 mg/L", "100 mg/L"],
    correct: 0
  },
  {
    id: 111,
    question: "When sewage is discharged into water, DO levels:",
    options: ["Decrease", "Increase", "Remain constant", "Become zero immediately"],
    correct: 0
  },
  {
    id: 112,
    question: "The presence of high COD compared to BOD indicates:",
    options: ["Presence of toxic pollutants", "Only biodegradable waste", "No pollution", "Absence of chemicals"],
    correct: 0
  },
  {
    id: 113,
    question: "Major source of organic pollution in rivers is:",
    options: ["Domestic sewage", "Industrial salts", "Thermal pollution", "Mining"],
    correct: 0
  },
  {
    id: 114,
    question: "In a polluted river, DO levels are usually:",
    options: ["< 4 mg/L", "8–10 mg/L", "12–15 mg/L", "> 20 mg/L"],
    correct: 0
  },
  {
    id: 115,
    question: "Eutrophication of lakes is mainly due to:",
    options: ["Excess nutrients (N, P)", "High DO", "Low COD", "Neutral pH"],
    correct: 0
  },
  {
    id: 116,
    question: "Which unit is used to express BOD and COD?",
    options: ["mg/L", "g/L", "ppm", "%"],
    correct: 0
  },
  {
    id: 117,
    question: "DO in water is replenished mainly by:",
    options: ["Photosynthesis & Atmospheric diffusion", "Sedimentation", "Decomposition", "Oxidation"],
    correct: 0
  },
  {
    id: 118,
    question: "The primary source of energy driving ecological cycles is:",
    options: ["Solar radiation", "Wind", "Soil minerals", "Water cycle"],
    correct: 0
  },
  {
    id: 119,
    question: "The self-purification of rivers is due to:",
    options: ["Re-aeration & microbial degradation", "COD increase", "Acidification", "Evaporation"],
    correct: 0
  },
  {
    id: 120,
    question: "Which is more rapid as a test for pollution?",
    options: ["COD test", "BOD test", "DO test", "pH test"],
    correct: 0
  },
  {
    id: 121,
    question: "If BOD = 300 mg/L in wastewater, the water quality is:",
    options: ["Highly polluted", "Clean", "Moderately polluted", "Potable"],
    correct: 0
  },
  {
    id: 122,
    question: "The most important parameter for measuring organic pollution load is:",
    options: ["BOD", "Hardness", "Turbidity", "Alkalinity"],
    correct: 0
  },
  {
    id: 123,
    question: "The major pollutant responsible for acid rain is:",
    options: ["SO₂", "CO₂", "O₃", "CH₄"],
    correct: 0
  },
  {
    id: 124,
    question: "Photochemical smog is mainly caused by:",
    options: ["NOx and hydrocarbons", "CO₂ and SO₂", "CO and CO₂", "O₂ and N₂"],
    correct: 0
  },
  {
    id: 125,
    question: "The Air Quality Index (AQI) indicates:",
    options: ["Level of air pollution affecting health", "Temperature variation", "Rainfall prediction", "Wind speed"],
    correct: 0
  },
  {
    id: 126,
    question: "The most harmful type of particulate matter for human lungs is:",
    options: ["PM2.5", "PM10", "PM100", "Dust particles > 100 µm"],
    correct: 0
  },
  {
    id: 127,
    question: "The disease 'Black lung disease' is associated with:",
    options: ["Coal miners (particulates)", "Tobacco smoke", "Lead poisoning", "Asbestos"],
    correct: 0
  },
  {
    id: 128,
    question: "Ozone in the stratosphere is:",
    options: ["Beneficial, absorbs UV rays", "Harmful, greenhouse gas", "Cause of smog", "A heavy metal"],
    correct: 0
  },
  {
    id: 129,
    question: "The second law of thermodynamics explains why:",
    options: ["Energy transfer between trophic levels is inefficient", "Energy can be recycled in ecosystems", "Nutrients are lost in food chains", "Decomposers cannot recycle minerals"],
    correct: 0
  },
  {
    id: 130,
    question: "Ozone in the troposphere is:",
    options: ["Harmful air pollutant", "Protective layer", "Neutral gas", "Not significant"],
    correct: 0
  },
  {
    id: 131,
    question: "Carbon monoxide pollution mainly affects:",
    options: ["Oxygen transport in blood", "Nervous system", "Vision", "Bones"],
    correct: 0
  },
  {
    id: 132,
    question: "The main pollutant from automobiles is:",
    options: ["Carbon monoxide", "Sulphur dioxide", "Methane", "CFCs"],
    correct: 0
  },
  {
    id: 133,
    question: "Which gas causes respiratory irritation and bronchitis?",
    options: ["SO₂", "CO₂", "CH₄", "H₂"],
    correct: 0
  },
  {
    id: 134,
    question: "Which of the following is a greenhouse gas?",
    options: ["CO₂", "N₂", "Ar", "O₂"],
    correct: 0
  },
  {
    id: 135,
    question: "The Bhopal gas tragedy (1984) was caused by leakage of:",
    options: ["Methyl isocyanate (MIC)", "Ammonia", "SO₂", "Chlorine"],
    correct: 0
  },
  {
    id: 136,
    question: "Lead pollution in air mainly comes from:",
    options: ["Old vehicle exhaust (leaded petrol)", "Nuclear plants", "Forest fires", "Soil erosion"],
    correct: 0
  },
  {
    id: 137,
    question: "The colorless, odorless, toxic gas that binds to hemoglobin is:",
    options: ["Carbon monoxide", "Methane", "Sulphur dioxide", "Nitrous oxide"],
    correct: 0
  },
  {
    id: 138,
    question: "AQI value above 400 indicates:",
    options: ["Severe pollution", "Good air quality", "Moderate air quality", "Satisfactory"],
    correct: 0
  },
  {
    id: 139,
    question: "Which pollutant damages the nervous system, especially in children?",
    options: ["Lead", "SO₂", "CO₂", "O₃"],
    correct: 0
  },
  {
    id: 140,
    question: "Which ecosystem has the highest net primary productivity per unit area?",
    options: ["Tropical rainforest", "Coral reefs", "Open ocean", "Desert scrub"],
    correct: 0
  },
  {
    id: 141,
    question: "The major cause of soil pollution is:",
    options: ["Excessive use of chemicals (pesticides, fertilizers)", "Waterlogging", "Wind erosion", "Soil organisms"],
    correct: 0
  },
  {
    id: 142,
    question: "Soil pollution by heavy metals mainly comes from:",
    options: ["Industrial effluents", "Biomass burning", "Oxygen depletion", "Acid rain"],
    correct: 0
  },
  {
    id: 143,
    question: "Excess nitrate in soil leads to:",
    options: ["Groundwater pollution", "Ozone depletion", "Acid rain", "Soil erosion"],
    correct: 0
  },
  {
    id: 144,
    question: "Which of the following is not a biodegradable solid waste?",
    options: ["Plastic", "Paper", "Food waste", "Wood"],
    correct: 0
  },
  {
    id: 145,
    question: "Municipal solid waste (MSW) in India is largely composed of:",
    options: ["Organic matter", "Plastic", "Metal", "Glass"],
    correct: 0
  },
  {
    id: 146,
    question: "The process of controlled burning of solid waste at high temperatures is:",
    options: ["Incineration", "Composting", "Landfilling", "Vermiculture"],
    correct: 0
  },
  {
    id: 147,
    question: "The process of converting organic waste into manure is:",
    options: ["Composting", "Incineration", "Recycling", "Gasification"],
    correct: 0
  },
  {
    id: 148,
    question: "Sanitary landfills are used for:",
    options: ["Safe disposal of solid waste", "Irrigation", "Mining", "Soil erosion control"],
    correct: 0
  },
  {
    id: 149,
    question: "Biomedical waste should be disposed of by:",
    options: ["Incineration", "Composting", "Open dumping", "Landfilling"],
    correct: 0
  },
  {
    id: 150,
    question: "Which is considered hazardous waste?",
    options: ["E-waste", "Food waste", "Paper waste", "Yard waste"],
    correct: 0
  },
  {
    id: 151,
    question: "The pyramids of number in a grassland ecosystem is usually:",
    options: ["Upright", "Inverted", "Spindle-shaped", "Irregular"],
    correct: 0
  },
  {
    id: 152,
    question: "E-waste mainly contains:",
    options: ["Toxic heavy metals and plastics", "Only organic matter", "Pure biodegradable compounds", "Harmless salts"],
    correct: 0
  },
  {
    id: 153,
    question: "Which metal is most common in e-waste?",
    options: ["Lead", "Sodium", "Calcium", "Potassium"],
    correct: 0
  },
  {
    id: 154,
    question: "Mercury pollution in soil is commonly associated with:",
    options: ["Electronic waste", "Textile industry", "Agriculture", "Forest fires"],
    correct: 0
  },
  {
    id: 155,
    question: "The best method of managing biodegradable solid waste is:",
    options: ["Composting", "Open dumping", "Burning", "Deep burial"],
    correct: 0
  },
  {
    id: 156,
    question: "Which electronic device contributes the maximum to e-waste in India?",
    options: ["Mobile phones & computers", "Refrigerators", "Air conditioners", "Printers"],
    correct: 0
  },
  {
    id: 157,
    question: "Which method is most eco-friendly for solid waste management?",
    options: ["Reduce, Reuse, Recycle (3Rs)", "Open dumping", "Incineration", "Landfilling"],
    correct: 0
  },
  {
    id: 158,
    question: "The term 'environment' refers to:",
    options: ["THE PHYSICAL AND BIOLOGICAL SURROUNDINGS OF ALL LIVING ORGANISMS", "ONLY AIR AND WATER", "ONLY PLANTS AND ANIMALS", "CLIMATE ALONE"],
    correct: 0
  },
  {
    id: 159,
    question: "Which of the following is not included in the scope of environment?",
    options: ["MOBILE PHONE MODELS", "NATURAL RESOURCES", "POLLUTION CONTROL", "CULTURAL HERITAGE"],
    correct: 0
  },
  {
    id: 160,
    question: "Which of the following best explains the scope of environmental studies?",
    options: ["STUDY OF ALL INTERACTIONS BETWEEN LIVING AND NON-LIVING COMPONENTS", "STUDY OF SOIL ONLY", "STUDY OF CHEMISTRY ONLY", "STUDY OF FORESTS ONLY"],
    correct: 0
  },
  {
    id: 161,
    question: "The scope of environment includes the study of:",
    options: ["AIR, WATER, SOIL, AND LIVING ORGANISMS", "ONLY HUMAN ACTIVITIES", "ONLY WILDLIFE", "ONLY NATURAL DISASTERS"],
    correct: 0
  },
  {
    id: 162,
    question: "Which one of the following statements is false?",
    options: ["Decomposers are absent in aquatic ecosystems", "Energy flow in an ecosystem is unidirectional", "Matter cycles within an ecosystem", "Herbivores are primary consumers"],
    correct: 0
  },
  {
    id: 163,
    question: "Which statement is correct about the definition of environment?",
    options: ["ENVIRONMENT IS THE SUM TOTAL OF EXTERNAL FACTORS INFLUENCING AN ORGANISM", "ENVIRONMENT MEANS ONLY PHYSICAL FACTORS", "ENVIRONMENT INCLUDES ONLY SOCIAL CONDITIONS", "ENVIRONMENT IS UNRELATED TO HUMAN ACTIVITIES"],
    correct: 0
  },
  {
    id: 164,
    question: "The interdisciplinary nature of environmental studies means it connects with:",
    options: ["NATURAL SCIENCES, SOCIAL SCIENCES, AND ENGINEERING", "ONLY BIOLOGY", "ONLY GEOGRAPHY", "ONLY ECONOMICS"],
    correct: 0
  },
  {
    id: 165,
    question: "Scope of environmental studies does not include:",
    options: ["TECHNOLOGICAL PROGRESS UNRELATED TO ECOLOGY", "CONSERVATION OF NATURAL RESOURCES", "SUSTAINABLE DEVELOPMENT", "ENVIRONMENTAL POLLUTION CONTROL"],
    correct: 0
  },
  {
    id: 166,
    question: "Which of the following describes the man-environment relationship?",
    options: ["HUMAN SURVIVAL AND DEVELOPMENT DEPEND ON ENVIRONMENT", "HUMANS ARE SEPARATE FROM THE ENVIRONMENT", "ENVIRONMENT HAS NO IMPACT ON HUMANS", "TECHNOLOGY HAS ELIMINATED HUMAN DEPENDENCE ON ENVIRONMENT"],
    correct: 0
  },
  {
    id: 167,
    question: "Which of the following is the ultimate aim of environmental studies?",
    options: ["ENVIRONMENTAL PROTECTION AND SUSTAINABLE DEVELOPMENT", "INDUSTRIAL GROWTH", "ECONOMIC COMPETITION", "URBANIZATION"],
    correct: 0
  },
  {
    id: 168,
    question: "Why is the environment important for human survival?",
    options: ["SUPPLIES NATURAL RESOURCES LIKE AIR, WATER, AND FOOD", "PROVIDES ENTERTAINMENT", "ONLY FOR TOURISM", "REDUCES POPULATION"],
    correct: 0
  },
  {
    id: 169,
    question: "Which of the following is a direct benefit of a healthy environment?",
    options: ["BALANCED ECOSYSTEM", "INCREASED DISEASES", "GLOBAL WARMING", "HABITAT DESTRUCTION"],
    correct: 0
  },
  {
    id: 170,
    question: "Forests are called the 'lungs of the Earth' because they:",
    options: ["ABSORB CARBON DIOXIDE AND RELEASE OXYGEN", "PRODUCE FOOD FOR ALL ANIMALS", "ATTRACT RAINFALL ONLY", "PROVIDE TIMBER ALONE"],
    correct: 0
  },
  {
    id: 171,
    question: "Why is biodiversity important?",
    options: ["IT MAINTAINS ECOLOGICAL BALANCE", "IT INCREASES POLLUTION", "IT DECREASES FOOD SUPPLY", "IT CAUSES CLIMATE CHANGE"],
    correct: 0
  },
  {
    id: 172,
    question: "Which of the following is an example of an ecosystem service?",
    options: ["FRESHWATER SUPPLY", "SOIL EROSION", "GLOBAL WARMING", "OZONE DEPLETION"],
    correct: 0
  },
  {
    id: 173,
    question: "A self-sustaining natural ecosystem is:",
    options: ["Pond", "Agricultural field", "Aquarium", "Garden"],
    correct: 0
  },
  {
    id: 174,
    question: "How does a clean environment contribute to human health?",
    options: ["REDUCES SPREAD OF DISEASES", "CAUSES RESPIRATORY PROBLEMS", "INCREASES POLLUTION", "INCREASES STRESS"],
    correct: 0
  },
  {
    id: 175,
    question: "Why should we conserve the environment for future generations?",
    options: ["TO PRESERVE RESOURCES AND BIODIVERSITY", "TO INCREASE DEFORESTATION", "TO CAUSE MORE URBANIZATION", "TO REDUCE OXYGEN LEVELS"],
    correct: 0
  },
  {
    id: 176,
    question: "Which of the following best describes the importance of public awareness in environmental protection?",
    options: ["ENCOURAGES SUSTAINABLE PRACTICES", "HELPS PEOPLE IGNORE POLLUTION", "PROMOTES INDUSTRIAL WASTE DUMPING", "SUPPORTS OVEREXPLOITATION OF RESOURCES"],
    correct: 0
  },
  {
    id: 177,
    question: "How does climate change prove the importance of environmental protection?",
    options: ["IT HIGHLIGHTS THE CONSEQUENCES OF IGNORING NATURE", "IT SHOWS RESOURCES ARE UNLIMITED", "IT REDUCES GLOBAL TEMPERATURES", "IT IMPROVES SOIL FERTILITY"],
    correct: 0
  },
  {
    id: 178,
    question: "Which natural resource is essential for all living organisms and must be conserved?",
    options: ["WATER", "GOLD", "PETROLEUM", "PLASTIC"],
    correct: 0
  },
  {
    id: 179,
    question: "The need for public awareness in environment and biodiversity is emphasized in:",
    options: ["AGENDA 21 OF THE EARTH SUMMIT (1992)", "WORLD WAR II AGREEMENTS", "INDUSTRIAL REVOLUTION POLICIES", "NONE OF THESE"],
    correct: 0
  },
  {
    id: 180,
    question: "Which of the following is not a reason for creating public awareness about the environment?",
    options: ["TO PROMOTE DEFORESTATION FOR ECONOMIC GROWTH", "TO CONSERVE BIODIVERSITY", "TO MINIMIZE POLLUTION", "TO ACHIEVE SUSTAINABLE DEVELOPMENT"],
    correct: 0
  },
  {
    id: 181,
    question: "Public awareness about biodiversity is important mainly to:",
    options: ["PROTECT ENDANGERED SPECIES", "INCREASE HUNTING OF WILDLIFE", "ENCOURAGE INDUSTRIAL POLLUTION", "DECREASE RENEWABLE ENERGY USE"],
    correct: 0
  },
  {
    id: 182,
    question: "Lack of public awareness about environmental issues may lead to:",
    options: ["ENVIRONMENTAL DEGRADATION", "IMPROVED BIODIVERSITY", "PROTECTION OF WILDLIFE", "INCREASED SUSTAINABILITY"],
    correct: 0
  },
  {
    id: 183,
    question: "Public awareness is crucial for biodiversity conservation because:",
    options: ["PEOPLE'S PARTICIPATION ENSURES BETTER IMPLEMENTATION OF LAWS", "GOVERNMENT POLICIES ALONE ARE SUFFICIENT", "TECHNOLOGY ELIMINATES THE NEED FOR PUBLIC PARTICIPATION", "ONLY SCIENTISTS SHOULD WORK ON CONSERVATION"],
    correct: 0
  },
  {
    id: 184,
    question: "Which process in the ecosystem directly connects biotic and abiotic components?",
    options: ["Photosynthesis", "Predation", "Parasitism", "Competition"],
    correct: 0
  },
  {
    id: 185,
    question: "The slogan 'Think globally, act locally' is associated with:",
    options: ["PUBLIC AWARENESS IN ENVIRONMENTAL PROTECTION", "GLOBAL WARMING AWARENESS", "ECONOMIC DEVELOPMENT", "SPACE RESEARCH"],
    correct: 0
  },
  {
    id: 186,
    question: "Which of the following is a direct outcome of public awareness in environment?",
    options: ["DEVELOPMENT OF ECO-FRIENDLY PRACTICES", "OVEREXPLOITATION OF RESOURCES", "DECREASE IN RECYCLING EFFORTS", "INCREASE IN INDUSTRIAL POLLUTION"],
    correct: 0
  },
  {
    id: 187,
    question: "The main function of decomposers in an ecosystem is:",
    options: ["RECYCLE NUTRIENTS", "MANUFACTURE FOOD", "CONSUME HERBIVORES", "ABSORB SOLAR ENERGY"],
    correct: 0
  },
  {
    id: 188,
    question: "Nutrients like nitrogen and phosphorus:",
    options: ["ARE RECYCLED IN ECOSYSTEMS", "ARE LOST AS HEAT", "FLOW ONLY ONCE", "DO NOT PASS THROUGH CONSUMERS"],
    correct: 0
  },
  {
    id: 189,
    question: "Ecological succession refers to:",
    options: ["GRADUAL REPLACEMENT OF SPECIES OVER TIME", "SUDDEN CHANGE IN ECOSYSTEM", "SEASONAL MIGRATION OF ANIMALS", "FOOD CHAIN INTERACTION"],
    correct: 0
  },
  {
    id: 190,
    question: "The facilitation hypothesis of succession means:",
    options: ["EARLY SPECIES MAKE ENVIRONMENT SUITABLE FOR LATER ONES", "LATER SPECIES TOLERATE FEWER RESOURCES", "SPECIES RESIST COMPETITORS", "LONGER-LIVED SPECIES DOMINATE DIRECTLY"],
    correct: 0
  },
  {
    id: 191,
    question: "Succession after forest fire is an example of:",
    options: ["SECONDARY SUCCESSION", "PRIMARY SUCCESSION", "RETROGRESSIVE SUCCESSION", "INHIBITION"],
    correct: 0
  },
  {
    id: 192,
    question: "The forest floor mainly consists of:",
    options: ["LITTER, HUMUS, DECOMPOSING MATERIAL", "DOMINANT TREES", "SHRUBS AND SEEDLINGS", "MOSSES AND FERNS ONLY"],
    correct: 0
  },
  {
    id: 193,
    question: "Which type of forest is called the 'rainforest'?",
    options: ["EQUATORIAL EVERGREEN FOREST", "TEMPERATE DECIDUOUS FOREST", "CONIFEROUS FOREST", "MANGROVE FOREST"],
    correct: 0
  },
  {
    id: 194,
    question: "Grasslands cover about:",
    options: ["32% OF PLANT COVER", "10% OF EARTH'S SURFACE", "50% OF BIOMASS", "70% OF ECOSYSTEMS"],
    correct: 0
  },
  {
    id: 195,
    question: "Which ecological pyramid can never be inverted?",
    options: ["Pyramid of energy", "Pyramid of biomass", "Pyramid of number", "All pyramids"],
    correct: 0
  },
  {
    id: 196,
    question: "The most fertile soils are found in:",
    options: ["GRASSLANDS", "DESERTS", "FORESTS", "TUNDRA"],
    correct: 0
  },
  {
    id: 197,
    question: "The most famous desert plant is:",
    options: ["CACTUS", "NEEM", "BANYAN", "MANGO"],
    correct: 0
  },
  {
    id: 198,
    question: "Decomposers are few in deserts because:",
    options: ["POOR ORGANIC MATTER AND VEGETATION", "HIGH RAINFALL", "LACK OF CONSUMERS", "PRESENCE OF REPTILES"],
    correct: 0
  },
  {
    id: 199,
    question: "The primary producers in aquatic ecosystems are:",
    options: ["PHYTOPLANKTON", "FISH", "ZOOPLANKTON", "CRUSTACEANS"],
    correct: 0
  },
  {
    id: 200,
    question: "The warm upper layer of a lake is called:",
    options: ["EPILIMNION", "HYPOLIMNION", "METALIMNION", "THERMOCLINE"],
    correct: 0
  },
  {
    id: 201,
    question: "The factor that has the major influence on aquatic ecosystems is:",
    options: ["LIGHT AND TEMPERATURE", "SOIL TYPE", "CANOPY GAPS", "FOREST COVER"],
    correct: 0
  },
  {
    id: 202,
    question: "Approximately how many species have been recorded in the world?",
    options: ["1.5 MILLION", "1.5 LAKH", "15 LAKH", "15 MILLION"],
    correct: 0
  },
  {
    id: 203,
    question: "Genetic diversity refers to:",
    options: ["VARIATIONS OF GENES WITHIN A SPECIES OR POPULATION", "VARIETY OF SPECIES IN A GIVEN AREA", "DIFFERENCES IN ECOSYSTEMS IN A REGION", "DISTRIBUTION OF ORGANISMS ON EARTH"],
    correct: 0
  },
  {
    id: 204,
    question: "Species diversity means:",
    options: ["VARIETY AND ABUNDANCE OF SPECIES IN A REGION", "NUMBER OF HABITATS IN A GIVEN ECOSYSTEM", "VARIATIONS IN GENETIC MAKEUP OF ORGANISMS", "DIFFERENCES IN ECOSYSTEMS ACROSS CONTINENTS"],
    correct: 0
  },
  {
    id: 205,
    question: "Ecosystem diversity deals with:",
    options: ["DIVERSITY OF HABITATS, BIOTIC COMMUNITIES, AND ECOLOGICAL PROCESSES", "VARIETY OF LIFE FORMS AT MOLECULAR LEVEL", "GENETIC DIFFERENCES WITHIN A SPECIES", "INTERBREEDING BETWEEN RELATED SPECIES"],
    correct: 0
  },
  {
    id: 206,
    question: "In a forest ecosystem, primary consumers are:",
    options: ["Herbivores", "Carnivores", "Decomposers", "Omnivores"],
    correct: 0
  },
  {
    id: 207,
    question: "The most stable ecosystem is:",
    options: ["Ocean", "Desert", "Forest", "Grassland"],
    correct: 0
  },
  {
    id: 208,
    question: "Which of the following shows genetic diversity?",
    options: ["DIFFERENT BREEDS OF DOGS", "FORESTS, GRASSLANDS, DESERTS", "NUMBER OF SPECIES IN A CORAL REEF", "ALL SPECIES OF BIRDS"],
    correct: 0
  },
  {
    id: 209,
    question: "Which is the correct order of levels of biodiversity (from smallest to largest)?",
    options: ["GENETIC → SPECIES → ECOSYSTEM", "ECOSYSTEM → SPECIES → GENETIC", "SPECIES → GENETIC → ECOSYSTEM", "GENETIC → ECOSYSTEM → SPECIES"],
    correct: 0
  },
  {
    id: 210,
    question: "Example of species diversity is:",
    options: ["WHEAT, RICE, MAIZE", "DESERT, RAINFOREST, MANGROVES", "TWO VARIETIES OF MANGO", "DIFFERENT BREEDS OF CATTLE"],
    correct: 0
  },
  {
    id: 211,
    question: "Which of the following is the broadest level of biodiversity?",
    options: ["ECOSYSTEM", "GENETIC", "SPECIES", "POPULATION"],
    correct: 0
  },
  {
    id: 212,
    question: "Biodiversity hotspot refers to:",
    options: ["REGION WITH HIGH SPECIES RICHNESS AND ENDEMISM", "REGION WITH LOW NUMBER OF SPECIES", "AREA WITH ONLY ENDANGERED SPECIES", "PLACE WITH ONLY GENETIC VARIATIONS"],
    correct: 0
  },
  {
    id: 213,
    question: "Which of the following is NOT an example of ecosystem diversity?",
    options: ["VARIETIES OF WHEAT", "CORAL REEFS", "TROPICAL RAINFORESTS", "ALPINE MEADOWS"],
    correct: 0
  },
  {
    id: 214,
    question: "Which type of biodiversity provides adaptability to changing environments?",
    options: ["GENETIC DIVERSITY", "SPECIES DIVERSITY", "ECOSYSTEM DIVERSITY", "NONE OF THESE"],
    correct: 0
  },
  {
    id: 215,
    question: "Genes are defined as:",
    options: ["FUNDAMENTAL UNITS OF HEREDITY MADE UP OF DNA", "UNITS OF CHROMOSOMES THAT CONTROL REPRODUCTION", "PROTEINS THAT CONTROL METABOLISM", "CHEMICAL MESSENGERS IN BLOOD"],
    correct: 0
  },
  {
    id: 216,
    question: "Genes carry instructions that determine:",
    options: ["TRAITS LIKE EYE COLOR, HEIGHT, AND SURVIVAL", "ONLY REPRODUCTION", "ONLY BODY WEIGHT", "ENVIRONMENTAL CHANGES"],
    correct: 0
  },
  {
    id: 217,
    question: "Genetic variation within a species is important because:",
    options: ["IT ALLOWS POPULATIONS TO EVOLVE UNDER CHANGING CONDITIONS", "IT INCREASES THE RISK OF EXTINCTION", "IT REDUCES ADAPTABILITY", "IT PREVENTS REPRODUCTION"],
    correct: 0
  },
  {
    id: 218,
    question: "Which of the following represents the correct sequence of energy flow?",
    options: ["Sun → Producer → Primary consumer → Secondary consumer → Decomposer", "Sun → Producer → Secondary consumer → Primary consumer → Decomposer", "Producer → Sun → Primary consumer → Secondary consumer → Decomposer", "Sun → Primary consumer → Producer → Decomposer → Secondary consumer"],
    correct: 0
  },
  {
    id: 219,
    question: "What happens to a population without genetic variation in the face of new environmental challenges?",
    options: ["IT FACES INCREASED RISK OF EXTINCTION", "IT THRIVES EASILY", "IT ADAPTS QUICKLY", "IT DEVELOPS MORE MUTATIONS AUTOMATICALLY"],
    correct: 0
  },
  {
    id: 220,
    question: "If a population is exposed to a new disease, survival depends on:",
    options: ["EXISTENCE OF RESISTANCE GENES IN THE POPULATION", "ISOLATION OF ALL INDIVIDUALS", "SIZE OF THE POPULATION ONLY", "RATE OF ENVIRONMENTAL POLLUTION"],
    correct: 0
  },
  {
    id: 221,
    question: "Why are endangered species with low genetic variation more at risk of extinction?",
    options: ["THEY CANNOT EVOLVE IN RESPONSE TO ENVIRONMENTAL CHANGES", "THEY HAVE HIGHER MUTATION RATES", "THEY INTERBREED TOO FREQUENTLY", "THEY ARE RESISTANT TO MOST DISEASES"],
    correct: 0
  },
  {
    id: 222,
    question: "Which species has high genetic variation according to the passage?",
    options: ["INDIAN RHINOS", "CHEETAHS", "TIGERS", "ELEPHANTS"],
    correct: 0
  },
  {
    id: 223,
    question: "Which species has low genetic variation according to the passage?",
    options: ["CHEETAHS", "INDIAN RHINOS", "LIONS", "ELEPHANTS"],
    correct: 0
  },
  {
    id: 224,
    question: "Species living in small or isolated areas generally:",
    options: ["DEVELOP INTO DISTINCT LOCALIZED POPULATIONS", "SHOW HIGH GENE FLOW", "RETAIN UNIFORM TRAITS EVERYWHERE", "NEVER ADAPT TO THE ENVIRONMENT"],
    correct: 0
  },
  {
    id: 225,
    question: "Species inhabiting large areas and interbreeding widely usually show:",
    options: ["HIGH RATE OF GENE FLOW AND FEW LOCALIZED CHARACTERISTICS", "LOW ADAPTABILITY TO ENVIRONMENTAL CHANGES", "INCREASED RISK OF EXTINCTION", "DISTINCT REGIONAL POPULATIONS"],
    correct: 0
  },
  {
    id: 226,
    question: "Which of the following has been identified as the major cause of biodiversity loss?",
    options: ["HUMAN ACTIVITIES", "NATURAL DISASTERS", "GENETIC MUTATIONS", "EVOLUTION"],
    correct: 0
  },
  {
    id: 227,
    question: "Which of the following is NOT an example of ecosystem diversity?",
    options: ["VARIETIES OF RICE", "TROPICAL RAINFORESTS", "GRASSLANDS", "WETLANDS"],
    correct: 0
  },
  {
    id: 228,
    question: "India accounts for what percentage of the world's land area?",
    options: ["2.4%", "1.8%", "3.2%", "5%"],
    correct: 0
  },
  {
    id: 229,
    question: "Which term refers to the maximum energy available to a consumer population after respiration losses of producers?",
    options: ["Net primary productivity (NPP)", "Gross primary productivity (GPP)", "Secondary productivity", "Biomass productivity"],
    correct: 0
  },
  {
    id: 230,
    question: "India harbors approximately what percentage of the world's recorded species?",
    options: ["7–8%", "3–4%", "5–6%", "10%"],
    correct: 0
  },
  {
    id: 231,
    question: "How many plant species are recorded in India?",
    options: ["47,000", "25,000", "35,000", "60,000"],
    correct: 0
  },
  {
    id: 232,
    question: "How many species of plants in India are endemic?",
    options: ["15,000", "8,000", "10,000", "12,000"],
    correct: 0
  },
  {
    id: 233,
    question: "How many animal species are recorded in India?",
    options: ["1,00,000+", "80,000", "90,000", "1,20,000"],
    correct: 0
  },
  {
    id: 234,
    question: "India ranks ___ in the world for plant richness.",
    options: ["10TH", "5TH", "8TH", "12TH"],
    correct: 0
  },
  {
    id: 235,
    question: "Which country has the second largest number of endemic species in the world?",
    options: ["INDIA", "BRAZIL", "INDONESIA", "AUSTRALIA"],
    correct: 0
  },
  {
    id: 236,
    question: "Which of the following is not a type of ecosystem in India?",
    options: ["TUNDRA ECOSYSTEMS", "ALPINE ECOSYSTEMS", "TROPICAL RAINFORESTS", "DESERT ECOSYSTEMS"],
    correct: 0
  },
  {
    id: 237,
    question: "The Thar Desert is an example of which type of ecosystem?",
    options: ["DESERT", "COASTAL", "GRASSLAND", "ALPINE"],
    correct: 0
  },
  {
    id: 238,
    question: "Mangroves and coral reefs are examples of which ecosystem?",
    options: ["MARINE AND COASTAL", "GRASSLAND", "WETLAND", "DESERT"],
    correct: 0
  },
  {
    id: 239,
    question: "The Western Ghats are famous for which type of ecosystem?",
    options: ["TROPICAL RAINFOREST", "DESERT", "GRASSLAND", "TUNDRA"],
    correct: 0
  },
  {
    id: 240,
    question: "In ecological succession, the first species to colonize a barren area are called:",
    options: ["Pioneer species", "Climax community", "Secondary species", "Keystone species"],
    correct: 0
  },
  {
    id: 241,
    question: "India is the center of origin for which of the following crops?",
    options: ["RICE, SUGARCANE, TURMERIC", "WHEAT, BARLEY, MAIZE", "COFFEE, TEA, COCOA", "CORN, SOYBEAN, SUNFLOWER"],
    correct: 0
  },
  {
    id: 242,
    question: "Which biodiversity hotspot is not found in India?",
    options: ["AMAZON BASIN", "HIMALAYA", "INDO-BURMA", "INDO-MALAYAN"],
    correct: 0
  },
  {
    id: 243,
    question: "The Andaman & Nicobar Islands belong to which biodiversity hotspot?",
    options: ["INDO-BURMA", "HIMALAYA", "INDO-MALAYAN", "WESTERN GHATS"],
    correct: 0
  },
  {
    id: 244,
    question: "The Sundarbans mangrove is located in which state?",
    options: ["WEST BENGAL", "KERALA", "GUJARAT", "ODISHA"],
    correct: 0
  },
  {
    id: 245,
    question: "The Western Ghats hotspot extends over how many states mainly?",
    options: ["6", "2", "3", "4"],
    correct: 0
  },
  {
    id: 246,
    question: "Which Indian state has the highest forest cover?",
    options: ["MADHYA PRADESH", "ARUNACHAL PRADESH", "CHHATTISGARH", "ODISHA"],
    correct: 0
  },
  {
    id: 247,
    question: "Which of the following is a major cause of biodiversity loss?",
    options: ["HABITAT LOSS", "PHOTOSYNTHESIS", "POLLINATION", "SEED DISPERSAL"],
    correct: 0
  },
  {
    id: 248,
    question: "Poaching of wildlife refers to:",
    options: ["ILLEGAL HUNTING", "LEGAL HUNTING", "BIRD MIGRATION", "ANIMAL RESCUE"],
    correct: 0
  },
  {
    id: 249,
    question: "Which of the following is an example of man-wildlife conflict?",
    options: ["CROP RAIDING BY ELEPHANTS", "POACHING", "DEFORESTATION", "AFFORESTATION"],
    correct: 0
  },
  {
    id: 250,
    question: "Habitat fragmentation means:",
    options: ["DIVISION OF HABITATS INTO SMALLER PATCHES", "INCREASE IN LARGE FORESTS", "CONNECTING TWO ECOSYSTEMS", "REGENERATION OF PLANTS"],
    correct: 0
  },
  {
    id: 251,
    question: "The ecosystem where decomposers play the most significant role in recycling nutrients is:",
    options: ["Forest floor", "Desert", "Open ocean", "Tundra"],
    correct: 0
  },
  {
    id: 252,
    question: "Which animal is often poached for its tusks?",
    options: ["ELEPHANT", "TIGER", "RHINO", "LEOPARD"],
    correct: 0
  },
  {
    id: 253,
    question: "Which bird is hunted for its feathers?",
    options: ["HORNBILL", "PEACOCK", "SPARROW", "PIGEON"],
    correct: 0
  },
  {
    id: 254,
    question: "Which wildlife species in India is highly threatened due to poaching for skin and bones?",
    options: ["TIGER", "LEOPARD", "LION", "PANTHER"],
    correct: 0
  },
  {
    id: 255,
    question: "Which of the following is a major wetland ecosystem in India?",
    options: ["CHILIKA LAKE", "THAR DESERT", "WESTERN GHATS", "NILGIRIS"],
    correct: 0
  },
  {
    id: 256,
    question: "Which biodiversity hotspot covers North-East India?",
    options: ["INDO-BURMA", "HIMALAYA", "SUNDARBANS", "DECCAN PLATEAU"],
    correct: 0
  },
  {
    id: 257,
    question: "Which biodiversity hotspot includes the entire Indian Himalayan region?",
    options: ["HIMALAYA", "WESTERN GHATS", "INDO-BURMA", "INDO-MALAYAN"],
    correct: 0
  },
  {
    id: 258,
    question: "Which species is endemic to India?",
    options: ["ASIATIC LION", "PANDA", "KANGAROO", "POLAR BEAR"],
    correct: 0
  },
  {
    id: 259,
    question: "Which ecosystem is associated with coral reefs?",
    options: ["MARINE", "FRESHWATER", "DESERT", "ALPINE"],
    correct: 0
  },
  {
    id: 260,
    question: "Which region is known as the 'Lung of India' due to dense forest cover?",
    options: ["NORTH-EAST INDIA", "SUNDARBANS", "HIMALAYAS", "WESTERN GHATS"],
    correct: 0
  },
  {
    id: 261,
    question: "In which year did the Convention on Biological Diversity come into force?",
    options: ["1992", "1980", "1995", "2000"],
    correct: 0
  },
  {
    id: 262,
    question: "Which factor limits energy flow efficiency between trophic levels?",
    options: ["Heat loss through respiration", "Abundance of producers", "Herbivore population size", "Nutrient cycling"],
    correct: 0
  },
  {
    id: 263,
    question: "Biosphere reserves are established for:",
    options: ["CONSERVATION OF BIODIVERSITY", "AGRICULTURE", "MINING", "URBANIZATION"],
    correct: 0
  },
  {
    id: 264,
    question: "Which of the following is a biosphere reserve in India?",
    options: ["NILGIRI", "GIR", "PERIYAR", "RANTHAMBORE"],
    correct: 0
  },
  {
    id: 265,
    question: "Which biodiversity hotspot is home to one of the richest coral reef systems in India?",
    options: ["GULF OF MANNAR", "HIMALAYA", "INDO-BURMA", "WESTERN GHATS"],
    correct: 0
  },
  {
    id: 266,
    question: "Which state is known as the 'Land of the Rhino'?",
    options: ["ASSAM", "MADHYA PRADESH", "GUJARAT", "KERALA"],
    correct: 0
  },
  {
    id: 267,
    question: "Which animal is often killed due to human-tiger conflict?",
    options: ["CATTLE", "DEER", "ELEPHANT", "GOAT"],
    correct: 0
  },
  {
    id: 268,
    question: "The Great Indian Bustard is threatened mainly due to:",
    options: ["HABITAT LOSS", "OVERGRAZING", "POACHING", "POLLUTION"],
    correct: 0
  },
  {
    id: 269,
    question: "Which is the largest mangrove forest in India?",
    options: ["SUNDARBANS", "BHITARKANIKA", "PICHAVARAM", "VEDARANYAM"],
    correct: 0
  },
  {
    id: 270,
    question: "Which is a major threat to marine biodiversity?",
    options: ["OVERFISHING", "POLLINATION", "PHOTOSYNTHESIS", "RAINFALL"],
    correct: 0
  },
  {
    id: 271,
    question: "Which national park is famous for Asiatic Lions?",
    options: ["GIR", "CORBETT", "KANHA", "KAZIRANGA"],
    correct: 0
  },
  {
    id: 272,
    question: "Which bird sanctuary is in Bharatpur, Rajasthan?",
    options: ["KEOLADEO", "NAL SAROVAR", "RANGANATHITTU", "CHILIKA"],
    correct: 0
  },
  {
    id: 273,
    question: "The sequence of organisms through which energy flows in an ecosystem is called:",
    options: ["Food chain", "Food web", "Food pyramid", "Ecological succession"],
    correct: 0
  },
  {
    id: 274,
    question: "Which term refers to species found only in a particular region?",
    options: ["ENDEMIC", "EXOTIC", "INVASIVE", "NATIVE"],
    correct: 0
  },
  {
    id: 275,
    question: "Which Indian state is famous for coral reefs in Lakshadweep?",
    options: ["LAKSHADWEEP UT", "KERALA", "TAMIL NADU", "GUJARAT"],
    correct: 0
  },
  {
    id: 276,
    question: "Which species is known as the 'National Aquatic Animal of India'?",
    options: ["DOLPHIN (GANGES RIVER DOLPHIN)", "DUGONG", "CROCODILE", "TORTOISE"],
    correct: 0
  },
  {
    id: 277,
    question: "Which ecosystem plays a major role in protecting coastlines from erosion?",
    options: ["MANGROVES", "GRASSLANDS", "ALPINE FORESTS", "DESERTS"],
    correct: 0
  },
  {
    id: 278,
    question: "The Nilgiri Biosphere Reserve lies in which biodiversity hotspot?",
    options: ["WESTERN GHATS", "HIMALAYA", "INDO-BURMA", "INDO-MALAYAN"],
    correct: 0
  },
  {
    id: 279,
    question: "Which of the following is NOT a major threat to endangered species?",
    options: ["RESPONSIBLE ECOTOURISM", "HABITAT LOSS AND DESTRUCTION", "CLIMATE CHANGE", "INTRODUCTION OF INVASIVE SPECIES"],
    correct: 0
  },
  {
    id: 280,
    question: "Which international organisation maintains the Red List of Threatened Species?",
    options: ["INTERNATIONAL UNION FOR CONSERVATION OF NATURE (IUCN)", "WORLD HEALTH ORGANIZATION (WHO)", "UNITED NATIONS ENVIRONMENT PROGRAMME (UNEP)", "FOOD AND AGRICULTURE ORGANIZATION (FAO)"],
    correct: 0
  },
  {
    id: 281,
    question: "What does Critically endangered species mean?",
    options: ["EXTREMELY HIGH RISK OF EXTINCTION IN THE WILD", "HIGH RISK OF ENDANGERMENT IN THE WILD", "LIKELY TO BECOME ENDANGERED SOON", "KNOWN ONLY TO SURVIVE IN CAPTIVITY"],
    correct: 0
  },
  {
    id: 282,
    question: "Which endemic animal is found only in Gir Forest of Gujarat?",
    options: ["ASIATIC LION", "NILGIRI TAHR", "BISON", "RHINOCEROS"],
    correct: 0
  },
  {
    id: 283,
    question: "The species which are in danger of extinction are called:",
    options: ["ENDANGERED SPECIES", "VULNERABLE SPECIES", "RARE SPECIES", "ENDEMIC SPECIES"],
    correct: 0
  },
  {
    id: 284,
    question: "Which of the following represents a grazing food chain?",
    options: ["Grass → Grasshopper → Frog → Snake", "Dead plants → Fungi → Bacteria", "Algae → Zooplankton → Fish", "Lion → Hyena → Vulture"],
    correct: 0
  },
  {
    id: 285,
    question: "Which one of the following is not responsible for the decline in India's biodiversity?",
    options: ["AFFORESTATION", "MINING ACTIVITIES", "HUNTING AND POACHING", "FOREST FIRE"],
    correct: 0
  },
  {
    id: 286,
    question: "The Wildlife Protection Act was implemented in:",
    options: ["1972", "1971", "2010", "1982"],
    correct: 0
  },
  {
    id: 287,
    question: "The Indian government launched Project Tiger in which year?",
    options: ["1973", "1965", "1982", "1995"],
    correct: 0
  },
  {
    id: 288,
    question: "IUCN maintains a list of threatened species known as the:",
    options: ["RED LIST", "GREEN BOOK", "BLUE LIST", "WHITE PAPER"],
    correct: 0
  },
  {
    id: 289,
    question: "Which of the following is considered the biggest threat to endangered species today?",
    options: ["HABITAT LOSS AND DESTRUCTION", "POLLUTION", "NATURAL DISASTERS", "DISEASE"],
    correct: 0
  },
  {
    id: 290,
    question: "The Red Data Book provides data on:",
    options: ["ENDANGERED ANIMALS AND PLANTS", "ENDEMIC SPECIES", "SPECIES FOUND IN FORESTS", "ALL OF THE ABOVE"],
    correct: 0
  },
  {
    id: 291,
    question: "___ conservation involves protecting a species in its natural habitat.",
    options: ["IN-SITU CONSERVATION", "EX-SITU CONSERVATION", "OFF-SITE CONSERVATION", "ARTIFICIAL CONSERVATION"],
    correct: 0
  },
  {
    id: 292,
    question: "What is an endemic species?",
    options: ["SPECIES RESTRICTED TO A PARTICULAR GEOGRAPHIC AREA", "SPECIES THAT HAVE GONE EXTINCT", "SPECIES FOUND IN MANY GEOGRAPHIC AREAS", "SPECIES WHICH ARE IN LESS NUMBER"],
    correct: 0
  },
  {
    id: 293,
    question: "The Purple Frog is an endemic species found in the rainforests of:",
    options: ["WESTERN GHATS", "EASTERN GHATS", "ARAVALLI RANGE", "HIMALAYAS"],
    correct: 0
  },
  {
    id: 294,
    question: "Which of the following is NOT a method of in-situ conservation?",
    options: ["BOTANICAL GARDENS", "SACRED GROVES", "WILDLIFE SANCTUARIES", "MARINE PROTECTED AREAS"],
    correct: 0
  },
  {
    id: 295,
    question: "The interconnected network of food chains in an ecosystem is known as:",
    options: ["Food web", "Food chain", "Trophic level", "Food pyramid"],
    correct: 0
  },
  {
    id: 296,
    question: "The consequence of the destruction of habitat for an endemic species causes:",
    options: ["THE SPECIES IS AT A HIGH RISK OF EXTINCTION", "THE SPECIES WILL MOVE TO ANOTHER LOCATION", "THE SPECIES POPULATION WILL INCREASE", "THE SPECIES WILL ADAPT TO THE NEW CONDITIONS"],
    correct: 0
  },
  {
    id: 297,
    question: "The main focus of conservation efforts for endemic species is:",
    options: ["PROTECTING AND PRESERVING THEIR SPECIFIC HABITAT", "ESTABLISHING CAPTIVE BREEDING PROGRAMS IN ZOOS", "CONTROLLING THE POPULATION OF INVASIVE SPECIES", "TRANSLOCATING THEM TO MULTIPLE REGIONS"],
    correct: 0
  },
  {
    id: 298,
    question: "What is the main purpose of creating biodiversity hotspots?",
    options: ["TO PROTECT AREAS WITH HIGH ENDEMISM AND SPECIES RICHNESS", "TO PROTECT AREAS WITH LOW SPECIES DIVERSITY", "TO PROMOTE TOURISM IN NATURAL AREAS", "TO ENCOURAGE DEFORESTATION FOR AGRICULTURE"],
    correct: 0
  },
  {
    id: 299,
    question: "What is the difference between in-situ and ex-situ conservation?",
    options: ["THE LOCATION WHERE THE CONSERVATION TAKES PLACE", "THE TYPE OF SPECIES BEING CONSERVED", "THE HUMAN ACTIVITY", "THE DURATION OF THE CONSERVATION PROGRAM"],
    correct: 0
  },
  {
    id: 300,
    question: "Biological Diversity Act was implemented in the year:",
    options: ["2002", "1972", "1992", "1973"],
    correct: 0
  },
  {
    id: 301,
    question: "The Indian government launched Project Elephant in which year?",
    options: ["1992", "1973", "1982", "1995"],
    correct: 0
  },
  {
    id: 302,
    question: "Where was the first tiger reserve established in India?",
    options: ["JIM CORBETT NATIONAL PARK", "BANDIPUR NATIONAL PARK", "KANHA NATIONAL PARK", "SUNDARBANS NATIONAL PARK"],
    correct: 0
  },
  {
    id: 303,
    question: "Which of the following is a primary air pollutant?",
    options: ["Sulfur dioxide", "Ozone", "Smog", "Acid rain"],
    correct: 0
  },
  {
    id: 304,
    question: "The major contributor to urban air pollution is:",
    options: ["Transportation", "Agriculture", "Mining", "Forests"],
    correct: 0
  },
  {
    id: 305,
    question: "Electrostatic precipitators are used to control:",
    options: ["Particulate matter", "Noise", "Thermal pollution", "Carbon dioxide"],
    correct: 0
  },
  {
    id: 306,
    question: "In a food chain, the green plants are always:",
    options: ["Producers", "Primary consumers", "Secondary consumers", "Decomposers"],
    correct: 0
  },
  {
    id: 307,
    question: "Catalytic converters in vehicles help reduce emissions of:",
    options: ["CO, NOx, Hydrocarbons", "SO2, CO2, Particulates", "Nitrates, Phosphates", "Dust and Pollen"],
    correct: 0
  },
  {
    id: 308,
    question: "Which pollutant is most associated with ozone layer depletion?",
    options: ["CFCs", "CO2", "Methane", "Ozone"],
    correct: 0
  },
  {
    id: 309,
    question: "National AQI in India is monitored by:",
    options: ["CPCB", "WHO", "UNEP", "NITI Aayog"],
    correct: 0
  },
  {
    id: 310,
    question: "Blue Baby Syndrome is caused by excess:",
    options: ["Nitrate", "Fluoride", "Arsenic", "Lead"],
    correct: 0
  },
  {
    id: 311,
    question: "Eutrophication is caused by excess of:",
    options: ["Nitrates and Phosphates", "Oxygen", "Iron", "Chloride"],
    correct: 0
  },
  {
    id: 312,
    question: "The permissible limit of fluoride in drinking water (mg/L) is:",
    options: ["1.0", "0.5", "2.0", "5.0"],
    correct: 0
  },
  {
    id: 313,
    question: "Which treatment stage uses microorganisms to degrade organic matter?",
    options: ["Secondary", "Primary", "Tertiary", "Advanced"],
    correct: 0
  },
  {
    id: 314,
    question: "Oil spills in oceans are examples of:",
    options: ["Point source pollution", "Non-point source pollution", "Natural pollution", "Radioactive pollution"],
    correct: 0
  },
  {
    id: 315,
    question: "Which heavy metal has a maximum permissible limit of 0.01 mg/L in water?",
    options: ["Lead", "Mercury", "Arsenic", "Cadmium"],
    correct: 0
  },
  {
    id: 316,
    question: "Which of the following indicates fecal contamination in water?",
    options: ["E. coli", "Iron", "Fluoride", "Calcium"],
    correct: 0
  },
  {
    id: 317,
    question: "The largest artificial ecosystem on Earth is:",
    options: ["Agricultural fields", "Aquarium", "Reservoirs", "Urban cities"],
    correct: 0
  },
  {
    id: 318,
    question: "Which ecological pyramid is always upright?",
    options: ["Pyramid of energy", "Pyramid of biomass", "Pyramid of number", "All pyramids"],
    correct: 0
  },
  {
    id: 319,
    question: "Which of the following is NOT a soil pollutant?",
    options: ["Oxygen", "Pesticides", "Fertilizers", "Mercury"],
    correct: 0
  },
  {
    id: 320,
    question: "Phytoremediation is used to:",
    options: ["Remove toxins from soil", "Treat wastewater", "Control air pollution", "Reduce noise levels"],
    correct: 0
  },
  {
    id: 321,
    question: "The major source of soil contamination from cities is:",
    options: ["Urban landfills", "Mining", "Volcanoes", "Rainwater"],
    correct: 0
  },
  {
    id: 322,
    question: "Bioaccumulation of heavy metals in the food chain is an effect of:",
    options: ["Soil pollution", "Noise pollution", "Thermal pollution", "Light pollution"],
    correct: 0
  },
  {
    id: 323,
    question: "Permissible night-time noise level in residential areas (dB) is:",
    options: ["45", "55", "65", "75"],
    correct: 0
  },
  {
    id: 324,
    question: "Which of the following is a common effect of noise pollution?",
    options: ["Hearing loss", "Asthma", "Cancer", "Fluorosis"],
    correct: 0
  },
  {
    id: 325,
    question: "Silence zones are usually established near:",
    options: ["Schools and hospitals", "Markets", "Factories", "Bus stations"],
    correct: 0
  },
  {
    id: 326,
    question: "Radioactive pollution is mainly caused by:",
    options: ["Plutonium and Uranium", "CFCs", "Lead", "Methane"],
    correct: 0
  },
  {
    id: 327,
    question: "The main pollutant from mining activities is:",
    options: ["Heavy metals", "CO2", "Ozone", "Fluoride"],
    correct: 0
  },
  {
    id: 328,
    question: "Acid rain damages aquatic life by lowering:",
    options: ["pH", "Salinity", "Temperature", "Hardness"],
    correct: 0
  },
  {
    id: 329,
    question: "In a food pyramid, the largest number of organisms is found at the:",
    options: ["Producer level", "Tertiary consumer level", "Secondary consumer level", "Top carnivore level"],
    correct: 0
  },
  {
    id: 330,
    question: "The main source of methane emissions is:",
    options: ["Agriculture and wetlands", "Transport", "Factories", "Nuclear plants"],
    correct: 0
  },
  {
    id: 331,
    question: "Baghouse filters are used to:",
    options: ["Remove particulates from flue gases", "Filter water", "Reduce noise", "Absorb heavy metals"],
    correct: 0
  },
  {
    id: 332,
    question: "Which pollutant is most associated with Minamata disease?",
    options: ["Mercury", "Lead", "Arsenic", "Cadmium"],
    correct: 0
  },
  {
    id: 333,
    question: "Solid Waste Management Rules (2016) were issued by:",
    options: ["CPCB", "WHO", "UNEP", "IPCC"],
    correct: 0
  },
  {
    id: 334,
    question: "The effect of long-term arsenic exposure is:",
    options: ["Cancer and skin lesions", "Fluorosis", "Blue Baby Syndrome", "Asthma"],
    correct: 0
  },
  {
    id: 335,
    question: "Noise pollution affects birds by:",
    options: ["Disturbing communication and breeding", "Helping migration", "Increasing reproduction", "None of the above"],
    correct: 0
  },
  {
    id: 336,
    question: "Thermal pollution is mainly caused by:",
    options: ["Power plants and industries", "Agriculture", "Forests", "Urban traffic"],
    correct: 0
  },
  {
    id: 337,
    question: "The permissible limit of arsenic in drinking water (mg/L) is:",
    options: ["0.01", "0.1", "1.0", "0.001"],
    correct: 0
  },
  {
    id: 338,
    question: "Municipal solid waste mainly contributes to:",
    options: ["Soil pollution", "Air pollution", "Thermal pollution", "Radioactive pollution"],
    correct: 0
  },
  {
    id: 339,
    question: "Which of the following is an example of secondary pollutant?",
    options: ["Smog", "CO", "NOx", "SO2"],
    correct: 0
  },
  {
    id: 340,
    question: "Which of the following organisms occupies the highest trophic level in a food chain?",
    options: ["Top carnivores", "Herbivores", "Producers", "Decomposers"],
    correct: 0
  },
  {
    id: 341,
    question: "The CPCB full form is:",
    options: ["Central Pollution Control Board", "Central Power Control Board", "Centre for Pollution Check Bureau", "Central Pollution Case Bureau"],
    correct: 0
  },
  {
    id: 342,
    question: "The maximum permissible limit of mercury in water (mg/L) is:",
    options: ["0.001", "0.1", "0.01", "0.05"],
    correct: 0
  },
  {
    id: 343,
    question: "The main effect of excess fluoride in water is:",
    options: ["Dental and skeletal fluorosis", "Cancer", "Hearing loss", "Asthma"],
    correct: 0
  },
  {
    id: 344,
    question: "Urban heat islands are associated with which pollution type?",
    options: ["Thermal pollution", "Air pollution", "Noise pollution", "Radioactive pollution"],
    correct: 0
  },
  {
    id: 345,
    question: "Acid mine drainage is associated with:",
    options: ["Mining", "Forests", "Fertilizers", "Oil spills"],
    correct: 0
  },
  {
    id: 346,
    question: "Which type of pollution disrupts circadian rhythms?",
    options: ["Light", "Noise", "Radioactive", "Soil"],
    correct: 0
  },
  {
    id: 347,
    question: "The noise pollution limit for commercial areas during the day is:",
    options: ["65 dB", "50 dB", "55 dB", "75 dB"],
    correct: 0
  },
  {
    id: 348,
    question: "Smog is a mixture of:",
    options: ["Smoke and fog", "Sand and dust", "CO2 and O2", "Rain and dust"],
    correct: 0
  },
  {
    id: 349,
    question: "Which pollutant is mainly responsible for global warming?",
    options: ["CO2", "SO2", "O3", "CFCs"],
    correct: 0
  },
  {
    id: 350,
    question: "The CPCB permissible limit for nitrates in drinking water (mg/L) is:",
    options: ["45", "10", "25", "100"],
    correct: 0
  },
  {
    id: 351,
    question: "In a detritus food chain, the primary source of energy is:",
    options: ["Dead organic matter", "Sunlight", "Producers", "Herbivores"],
    correct: 0
  },
  {
    id: 352,
    question: "The main effect of carbon monoxide poisoning is:",
    options: ["Reduced oxygen transport in blood", "Asthma", "Fluorosis", "Hearing loss"],
    correct: 0
  },
  {
    id: 353,
    question: "Which of the following solid wastes describes the term 'Municipal Solid Waste'?",
    options: ["Non-hazardous", "Toxic", "Hazardous", "Non-toxic"],
    correct: 0
  },
  {
    id: 354,
    question: "Why is it difficult to recycle plastics?",
    options: ["It contains different types of polymer resins", "It is very hard", "It comes in different sizes", "It is adhesive"],
    correct: 0
  },
  {
    id: 355,
    question: "Which of the following is done on an individual level?",
    options: ["Source reduction", "Burning", "Disposal", "Recycling"],
    correct: 0
  },
  {
    id: 356,
    question: "The organic material of the solid waste will decompose:",
    options: ["By the action of microorganisms", "By the flow of water", "By the soil particles", "By oxidation"],
    correct: 0
  },
  {
    id: 357,
    question: "The process of burning municipal solid wastes under suitable temperature and conditions in a specific furnace is called:",
    options: ["Incineration", "Landfill", "Recycling", "Vermi composting"],
    correct: 0
  },
  {
    id: 358,
    question: "The burning of solid waste is not recommended because:",
    options: ["It causes several environmental issues", "It is very costly", "It requires a lot of space", "It requires modern technologies"],
    correct: 0
  },
  {
    id: 359,
    question: "When the organic matter present in the sanitary landfill decomposes, it generates:",
    options: ["Methane", "Nitrogen", "Hydrogen", "All of the above"],
    correct: 0
  },
  {
    id: 360,
    question: "Which of the following is the oldest and most common method used to dump solid wastes?",
    options: ["Landfill", "River", "Ocean", "None of the above"],
    correct: 0
  },
  {
    id: 361,
    question: "Which of the following statements is incorrect for plastic waste?",
    options: ["It is used to make compost", "It lasts for a longer period of time", "Toxic fumes are produced when burnt", "All of the above"],
    correct: 0
  },
  {
    id: 362,
    question: "Which food chain correctly shows the flow of energy in a pond ecosystem?",
    options: ["Phytoplankton → Zooplankton → Small fish → Large fish", "Zooplankton → Phytoplankton → Small fish → Large fish", "Large fish → Small fish → Zooplankton → Phytoplankton", "Phytoplankton → Small fish → Zooplankton → Large fish"],
    correct: 0
  },
  {
    id: 363,
    question: "Which of the following can be recycled many times?",
    options: ["Aluminium", "Wood", "Plastic", "Organic materials"],
    correct: 0
  },
  {
    id: 364,
    question: "Which of the following gases is produced from landfill wastes?",
    options: ["Biogas", "Natural gas", "Liquified petroleum gas", "All of the above"],
    correct: 0
  },
  {
    id: 365,
    question: "Which country produces the most e-waste per year?",
    options: ["USA", "India", "China", "France"],
    correct: 0
  },
  {
    id: 366,
    question: "The most valuable part of a PC or TV is the:",
    options: ["Circuit boards that contain silver and gold", "Lead in the CRT", "Copper in the cathode yoke", "None of the above"],
    correct: 0
  },
  {
    id: 367,
    question: "Which of the following is not a basic characteristic in determining whether solid waste is hazardous:",
    options: ["Morbidity", "Corrosivity", "Toxicity", "Ignitability"],
    correct: 0
  },
  {
    id: 368,
    question: "What was the main reason the construction company decided to implement OHSMS?",
    options: ["To reduce frequent workplace accidents", "To expand business operations", "To increase marketing reach", "To cut material costs"],
    correct: 0
  },
  {
    id: 369,
    question: "Which international standard did the company use as a guideline for OHSMS?",
    options: ["ISO 45001", "ISO 9001", "ISO 14001", "ISO 27001"],
    correct: 0
  },
  {
    id: 370,
    question: "What was the first step taken by the company in implementing the OHSMS?",
    options: ["Gap analysis", "Employee hiring", "Risk assessment", "Marketing campaign"],
    correct: 0
  },
  {
    id: 371,
    question: "How did the company involve employees in the safety process?",
    options: ["By forming safety committees", "By increasing work hours", "By reducing training sessions", "By outsourcing safety"],
    correct: 0
  },
  {
    id: 372,
    question: "What was one key benefit achieved after implementing the OHSMS?",
    options: ["Improved safety culture and employee morale", "Increased insurance premiums", "Project delays due to accidents", "Increased product defects"],
    correct: 0
  },
  {
    id: 373,
    question: "Why does the pyramid of energy never get inverted?",
    options: ["Energy decreases at each trophic level", "Biomass is always constant", "Number of organisms increases at higher levels", "Energy flows in cycles"],
    correct: 0
  },
  {
    id: 374,
    question: "What was one of the main hazards addressed in the manufacturing plant's OHSMS?",
    options: ["Chemical hazards", "Biological hazards", "Ergonomic risks", "Psychological stress"],
    correct: 0
  },
  {
    id: 375,
    question: "Which control measure was introduced to reduce airborne chemical exposure?",
    options: ["Ventilation systems", "Increased work hours", "Marketing campaigns", "Financial incentives"],
    correct: 0
  },
  {
    id: 376,
    question: "Why was safety training important in the manufacturing plant's OHSMS?",
    options: ["To teach safe handling of chemicals and machinery", "To improve sales techniques", "To reduce wages", "To speed up production"],
    correct: 0
  },
  {
    id: 377,
    question: "What was a significant outcome of implementing engineering controls?",
    options: ["Reduced airborne chemical hazards", "Increased chemical exposure", "Higher noise levels", "More accidents"],
    correct: 0
  },
  {
    id: 378,
    question: "How did employee involvement impact the manufacturing plant's OHSMS?",
    options: ["Improved safety culture and hazard reporting", "Decreased communication", "Increased production errors", "Reduced safety training"],
    correct: 0
  },
  {
    id: 379,
    question: "Which international safety standard did Tata Steel adopt for its OHSMS?",
    options: ["ISO 45001", "ISO 9001", "ISO 14001", "ISO 27001"],
    correct: 0
  },
  {
    id: 380,
    question: "What digital technology did Tata Steel use for real-time safety monitoring?",
    options: ["Wearable devices and AI systems", "Social media", "Drones for marketing", "RFID for inventory only"],
    correct: 0
  },
  {
    id: 381,
    question: "What was a key result of implementing the OHSMS at Tata Steel?",
    options: ["Reduced Lost Time Injury Frequency Rate (LTIFR)", "Increase in incident rates", "Less employee engagement", "Decreased production output"],
    correct: 0
  },
  {
    id: 382,
    question: "What type of safety programs did Tata Steel use to train staff?",
    options: ["Safety leadership and behavior-based training", "Financial literacy programs", "Marketing training", "Customer service programs"],
    correct: 0
  },
  {
    id: 383,
    question: "Which prestigious award did Tata Steel receive for its safety performance?",
    options: ["Sword of Honour from British Safety Council", "Golden Peacock for Marketing", "ISO 9001 from BIS", "National Award for Innovation"],
    correct: 0
  },
  {
    id: 384,
    question: "In a food web, organisms that feed on both plants and animals are called:",
    options: ["Omnivores", "Herbivores", "Carnivores", "Producers"],
    correct: 0
  },
  {
    id: 385,
    question: "Which international standard did Toyota adopt for its Occupational Health and Safety Management System?",
    options: ["ISO 45001", "ISO 9001", "ISO 14001", "ISO 27001"],
    correct: 0
  },
  {
    id: 386,
    question: "What continuous improvement philosophy did Toyota apply to workplace safety?",
    options: ["Kaizen", "Six Sigma", "Lean Startup", "Agile"],
    correct: 0
  },
  {
    id: 387,
    question: "How did Toyota encourage employee participation in safety management?",
    options: ["Through safety committees and open communication channels", "Limiting feedback", "Outsourcing safety responsibilities", "Increasing work hours"],
    correct: 0
  },
  {
    id: 388,
    question: "What engineering controls did Toyota implement to reduce hazard exposure?",
    options: ["Machine guards and automated safety devices", "Larger work shifts", "Financial bonuses", "Marketing campaigns"],
    correct: 0
  },
  {
    id: 389,
    question: "What was a key outcome of Toyota's OHSMS implementation?",
    options: ["Reduced lost-time incidents", "Increased workplace injuries", "Higher legal penalties", "Decreased employee engagement"],
    correct: 0
  },
  {
    id: 390,
    question: "OHSMS is primarily designed to:",
    options: ["Manage workplace health and safety risks", "Increase company profits", "Promote consumer satisfaction", "Improve product design"],
    correct: 0
  },
  {
    id: 391,
    question: "Which of the following is NOT an objective of OHSMS?",
    options: ["Increasing production speed at all costs", "Preventing accidents and diseases", "Ensuring safe working conditions", "Promoting safety culture"],
    correct: 0
  },
  {
    id: 392,
    question: "'Hazard identification and risk assessment' comes under which element of OHSMS?",
    options: ["Planning", "Policy", "Implementation", "Monitoring"],
    correct: 0
  },
  {
    id: 393,
    question: "Safety audits, inspections, and reporting are part of which OHSMS element?",
    options: ["Monitoring", "Implementation", "Policy", "Improvement"],
    correct: 0
  },
  {
    id: 394,
    question: "Providing PPE and conducting emergency drills fall under:",
    options: ["Implementation", "Policy", "Planning", "Review"],
    correct: 0
  },
  {
    id: 395,
    question: "Which ecological pyramid may sometimes appear inverted?",
    options: ["Pyramid of biomass", "Pyramid of energy", "Pyramid of numbers", "All pyramids"],
    correct: 0
  },
  {
    id: 396,
    question: "The Plan–Do–Check–Act cycle in OHSMS emphasizes:",
    options: ["Continuous improvement", "Emergency evacuation only", "Reducing production costs", "Avoiding employee training"],
    correct: 0
  },
  {
    id: 397,
    question: "Which of the following best represents the 'Policy' element of OHSMS?",
    options: ["Management commitment to safety", "Safety audits", "Corrective actions", "Hazard reporting"],
    correct: 0
  },
  {
    id: 398,
    question: "Reduced insurance and compensation costs are an example of:",
    options: ["OHSMS benefits", "OHSMS challenges", "OHSMS standards", "OHSMS monitoring"],
    correct: 0
  },
  {
    id: 399,
    question: "The National Environmental Protection Act was passed in India in which year?",
    options: ["1986", "1981", "1995", "1974"],
    correct: 0
  },
  {
    id: 400,
    question: "Which of the following Acts gives rights to citizens to file cases against violation of environmental norms?",
    options: ["Environment (Protection) Act", "Air Pollution Act", "Water Pollution Act", "Forest Act"],
    correct: 0
  },
  {
    id: 401,
    question: "In which year Forest Conservation Act was passed?",
    options: ["1980", "1986", "1988", "1982"],
    correct: 0
  },
  {
    id: 402,
    question: "The definition of 'environmental pollution' under the Environment (Protection Act) is:",
    options: ["The presence in the environment of any environmental pollution", "Any pollution of air, water and soil", "The presence of any solid, liquid or gaseous substance in the environment that causes injuries to man", "Any pollution in land, sea and air"],
    correct: 0
  },
  {
    id: 403,
    question: "The three R's which can help us to conserve natural resources for long term use are:",
    options: ["Reduce, Recycle, Reuse", "Recycle, Regenerate, Reuse", "Reduce, Regenerate, Reuse", "More than one of the above"],
    correct: 0
  },
  {
    id: 404,
    question: "The Environment Protection Act, 1986 passed in March 1986, it came into force on:",
    options: ["19 November 1986", "1 April 1986", "1 July 1986", "1 January 1987"],
    correct: 0
  },
  {
    id: 405,
    question: "Which one of the following is not a natural pollution?",
    options: ["Air pollution", "Earthquake", "Flood", "Cyclone"],
    correct: 0
  },
  {
    id: 406,
    question: "The amount of energy transferred from one trophic level to the next is approximately:",
    options: ["10%", "1%", "25%", "50%"],
    correct: 0
  },
  {
    id: 407,
    question: "Kyoto Protocol is related to:",
    options: ["Climate change", "Air pollution", "Greenhouse Gas", "Water pollution"],
    correct: 0
  },
  {
    id: 408,
    question: "Environmental protection has been made a fundamental duty of every citizen of India under Article:",
    options: ["51-A (g)", "51", "51-A A", "51-A (e)"],
    correct: 0
  },
  {
    id: 409,
    question: "The Forest (Conservation) Act extends to the whole of India except:",
    options: ["Jammu and Kashmir", "Uttar Pradesh", "Karnataka", "Haryana"],
    correct: 0
  },
  {
    id: 410,
    question: "The Air (Prevention and Control of Pollution) Act was enacted in the year:",
    options: ["1981", "1996", "2000", "1974"],
    correct: 0
  },
  {
    id: 411,
    question: "Noise pollution has been inserted as pollution in the Air Act in:",
    options: ["1987", "1981", "1982", "2000"],
    correct: 0
  },
  {
    id: 412,
    question: "The lion in a grassland food chain is an example of:",
    options: ["Tertiary consumer", "Primary consumer", "Secondary consumer", "Producer"],
    correct: 0
  },
  {
    id: 413,
    question: "The flow of energy in an ecosystem is always:",
    options: ["Linear", "Cyclic", "Multidirectional", "Reversible"],
    correct: 0
  },
  {
    id: 414,
    question: "Food webs provide more stability to the ecosystem than food chains because:",
    options: ["They offer alternative pathways for energy flow", "They are shorter than food chains", "They depend only on producers", "They have fewer trophic levels"],
    correct: 0
  },
  {
    id: 415,
    question: "The variety of life forms at all levels of biological organization is called:",
    options: ["Biodiversity", "Ecology", "Ecosystem", "Biomass"],
    correct: 0
  },
  {
    id: 416,
    question: "Which type of biodiversity refers to variations within the same species?",
    options: ["Genetic diversity", "Species diversity", "Ecosystem diversity", "Habitat diversity"],
    correct: 0
  },
  {
    id: 417,
    question: "Which type of biodiversity refers to the variety of species in a given area?",
    options: ["Species diversity", "Genetic diversity", "Ecosystem diversity", "Population diversity"],
    correct: 0
  },
  {
    id: 418,
    question: "Which type of biodiversity refers to different habitats, biotic communities, and ecological processes?",
    options: ["Ecosystem diversity", "Genetic diversity", "Species diversity", "Habitat diversity"],
    correct: 0
  },
  {
    id: 419,
    question: "India is recognized as a mega-diversity nation because:",
    options: ["It has a wide variety of species and ecosystems", "It has the largest forests", "It has only endemic species", "It has maximum wetlands"],
    correct: 0
  },
  {
    id: 420,
    question: "The Himalaya and Indo-Burma regions are examples of:",
    options: ["Biodiversity hotspots", "Genetic reserves", "Wildlife sanctuaries", "Ex-situ conservation sites"],
    correct: 0
  },
  {
    id: 421,
    question: "Which of the following is a consumptive use value of biodiversity?",
    options: ["Fuel wood", "Aesthetic value", "Recreational value", "Cultural value"],
    correct: 0
  },
  {
    id: 422,
    question: "Which of the following is a non-consumptive use value of biodiversity?",
    options: ["Ecotourism", "Food", "Timber", "Medicine"],
    correct: 0
  },
  {
    id: 423,
    question: "The greatest threat to biodiversity is:",
    options: ["Habitat loss", "Ecotourism", "Medicinal plant use", "Ex-situ conservation"],
    correct: 0
  },
  {
    id: 424,
    question: "Which of the following ecosystems has the highest productivity?",
    options: ["Estuary", "Desert", "Grassland", "Tundra"],
    correct: 0
  },
  {
    id: 425,
    question: "The species found only in a particular area and nowhere else are called:",
    options: ["Endemic species", "Endangered species", "Exotic species", "Vulnerable species"],
    correct: 0
  },
  {
    id: 426,
    question: "Which of the following is NOT a threat to biodiversity?",
    options: ["Ex-situ conservation", "Poaching of wildlife", "Habitat destruction", "Man-wildlife conflict"],
    correct: 0
  },
  {
    id: 427,
    question: "Which biodiversity hotspot in India is richest in endemism?",
    options: ["Indo-Burma region", "Himalaya", "Sundarbans", "Gangetic plains"],
    correct: 0
  },
  {
    id: 428,
    question: "Which of the following represents the option value of biodiversity?",
    options: ["Future potential use of biodiversity", "Current use of biodiversity", "Cultural value of biodiversity", "Spiritual value of biodiversity"],
    correct: 0
  },
  {
    id: 429,
    question: "The Western Ghats are a hotspot of biodiversity because they:",
    options: ["Harbor a large number of endemic species", "Are densely populated", "Are used for agriculture", "Are rich in minerals"],
    correct: 0
  },
  {
    id: 430,
    question: "Which international agreement focuses on the conservation of biodiversity?",
    options: ["Convention on Biological Diversity (CBD)", "Kyoto Protocol", "Paris Agreement", "Montreal Protocol"],
    correct: 0
  },
  {
    id: 431,
    question: "Which Indian state is part of both the Indo-Burma and Himalaya hotspots?",
    options: ["Arunachal Pradesh", "Rajasthan", "Kerala", "Maharashtra"],
    correct: 0
  },
  {
    id: 432,
    question: "Which of the following is an example of in-situ conservation of biodiversity?",
    options: ["National park", "Zoo", "Seed bank", "Botanical garden"],
    correct: 0
  },
  {
    id: 433,
    question: "The IUCN Red List provides information about:",
    options: ["Conservation status of species", "Types of ecosystems", "Levels of biodiversity", "Agricultural practices"],
    correct: 0
  },
  {
    id: 434,
    question: "The ethical value of biodiversity refers to:",
    options: ["The right of all species to exist", "Commercial use of species", "Food and medicine", "Recreation"],
    correct: 0
  },
  {
    id: 435,
    question: "Which level of consumers directly depends on green plants for energy?",
    options: ["Primary consumers", "Secondary consumers", "Tertiary consumers", "Quaternary consumers"],
    correct: 0
  },
  {
    id: 436,
    question: "Overexploitation of resources primarily leads to:",
    options: ["Loss of biodiversity", "Increase in biodiversity", "Stabilization of ecosystems", "Formation of new species"],
    correct: 0
  },
  {
    id: 437,
    question: "The term 'Ecosystem' was first coined by:",
    options: ["A.G. Tansley", "Charles Darwin", "Ernst Haeckel", "Odum"],
    correct: 0
  },
  {
    id: 438,
    question: "The word 'Ecology' was first coined by:",
    options: ["Ernst Haeckel", "A.G. Tansley", "Charles Elton", "Linnaeus"],
    correct: 0
  },
  {
    id: 439,
    question: "The root word 'Eco' in Ecology and Ecosystem is derived from Greek 'Oikos', meaning:",
    options: ["House or dwelling place", "Environment", "Organism", "Nature"],
    correct: 0
  },
  {
    id: 440,
    question: "Ecology is mainly concerned with:",
    options: ["Interactions between organisms and their environment", "Evolution of organisms", "Genetic variations", "Geological processes"],
    correct: 0
  },
  {
    id: 441,
    question: "The relationship between Ecology and Ecosystem can be defined as:",
    options: ["Ecology studies interactions, Ecosystem is the structural and functional unit", "Ecosystem creates species, Ecology destroys them", "Ecology is smaller than an Ecosystem", "They are unrelated concepts"],
    correct: 0
  },
  {
    id: 442,
    question: "Which of the following pollutants is most commonly associated with agricultural runoff?",
    options: ["Nitrates and phosphates", "Mercury", "Lead", "Asbestos"],
    correct: 0
  },
  {
    id: 443,
    question: "What is eutrophication?",
    options: ["Excessive growth of algae due to nutrient pollution", "Removal of pollutants from water", "Increase in oxygen levels in water", "Depletion of nutrients in water"],
    correct: 0
  },
  {
    id: 444,
    question: "The presence of which of the following in drinking water indicates contamination by human or animal waste?",
    options: ["Escherichia coli (E. coli)", "Chlorine", "Nitrates", "Iron"],
    correct: 0
  },
  {
    id: 445,
    question: "Acid rain is a type of water pollution caused mainly by:",
    options: ["Sulfur dioxide and nitrogen oxides", "Carbon monoxide and nitrogen", "Methane and hydrogen", "Oxygen and helium"],
    correct: 0
  },
  {
    id: 446,
    question: "In an ecosystem, which organisms return nutrients back to the soil?",
    options: ["Decomposers", "Producers", "Primary consumers", "Secondary consumers"],
    correct: 0
  },
  {
    id: 447,
    question: "The process of removing salt from seawater is called:",
    options: ["Desalination", "Chlorination", "Sedimentation", "Filtration"],
    correct: 0
  },
  {
    id: 448,
    question: "Which of these is not a water-borne disease?",
    options: ["Malaria", "Typhoid", "Cholera", "Dysentery"],
    correct: 0
  },
  {
    id: 449,
    question: "Point source pollution refers to pollution that:",
    options: ["Can be traced to a specific location", "Comes from rain", "Comes from the atmosphere", "Has no specific origin"],
    correct: 0
  },
  {
    id: 450,
    question: "Which of these is a biological method of water purification?",
    options: ["Activated sludge process", "Boiling", "Chlorination", "Reverse osmosis"],
    correct: 0
  },
  {
    id: 451,
    question: "Pesticides and fertilizers are primarily responsible for:",
    options: ["Soil pollution", "Increasing biodiversity", "Improving soil texture", "Erosion control"],
    correct: 0
  },
  {
    id: 452,
    question: "Which of the following is a biodegradable pollutant?",
    options: ["Paper", "Plastic", "Glass", "DDT"],
    correct: 0
  },
  {
    id: 453,
    question: "What is bioremediation?",
    options: ["Use of microorganisms to clean pollutants", "Use of chemicals to remove pollution", "Burning of waste", "Soil erosion control"],
    correct: 0
  },
  {
    id: 454,
    question: "Landfills are a source of:",
    options: ["Soil contamination", "Soil improvement", "Groundwater recharge", "Pest control"],
    correct: 0
  },
  {
    id: 455,
    question: "What is leaching in soil?",
    options: ["Removal of nutrients by water", "Fertilizer application", "Aeration of soil", "Addition of humus"],
    correct: 0
  },
  {
    id: 456,
    question: "What is smog primarily composed of?",
    options: ["Smoke and fog", "Water vapor and dust", "Ozone and carbon dioxide", "Nitrogen and oxygen"],
    correct: 0
  },
  {
    id: 457,
    question: "Which one of the following is a man-made/artificial ecosystem?",
    options: ["Aquarium", "Forest", "Pond", "Grassland"],
    correct: 0
  },
  {
    id: 458,
    question: "Which of the following is a greenhouse gas contributing to global warming?",
    options: ["Methane", "Nitrogen", "Argon", "Neon"],
    correct: 0
  },
  {
    id: 459,
    question: "What is the effect of ozone depletion?",
    options: ["Increased ultraviolet radiation reaching Earth", "Increased greenhouse effect", "Decreased rainfall", "More acid rain"],
    correct: 0
  },
  {
    id: 460,
    question: "Which unit is commonly used to measure air pollution levels (such as particulate matter concentration)?",
    options: ["Micrograms per cubic meter (µg/m³)", "Decibel (dB)", "Hertz (Hz)", "Watts (W)"],
    correct: 0
  },
  {
    id: 461,
    question: "Which of the following is a natural source of air pollution?",
    options: ["Volcanic eruptions", "Factory emissions", "Automobile exhaust", "Burning fossil fuels"],
    correct: 0
  },
  {
    id: 462,
    question: "Which unit is used to measure noise levels?",
    options: ["Decibel (dB)", "Watt", "Hertz", "Newton"],
    correct: 0
  },
  {
    id: 463,
    question: "What noise level is generally considered the threshold for harmful noise?",
    options: ["85 dB", "30 dB", "120 dB", "60 dB"],
    correct: 0
  },
  {
    id: 464,
    question: "What does MSW stand for in waste management?",
    options: ["Municipal Solid Waste", "Mixed Solid Waste", "Managed Solid Waste", "Medical Solid Waste"],
    correct: 0
  },
  {
    id: 465,
    question: "Which type of waste is classified as hazardous?",
    options: ["Chemical solvents", "Food waste", "Paper waste", "Plastic bottles"],
    correct: 0
  },
  {
    id: 466,
    question: "The process of converting organic waste into nutrient-rich compost is called:",
    options: ["Composting", "Incineration", "Landfilling", "Recycling"],
    correct: 0
  },
  {
    id: 467,
    question: "What is leachate?",
    options: ["Liquid formed when waste decomposes in a landfill", "A type of hazardous waste", "Solid waste material", "Gas produced during incineration"],
    correct: 0
  },
  {
    id: 468,
    question: "The source of all energy in an ecosystem is:",
    options: ["Sunlight", "Water", "Oxygen", "Soil nutrients"],
    correct: 0
  },
  {
    id: 469,
    question: "Which international treaty deals with hazardous waste movement?",
    options: ["Basel Convention", "Kyoto Protocol", "Montreal Protocol", "Paris Agreement"],
    correct: 0
  },
  {
    id: 470,
    question: "Incineration of hazardous waste primarily helps in:",
    options: ["Waste volume reduction", "Producing compost", "Groundwater recharge", "Increasing toxicity"],
    correct: 0
  },
  {
    id: 471,
    question: "Which of the following is a solid waste segregation technique?",
    options: ["Source separation", "Bulk dumping", "Open burning", "Leachate treatment"],
    correct: 0
  },
  {
    id: 472,
    question: "Which hazardous waste treatment process involves heating waste in the absence of oxygen?",
    options: ["Pyrolysis", "Incineration", "Composting", "Landfilling"],
    correct: 0
  },
  {
    id: 473,
    question: "Which solid waste management method recovers energy from waste?",
    options: ["Incineration", "Landfilling", "Composting", "Recycling"],
    correct: 0
  },
  {
    id: 474,
    question: "Burning e-waste can release:",
    options: ["Dioxins and furans", "Oxygen", "Carbon dioxide only", "Chlorofluorocarbons"],
    correct: 0
  },
  {
    id: 475,
    question: "What is one of the most hazardous materials found in e-waste?",
    options: ["Lead", "Plastic", "Glass", "Aluminium"],
    correct: 0
  },
  {
    id: 476,
    question: "Which international standard is commonly used for OHASMS?",
    options: ["ISO 45001", "ISO 9001", "ISO 27001", "ISO 14001"],
    correct: 0
  },
  {
    id: 477,
    question: "The primary aim of OHASMS is to:",
    options: ["Prevent workplace injuries and illnesses", "Improve product quality", "Manage environmental impact", "Increase production speed"],
    correct: 0
  },
  {
    id: 478,
    question: "Which international event led to the celebration of World Environment Day?",
    options: ["Stockholm Conference", "Rio Earth Summit", "Paris Agreement", "Kyoto Protocol"],
    correct: 0
  },

  // ==================== FILE 3: Unit 2 MCQs (DOCX) ====================
  {
    id: 479,
    question: "Sustainability focuses on:",
    options: ["Meeting present needs without compromising future needs", "Present generation only", "Future generations only", "Profit maximization"],
    correct: 0
  },
  {
    id: 480,
    question: "Assertion (A): Renewable energy sources reduce greenhouse gas emissions. Reason (R): They do not emit CO₂ during operation.",
    options: ["A and R true, R is correct explanation", "A and R true, but unrelated", "A true, R false", "A false, R true"],
    correct: 0
  },
  {
    id: 481,
    question: "The Brundtland Report was published in:",
    options: ["1987", "1980", "1992", "2000"],
    correct: 0
  },
  {
    id: 482,
    question: "Overuse of groundwater is an example of:",
    options: ["Environmental unsustainability", "Economic sustainability", "Social sustainability", "Policy failure only"],
    correct: 0
  },
  {
    id: 483,
    question: "The circular economy approach encourages:",
    options: ["Recycling and resource reuse", "Linear production and disposal", "Increased resource extraction", "Export of waste"],
    correct: 0
  },
  {
    id: 484,
    question: "The Rio Earth Summit on sustainable development was held in:",
    options: ["1992", "1972", "1987", "2015"],
    correct: 0
  },
  {
    id: 485,
    question: "Which is a major challenge to sustainability in developing nations?",
    options: ["Overpopulation", "Cold climate", "Overeducation", "Industrial automation"],
    correct: 0
  },
  {
    id: 486,
    question: "Fossil fuel dependency affects primarily the:",
    options: ["Environmental pillar", "Economic pillar", "Social pillar", "Technological pillar"],
    correct: 0
  },
  {
    id: 487,
    question: "Sustainable agriculture promotes:",
    options: ["Conservation of soil and biodiversity", "Use of more pesticides", "Deforestation", "Over-irrigation"],
    correct: 0
  },
  {
    id: 488,
    question: "The 3Rs concept in waste management stands for:",
    options: ["Reduce, Reuse, Recycle", "Remove, Rebuild, Recover", "Reclaim, Refine, Replace", "Reuse, Reject, Retain"],
    correct: 0
  },
  {
    id: 489,
    question: "Carbon footprint refers to:",
    options: ["Greenhouse gas emissions", "Soil fertility level", "Waste generation rate", "Air quality index"],
    correct: 0
  },
  {
    id: 490,
    question: "The major greenhouse gas responsible for global warming is:",
    options: ["Carbon dioxide", "Oxygen", "Methane", "Nitrogen"],
    correct: 0
  },
  {
    id: 491,
    question: "Which is a social aspect of sustainability?",
    options: ["Public health", "Energy efficiency", "Biodiversity", "Recycling"],
    correct: 0
  },
  {
    id: 492,
    question: "A sustainable city is one that:",
    options: ["Uses efficient waste and energy systems", "Promotes unplanned expansion", "Encourages high fuel use", "Ignores green spaces"],
    correct: 0
  },
  {
    id: 493,
    question: "Which of the following represents social sustainability?",
    options: ["Equal access to education", "Overfishing", "Deforestation", "Industrial pollution"],
    correct: 0
  },
  {
    id: 494,
    question: "The main focus of the Paris Agreement 2015 is:",
    options: ["Reduction of greenhouse gas emissions", "Biodiversity protection", "Waste recycling", "Population control"],
    correct: 0
  },
  {
    id: 495,
    question: "Green buildings are designed mainly to:",
    options: ["Use natural light and energy efficiently", "Increase carbon emissions", "Reduce ventilation", "Increase energy consumption"],
    correct: 0
  },
  {
    id: 496,
    question: "Sustainability considers human societies and economies as:",
    options: ["Embedded within the natural environment", "Separate from the natural environment", "Independent of ecosystems", "Driven solely by financial systems"],
    correct: 0
  },
  {
    id: 497,
    question: "Which of the following are the three pillars of sustainability also called the three Es?",
    options: ["Environment, Social Equity, Economics", "Ecology, Energy, Economy", "Environment, Society, Politics", "Environment, Education, Engineering"],
    correct: 0
  },
  {
    id: 498,
    question: "Trade-offs in sustainability decisions mean:",
    options: ["Choices often involve balancing environmental, economic, and social values", "All solutions are universally beneficial", "Economic growth always outweighs the environment", "There is a single best solution for every problem"],
    correct: 0
  },
  {
    id: 499,
    question: "What is the main criticism of focusing solely on economic growth?",
    options: ["It ignores ecological and social limits", "It guarantees environmental balance", "It improves equality automatically", "It reduces global trade"],
    correct: 0
  },
  {
    id: 500,
    question: "Which of the following is NOT considered part of social equity in sustainability?",
    options: ["Rapid industrial automation regardless of jobs", "Human rights", "Education and healthcare access", "Fair employment opportunities"],
    correct: 0
  },
  {
    id: 501,
    question: "The goal of applying the three pillars of sustainability together is to:",
    options: ["Create a balance between society, economy, and environment", "Eliminate the need for economic systems", "Focus only on carbon reduction", "Maximize immediate consumption"],
    correct: 0
  },
  {
    id: 502,
    question: "Kyoto Protocol is related to:",
    options: ["Greenhouse gas reduction", "Ozone protection", "Biodiversity", "Forest laws"],
    correct: 0
  },
  {
    id: 503,
    question: "In sustainability, the concept of embedded systems means:",
    options: ["The economy and society exist within the environment", "The environment exists within the economy", "The three pillars function independently", "Resources are infinite and replaceable"],
    correct: 0
  },
  {
    id: 504,
    question: "Why is decision-making in sustainability often difficult?",
    options: ["It involves trade-offs between economic, social, and environmental priorities", "There are no environmental constraints", "It always leads to profit without challenges", "It guarantees universal acceptance of solutions"],
    correct: 0
  },
  {
    id: 505,
    question: "Which of the following best captures the essence of sustainability?",
    options: ["Balancing environmental protection, social justice, and economic development", "Prioritizing rapid industrial growth", "Treating economy as separate from natural limits", "Ignoring intergenerational equity"],
    correct: 0
  },
  {
    id: 506,
    question: "Which example shows a sustainability trade-off?",
    options: ["Wind turbines providing clean energy but affecting bird migration", "Recycling plastic bottles into clothing fabric", "Installing rooftop solar panels to reduce fossil fuel use", "Using bicycles instead of cars for commuting"],
    correct: 0
  },
  {
    id: 507,
    question: "How many SDGs and targets are there in total?",
    options: ["17 Goals and 169 targets", "8 Goals and 20 targets", "10 Goals and 100 targets", "20 Goals and 200 targets"],
    correct: 0
  },
  {
    id: 508,
    question: "The deadline for achieving SDGs is:",
    options: ["2030", "2025", "2040", "2050"],
    correct: 0
  },
  {
    id: 509,
    question: "Goal 1 of SDGs aims to:",
    options: ["No Poverty", "Zero Hunger", "Quality Education", "Decent Work"],
    correct: 0
  },
  {
    id: 510,
    question: "The poverty line set by SDGs for extreme poverty is:",
    options: ["$1.90/day", "$1.50/day", "$2.50/day", "$5.00/day"],
    correct: 0
  },
  {
    id: 511,
    question: "Goal 2 (Zero Hunger) focuses on:",
    options: ["Ending hunger and promoting sustainable agriculture", "Free housing for all", "Ending poverty in all forms", "Reducing food wastage only"],
    correct: 0
  },
  {
    id: 512,
    question: "Reducing maternal mortality ratio to less than 70 per 100,000 live births is a target under:",
    options: ["Goal 3", "Goal 2", "Goal 4", "Goal 5"],
    correct: 0
  },
  {
    id: 513,
    question: "A carbon credit equals:",
    options: ["1 tonne CO₂", "1 kg CO₂", "100 tonnes CO₂", "10 tonnes CO₂"],
    correct: 0
  },
  {
    id: 514,
    question: "Free, equitable, quality primary and secondary education is targeted under:",
    options: ["Goal 4 – Quality Education", "Goal 2 – Zero Hunger", "Goal 6 – Clean Water and Sanitation", "Goal 7 – Affordable and Clean Energy"],
    correct: 0
  },
  {
    id: 515,
    question: "Eliminating child marriage is a target of:",
    options: ["Goal 5 - Gender Equality", "Goal 3 – Good Health and Well being", "Goal 4 - Quality Education", "Goal 6 - Clean Water and Sanitation"],
    correct: 0
  },
  {
    id: 516,
    question: "Ensuring universal access to safe drinking water falls under:",
    options: ["Goal 6", "Goal 9", "Goal 11", "Goal 13"],
    correct: 0
  },
  {
    id: 517,
    question: "Goal 7 of SDGs focuses on:",
    options: ["Affordable and Clean Energy", "Sustainable Cities", "Climate Action", "Peace and Justice"],
    correct: 0
  },
  {
    id: 518,
    question: "Doubling the rate of improvement in energy efficiency is part of:",
    options: ["Goal 7", "Goal 5", "Goal 8", "Goal 12"],
    correct: 0
  },
  {
    id: 519,
    question: "Achieving full and productive employment and decent work for all is a target under:",
    options: ["Goal 8", "Goal 6", "Goal 10", "Goal 15"],
    correct: 0
  },
  {
    id: 520,
    question: "Goal 9 (Industry, Innovation, and Infrastructure) emphasizes:",
    options: ["Promoting sustainable industrialization and resilient infrastructure", "Reducing inequality", "Sustainable agriculture", "Protecting marine ecosystems"],
    correct: 0
  },
  {
    id: 521,
    question: "Goal 10 aims to:",
    options: ["Reduce inequalities within and among countries", "Promote life on land", "Ensure responsible consumption", "Enhance peace and justice"],
    correct: 0
  },
  {
    id: 522,
    question: "Ensuring sustainable transport systems and affordable housing is part of:",
    options: ["Goal 11", "Goal 9", "Goal 13", "Goal 17"],
    correct: 0
  },
  {
    id: 523,
    question: "Reducing per capita global food waste is a target under:",
    options: ["Goal 12", "Goal 2", "Goal 14", "Goal 15"],
    correct: 0
  },
  {
    id: 524,
    question: "Which SDG ensures 'Affordable and Clean Energy'?",
    options: ["SDG 7", "SDG 5", "SDG 6", "SDG 8"],
    correct: 0
  },
  {
    id: 525,
    question: "Strengthening resilience to climate-related disasters is a target under:",
    options: ["Goal 13", "Goal 7", "Goal 14", "Goal 16"],
    correct: 0
  },
  {
    id: 526,
    question: "Preventing and significantly reducing marine pollution is targeted under:",
    options: ["Goal 14", "Goal 12", "Goal 15", "Goal 17"],
    correct: 0
  },
  {
    id: 527,
    question: "Goal 17 of the SDGs is primarily focused on:",
    options: ["Enhancing global partnerships and mobilizing resources", "Promoting innovation and infrastructure", "Providing justice and strong institutions", "Reducing poverty in all forms"],
    correct: 0
  },
  {
    id: 528,
    question: "What is the main purpose of sustainability indicators?",
    options: ["Evaluate progress toward SDGs", "Track GDP growth", "Monitor stock markets", "Measure industrial profits"],
    correct: 0
  },
  {
    id: 529,
    question: "Which of the following is an environmental indicator?",
    options: ["Carbon footprint", "Literacy rate", "Employment rate", "GDP growth"],
    correct: 0
  },
  {
    id: 530,
    question: "Which indicator measures freshwater used in producing goods and services?",
    options: ["Water footprint", "Water scarcity index", "Carbon footprint", "Energy efficiency index"],
    correct: 0
  },
  {
    id: 531,
    question: "Which SDG focuses on climate action?",
    options: ["SDG 13", "SDG 7", "SDG 12", "SDG 15"],
    correct: 0
  },
  {
    id: 532,
    question: "What does SMART stand for in sustainability indicators?",
    options: ["Specific, Measurable, Achievable, Relevant, Time-bound", "Social, Measurable, Accurate, Relevant, Timely", "Sustainable, Monetary, Actionable, Reliable, Targeted", "Standardized, Manageable, Accurate, Realistic, Timely"],
    correct: 0
  },
  {
    id: 533,
    question: "Which of the following is NOT a social indicator?",
    options: ["Air quality", "Life expectancy", "Employment rate", "Gender equality"],
    correct: 0
  },
  {
    id: 534,
    question: "Which economic indicator measures value generated per unit of natural resource consumed?",
    options: ["Resource productivity", "Green GDP", "Financial stability", "Sustainable consumption"],
    correct: 0
  },
  {
    id: 535,
    question: "Which is an example of climate change mitigation?",
    options: ["Afforestation", "Overfishing", "Urban sprawl", "Burning coal"],
    correct: 0
  },
  {
    id: 536,
    question: "Which intervention area addresses reduction of industrial and vehicular emissions?",
    options: ["Pollution control", "Non-Renewable energy implementation", "Water utilization", "Fossil fuels"],
    correct: 0
  },
  {
    id: 537,
    question: "Which of the following is a local environmental issue?",
    options: ["Urban heat islands", "Global warming", "Ocean acidification", "Deforestation in Amazon"],
    correct: 0
  },
  {
    id: 538,
    question: "Circular economy practices are part of which intervention area?",
    options: ["Environmental", "Social", "Economic", "Educational"],
    correct: 0
  },
  {
    id: 539,
    question: "Which of the following is an example of a social indicator?",
    options: ["Literacy rate", "Biodiversity", "Energy consumption", "CO₂ emissions"],
    correct: 0
  },
  {
    id: 540,
    question: "Which environmental indicator tracks energy use from renewable and non-renewable sources?",
    options: ["Energy consumption", "Resource productivity", "Water footprint", "Financial stability"],
    correct: 0
  },
  {
    id: 541,
    question: "Which of the following is an economic intervention area?",
    options: ["Sustainable business practices", "Renewable energy implementation", "Health improvement programs", "Education and awareness"],
    correct: 0
  },
  {
    id: 542,
    question: "Which of these is a climate change metric?",
    options: ["Carbon footprint", "Literacy rate", "Employment rate", "Financial stability"],
    correct: 0
  },
  {
    id: 543,
    question: "Which of the following is a social intervention area?",
    options: ["Gender equality & social inclusion", "Water conservation", "Pollution control", "Renewable energy implementation"],
    correct: 0
  },
  {
    id: 544,
    question: "Which intervention area includes rainwater harvesting and efficient irrigation?",
    options: ["Environmental", "Social", "Economic", "Educational"],
    correct: 0
  },
  {
    id: 545,
    question: "Which indicator measures the level of hazardous waste disposal?",
    options: ["Environmental indicator", "Social indicator", "Economic indicator", "Cultural indicator"],
    correct: 0
  },
  {
    id: 546,
    question: "Assertion (A): SDG 14 relates to Life below Water. Reason (R): It addresses marine pollution.",
    options: ["A and R true, R is correct explanation", "A true, R false", "Both false", "A false, R true"],
    correct: 0
  },
  {
    id: 547,
    question: "Which indicator measures GDP adjusted for sustainability?",
    options: ["Green GDP", "Resource productivity", "Carbon footprint", "Water footprint"],
    correct: 0
  },
  {
    id: 548,
    question: "Which of the following is a national-level application of sustainability indicators?",
    options: ["Prioritizing policies based on SDG targets", "Tracking municipal waste generation", "Promoting local green spaces", "Educating communities"],
    correct: 0
  },
  {
    id: 549,
    question: "Which indicator helps identify gaps in gender equality in the workforce?",
    options: ["Gender inequality index", "Life expectancy", "Water footprint", "Energy consumption"],
    correct: 0
  },
  {
    id: 550,
    question: "Which intervention area promotes adoption of green supply chains and eco-certifications?",
    options: ["Economic", "Social", "Environmental", "Policy"],
    correct: 0
  },
  {
    id: 551,
    question: "Which indicator monitors participation in decision-making and social cohesion?",
    options: ["Social indicator", "Environmental indicator", "Economic indicator", "Governance indicator"],
    correct: 0
  },
  {
    id: 552,
    question: "Which of the following is a practical application of sustainability indicators for industries?",
    options: ["Monitoring energy consumption and emissions", "Promoting local festivals", "Encouraging urban heat islands", "Increasing air pollution"],
    correct: 0
  },
  {
    id: 553,
    question: "Which indicator measures material consumption per capita?",
    options: ["Sustainable consumption", "Resource productivity", "Carbon footprint", "Water footprint"],
    correct: 0
  },
  {
    id: 554,
    question: "Which intervention area focuses on smart cities and public transport systems?",
    options: ["Economic", "Social", "Environmental", "Cultural"],
    correct: 0
  },
  {
    id: 555,
    question: "Which of these is an example of environmental intervention for biodiversity?",
    options: ["Protected areas and reforestation", "Vocational training programs", "Green urban planning", "Sustainable business practices"],
    correct: 0
  },
  {
    id: 556,
    question: "Which of the following is a key feature of effective sustainability indicators?",
    options: ["SMART", "Expensive", "Subjective", "Arbitrary"],
    correct: 0
  },
  {
    id: 557,
    question: "Which stage has highest carbon footprint in manufacturing?",
    options: ["Raw material extraction", "Packaging", "Transport", "Disposal"],
    correct: 0
  },
  {
    id: 558,
    question: "Which of the following is a regional environmental issue?",
    options: ["Air pollution from industries", "Global warming", "Urban heat islands", "Deforestation in the Amazon"],
    correct: 0
  },
  {
    id: 559,
    question: "Linking indicators to intervention areas helps to:",
    options: ["Ensure data-driven decision-making", "Maximize profits only", "Reduce literacy rates", "Ignore climate issues"],
    correct: 0
  },
  {
    id: 560,
    question: "The Montreal Protocol aims to protect which part of the environment?",
    options: ["Ozone layer", "Forests", "Oceans", "Air pollution control"],
    correct: 0
  },
  {
    id: 561,
    question: "The Kyoto Protocol focuses on reducing which of the following?",
    options: ["Greenhouse gases", "Deforestation", "Acid rain", "Nuclear waste"],
    correct: 0
  },
  {
    id: 562,
    question: "The Paris Agreement (2015) seeks to limit global temperature rise to below:",
    options: ["2°C", "3°C", "4°C", "5°C"],
    correct: 0
  },
  {
    id: 563,
    question: "The Basel Convention deals with:",
    options: ["Control of hazardous waste movement", "Forest management", "Air quality improvement", "Water conservation"],
    correct: 0
  },
  {
    id: 564,
    question: "The Nagoya Protocol is associated with:",
    options: ["Access to genetic resources and benefit sharing", "Air pollution control", "Carbon trading", "Protection of marine life"],
    correct: 0
  },
  {
    id: 565,
    question: "Which protocol focuses on biosafety in handling genetically modified organisms?",
    options: ["Cartagena Protocol", "Kyoto Protocol", "Montreal Protocol", "Nagoya Protocol"],
    correct: 0
  },
  {
    id: 566,
    question: "The Gothenburg Protocol aims to control:",
    options: ["Air pollutants like sulfur and nitrogen oxides", "Marine pollution", "Plastic waste", "Deforestation"],
    correct: 0
  },
  {
    id: 567,
    question: "Which year was the Montreal Protocol signed?",
    options: ["1987", "1985", "1990", "1992"],
    correct: 0
  },
  {
    id: 568,
    question: "The main GHG from agriculture is:",
    options: ["Methane", "CO₂", "Nitrous oxide", "Ozone"],
    correct: 0
  },
  {
    id: 569,
    question: "The Kyoto Protocol introduced the concept of:",
    options: ["Carbon credit trading", "Sustainable cities", "Forest replanting programs", "Ocean clean-up"],
    correct: 0
  },
  {
    id: 570,
    question: "Which of the following statements about the Paris Agreement is TRUE?",
    options: ["It allows countries to set their own climate action plans (NDCs)", "It replaced the Montreal Protocol", "It sets legally binding emission targets for all countries", "It only applies to developed nations"],
    correct: 0
  },
  {
    id: 571,
    question: "Climate change refers to:",
    options: ["Long-term alteration in temperature and weather patterns", "Short-term changes in weather", "Sudden natural disasters", "Temporary climatic fluctuations"],
    correct: 0
  },
  {
    id: 572,
    question: "Which of the following gases is a major greenhouse gas?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Argon"],
    correct: 0
  },
  {
    id: 573,
    question: "Since the pre-industrial era, global average temperature has risen by approximately:",
    options: ["1.1°C", "0.5°C", "2.5°C", "3°C"],
    correct: 0
  },
  {
    id: 574,
    question: "The melting of glaciers mainly contributes to:",
    options: ["Sea level rise", "Increased rainfall", "More snowfall", "Ozone depletion"],
    correct: 0
  },
  {
    id: 575,
    question: "Ocean acidification occurs primarily because:",
    options: ["Oceans absorb excess CO₂", "Pollution from plastic waste", "Oil spills", "Temperature drop in oceans"],
    correct: 0
  },
  {
    id: 576,
    question: "Which island nations are most threatened by rising sea levels?",
    options: ["Maldives and Tuvalu", "Japan and Taiwan", "Sri Lanka and Cuba", "Indonesia and Philippines"],
    correct: 0
  },
  {
    id: 577,
    question: "The Paris Agreement (2015) aims to limit global warming to:",
    options: ["Below 2°C, preferably 1.5°C", "Below 3°C", "Below 4°C", "Exactly 2°C"],
    correct: 0
  },
  {
    id: 578,
    question: "The REDD+ program focuses on:",
    options: ["Forest protection and reducing deforestation", "Plastic waste management", "Ocean cleanup projects", "Carbon trading in industries"],
    correct: 0
  },
  {
    id: 579,
    question: "Carbon neutrality means:",
    options: ["Balancing emitted & absorbed CO₂", "Zero energy use", "Only solar energy", "Avoiding trees"],
    correct: 0
  },
  {
    id: 580,
    question: "The Cyclone Amphan (2020) primarily affected which region?",
    options: ["India and Bangladesh", "South America", "North Africa", "Western Europe"],
    correct: 0
  },
  {
    id: 581,
    question: "The 'Great Green Wall' initiative in Africa is meant to:",
    options: ["Combat desertification", "Stop deforestation", "Build flood barriers", "Protect wildlife sanctuaries"],
    correct: 0
  },
  {
    id: 582,
    question: "Ethiopia's 2019 reforestation campaign is notable for:",
    options: ["Planting 350 million trees in one day", "Reducing industrial pollution", "Creating new lakes", "Building wind farms"],
    correct: 0
  },
  {
    id: 583,
    question: "The European Green Deal aims to make Europe:",
    options: ["Carbon neutral by 2050", "Plastic-free by 2030", "Fully industrialized by 2040", "Deforestation-free by 2025"],
    correct: 0
  },
  {
    id: 584,
    question: "The Netherlands Adaptation Model is famous for:",
    options: ["Sea-level management using dikes and floating houses", "Desert agriculture", "Air pollution control", "Recycling wastewater"],
    correct: 0
  },
  {
    id: 585,
    question: "Urban Heat Island Effect is caused by:",
    options: ["High concentration of buildings and concrete", "Excess greenery in cities", "Low energy consumption", "Frequent rainfall"],
    correct: 0
  },
  {
    id: 586,
    question: "The Chennai Rainwater Harvesting (RWH) Mandate is an example of:",
    options: ["Groundwater recharge initiative", "Industrial pollution control", "Air quality monitoring", "Coastal zone management"],
    correct: 0
  },
  {
    id: 587,
    question: "Delhi's Odd-Even Vehicle Scheme was introduced to:",
    options: ["Reduce air pollution and traffic congestion", "Control population", "Increase road safety", "Promote electric vehicles"],
    correct: 0
  },
  {
    id: 588,
    question: "Indore Smart City became India's cleanest city due to:",
    options: ["Waste segregation and community participation", "Industrial development", "Large-scale deforestation", "Population control measures"],
    correct: 0
  },
  {
    id: 589,
    question: "A key local solution to urban flooding is:",
    options: ["Green urban planning and rainwater harvesting", "Using plastic bags", "Constructing more concrete roads", "Expanding landfills"],
    correct: 0
  },
  {
    id: 590,
    question: "The three main aspects of sustainability are:",
    options: ["Environmental, social, economic", "Political, cultural, ecological", "Financial, agricultural, cultural", "Scientific, ecological, spiritual"],
    correct: 0
  },
  {
    id: 591,
    question: "Which SDG relates to Responsible Consumption & Production?",
    options: ["SDG 12", "SDG 10", "SDG 11", "SDG 13"],
    correct: 0
  },
  {
    id: 592,
    question: "A carbon footprint measures the total amount of which gases emitted by human activity?",
    options: ["Greenhouse gases", "Nitrogen gases", "Oxygen", "Helium"],
    correct: 0
  },
  {
    id: 593,
    question: "The unit of measurement for a carbon footprint is:",
    options: ["Metric ton of CO₂ equivalent (CO₂e)", "Kilogram of sulfur dioxide", "Kilowatt-hour", "Parts per million"],
    correct: 0
  },
  {
    id: 594,
    question: "The primary carbon footprint includes emissions from:",
    options: ["Travel and energy use", "Food packaging", "Imported goods", "Agricultural waste only"],
    correct: 0
  },
  {
    id: 595,
    question: "The secondary carbon footprint refers to:",
    options: ["Indirect emissions from goods and services", "Direct emissions from transport", "Soil carbon absorption", "Industrial waste disposal"],
    correct: 0
  },
  {
    id: 596,
    question: "Which of the following activities increases the carbon footprint?",
    options: ["Burning fossil fuels", "Using public transport", "Recycling waste", "Installing solar panels"],
    correct: 0
  },
  {
    id: 597,
    question: "The major greenhouse gas responsible for climate change is:",
    options: ["Carbon dioxide", "Nitrogen", "Hydrogen", "Argon"],
    correct: 0
  },
  {
    id: 598,
    question: "Deforestation increases carbon footprint because it:",
    options: ["Reduces carbon absorption by trees", "Increases oxygen levels", "Increases rainfall", "Produces methane only"],
    correct: 0
  },
  {
    id: 599,
    question: "A carbon credit represents the right to emit:",
    options: ["1 metric ton of CO₂", "1 kilogram of CO₂", "100 kilograms of CO₂", "10 metric tons of CO₂"],
    correct: 0
  },
  {
    id: 600,
    question: "The main goal of the carbon credit system is to:",
    options: ["Reduce greenhouse gas emissions", "Encourage deforestation", "Increase industrial growth only", "Promote fossil fuel use"],
    correct: 0
  },
  {
    id: 601,
    question: "The Kyoto Protocol introduced which of the following concepts?",
    options: ["Emission trading and carbon credits", "Biodiversity conservation", "Plastic waste management", "Ozone layer recovery"],
    correct: 0
  },
  {
    id: 602,
    question: "Blue water in water footprint means:",
    options: ["Surface & groundwater", "Rainwater", "Polluted water", "Desalinated water"],
    correct: 0
  },
  {
    id: 603,
    question: "Which of the following is an example of a carbon credit project?",
    options: ["Solar power plant", "Coal mining", "Deforestation", "Oil drilling"],
    correct: 0
  },
  {
    id: 604,
    question: "In the carbon credit system, if a company emits less than its quota, it can:",
    options: ["Sell the extra credits", "Discard the unused credits", "Increase emissions freely", "Pay more taxes"],
    correct: 0
  },
  {
    id: 605,
    question: "The voluntary carbon market involves:",
    options: ["Self-motivated emission offsetting", "Legal obligations", "Government-mandated trading", "Forest cutting permits"],
    correct: 0
  },
  {
    id: 606,
    question: "Which of the following reduces a person's carbon footprint?",
    options: ["Using renewable energy", "Driving petrol vehicles", "Air travel", "Buying imported goods frequently"],
    correct: 0
  },
  {
    id: 607,
    question: "The term 'carbon neutral' refers to:",
    options: ["Balancing emitted and offset carbon", "Increasing emissions steadily", "Reducing water pollution", "Producing zero waste"],
    correct: 0
  },
  {
    id: 608,
    question: "Which of the following gases is not a greenhouse gas?",
    options: ["Helium", "Carbon dioxide", "Methane", "Nitrous oxide"],
    correct: 0
  },
  {
    id: 609,
    question: "The Paris Agreement (2015) primarily focuses on:",
    options: ["Limiting global temperature rise", "Biodiversity protection", "Promoting fossil fuel use", "Plastic recycling"],
    correct: 0
  },
  {
    id: 610,
    question: "The carbon trading system provides a:",
    options: ["Financial incentive to reduce emissions", "Punishment for all industries", "Free market for fossil fuels", "Ban on renewable energy"],
    correct: 0
  },
  {
    id: 611,
    question: "One effective way for industries to earn carbon credits is to:",
    options: ["Switch to renewable energy sources", "Increase production waste", "Burn more coal", "Ignore emission limits"],
    correct: 0
  },
  {
    id: 612,
    question: "Who introduced the concept of 'Water Footprint'?",
    options: ["Arjen Hoekstra", "Peter Gleick", "Rachel Carson", "Vandana Shiva"],
    correct: 0
  },
  {
    id: 613,
    question: "Which industry is largest CO₂ emitter?",
    options: ["Energy sector", "Transport", "Agriculture", "Tourism"],
    correct: 0
  },
  {
    id: 614,
    question: "Which ISO standard specifically deals with water footprint assessment?",
    options: ["ISO 14046", "ISO 14001", "ISO 9001", "ISO 50001"],
    correct: 0
  },
  {
    id: 615,
    question: "Which component of water footprint refers to freshwater withdrawn from rivers, lakes, or groundwater?",
    options: ["Blue WF", "Green WF", "Grey WF", "Black WF"],
    correct: 0
  },
  {
    id: 616,
    question: "Which industry is considered one of the most water-intensive?",
    options: ["Textile", "Automobile", "IT Industry", "Electronics"],
    correct: 0
  },
  {
    id: 617,
    question: "How many liters of water are approximately required to produce 1 kg of cotton?",
    options: ["10,000 liters", "1000 liters", "2700 liters", "100 liters"],
    correct: 0
  },
  {
    id: 618,
    question: "Average water footprint of a cotton T-shirt is about:",
    options: ["2700 liters", "100 liters", "500 liters", "10,000 liters"],
    correct: 0
  },
  {
    id: 619,
    question: "In textile industry, most water consumption occurs during:",
    options: ["Dyeing", "Spinning", "Packaging", "Transport"],
    correct: 0
  },
  {
    id: 620,
    question: "Which advanced technology helps in reducing water consumption in dyeing?",
    options: ["Supercritical CO₂ Dyeing", "UV Curing", "Laser Cutting", "Ultrasonic Cleaning"],
    correct: 0
  },
  {
    id: 621,
    question: "Zero Liquid Discharge (ZLD) system mainly aims at:",
    options: ["Recycling all wastewater", "Reducing carbon emissions", "Eliminating solid waste", "Rainwater harvesting"],
    correct: 0
  },
  {
    id: 622,
    question: "Which of the following is a certification for sustainable textiles?",
    options: ["GOTS", "LEED", "Higg Index", "BREEAM"],
    correct: 0
  },
  {
    id: 623,
    question: "Which company adopted a 'Water Neutrality' initiative?",
    options: ["Coca-Cola", "PepsiCo", "Nestlé", "Unilever"],
    correct: 0
  },
  {
    id: 624,
    question: "ISO 14001 is related to:",
    options: ["Environmental management", "Product safety", "Profit maximization", "Food quality"],
    correct: 0
  },
  {
    id: 625,
    question: "The industry with the highest grey water footprint due to bleaching agents is:",
    options: ["Paper & Pulp", "Cement", "Textile", "Steel"],
    correct: 0
  },
  {
    id: 626,
    question: "In power plants, which process consumes the maximum water?",
    options: ["Cooling", "Coal handling", "Turbine operation", "Ash disposal"],
    correct: 0
  },
  {
    id: 627,
    question: "Which technology helps reduce water use in thermal power plants?",
    options: ["Dry cooling", "Wet scrubbers", "Gasification", "Solar panels"],
    correct: 0
  },
  {
    id: 628,
    question: "Which is NOT a challenge in water footprint implementation?",
    options: ["Abundant global water supply", "Lack of data", "Regional differences in water availability", "High cost of treatment"],
    correct: 0
  },
  {
    id: 629,
    question: "What is the main environmental benefit of assessing water footprint?",
    options: ["Identifies water use hotspots", "Reduces noise pollution", "Improves biodiversity directly", "Increases energy efficiency"],
    correct: 0
  },
  {
    id: 630,
    question: "Which component of water footprint is dominant in cotton cultivation?",
    options: ["Green WF", "Grey WF", "Blue WF", "Black WF"],
    correct: 0
  },
  {
    id: 631,
    question: "Which index is used to measure sustainability performance in textiles?",
    options: ["Higg Index", "CPI", "PMI", "Ecological Index"],
    correct: 0
  },
  {
    id: 632,
    question: "The Clean Development Mechanism (CDM) is linked to:",
    options: ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Doha Amendment"],
    correct: 0
  },
  {
    id: 633,
    question: "Assertion (A): Paris Agreement is legally binding. Reason (R): Countries must follow strict international targets.",
    options: ["A true, R false", "A and R true", "A false, R true", "Both false"],
    correct: 0
  },
  {
    id: 634,
    question: "If a factory emits 500 tonnes CO₂ and offsets 600 tonnes via afforestation, it is:",
    options: ["Carbon negative", "Neutral", "Positive", "None"],
    correct: 0
  },
  {
    id: 635,
    question: "Grey water in footprint means:",
    options: ["Water needed to dilute pollutants", "Household wastewater", "Irrigation water", "Rainwater"],
    correct: 0
  },
  {
    id: 636,
    question: "Assertion (A): EVs have zero carbon footprint. Reason (R): They produce no tailpipe emissions.",
    options: ["A true, R false", "A false, R true", "Both true", "Both false"],
    correct: 0
  },
  {
    id: 637,
    question: "Circular economy promotes:",
    options: ["Reuse, recycling, repair", "More mining", "Single-use plastics", "Export growth"],
    correct: 0
  },
  {
    id: 638,
    question: "How many Sustainable Development Goals (SDGs) are there?",
    options: ["17", "15", "16", "18"],
    correct: 0
  },
  {
    id: 639,
    question: "Main challenge in SDG 6 for developing nations:",
    options: ["Water scarcity", "Excess rainfall", "Overpopulation", "High literacy"],
    correct: 0
  },
  {
    id: 640,
    question: "The precautionary principle means:",
    options: ["Act without full certainty to prevent harm", "Wait for proof", "Reduce costs first", "Follow only rules"],
    correct: 0
  },
  {
    id: 641,
    question: "Largest contributor to global warming is:",
    options: ["Carbon dioxide", "Ozone", "Nitrous oxide", "Hydrogen"],
    correct: 0
  },
  {
    id: 642,
    question: "Assertion (A): Poverty eradication is essential for sustainability. Reason (R): SDG 1 is No Poverty.",
    options: ["Both true, R correct explanation", "Both true, not explanation", "A true, R false", "A false, R true"],
    correct: 0
  },
  {
    id: 643,
    question: "Carbon trading may fail because:",
    options: ["Can be misused for greenwashing", "Encourages innovation", "Promotes renewable energy", "Encourages afforestation"],
    correct: 0
  },
  {
    id: 644,
    question: "Ecological footprint measures:",
    options: ["Land required to sustain consumption", "Pollution", "Water use", "Air emissions"],
    correct: 0
  },
  {
    id: 645,
    question: "Which SDG ensures 'Life on Land'?",
    options: ["15", "13", "14", "16"],
    correct: 0
  },
  {
    id: 646,
    question: "Industrial case studies of sustainability highlight:",
    options: ["Cleaner production, waste minimization", "Profit-only models", "More exports", "Energy-intensive growth"],
    correct: 0
  },
  {
    id: 647,
    question: "One carbon credit equals reduction of:",
    options: ["1 tonne CO₂", "1 kg CO₂", "100 g CO₂", "100 tonnes CO₂"],
    correct: 0
  },
  {
    id: 648,
    question: "Which gas has highest Global Warming Potential?",
    options: ["SF₆ (Sulfur hexafluoride)", "CO₂", "Methane", "N₂O"],
    correct: 0
  },
  {
    id: 649,
    question: "SDG 13 deals with:",
    options: ["Climate action", "Clean water", "Gender equality", "Life on Land"],
    correct: 0
  },
  {
    id: 650,
    question: "Green buildings contribute to sustainability by:",
    options: ["Reducing energy and water consumption", "Using more steel", "Eliminating vegetation", "Reducing costs only"],
    correct: 0
  },
  {
    id: 651,
    question: "Environmental management systems in industries aim at:",
    options: ["Pollution prevention", "Worker reduction", "Export promotion", "Profit maximization"],
    correct: 0
  },
  {
    id: 652,
    question: "Assertion (A): Recycling reduces resource depletion. Reason (R): It increases landfill waste.",
    options: ["A true, R false", "Both true", "Both false", "A false, R true"],
    correct: 0
  },
  {
    id: 653,
    question: "Which SDG relates to 'Zero Hunger'?",
    options: ["2", "3", "4", "5"],
    correct: 0
  },
  {
    id: 654,
    question: "Which is NOT a renewable energy source?",
    options: ["Natural gas", "Hydro", "Wind", "Biomass"],
    correct: 0
  },
  {
    id: 655,
    question: "The principle of 'Polluter Pays' means:",
    options: ["Polluters bear cost of cleanup", "Subsidy for polluters", "Victims bear costs", "Government funds cleanup"],
    correct: 0
  },
  {
    id: 656,
    question: "Which SDG targets gender equality?",
    options: ["5", "3", "4", "6"],
    correct: 0
  },
  {
    id: 657,
    question: "Ozone depletion is mainly caused by:",
    options: ["CFCs", "CO₂", "Methane", "Dust"],
    correct: 0
  },
  {
    id: 658,
    question: "Assertion (A): Climate change is purely natural. Reason (R): Human activity does not impact climate.",
    options: ["Both false", "A false, R true", "Both true", "A true, R false"],
    correct: 0
  },
  {
    id: 659,
    question: "Assertion (A): Transitioning to renewable energy in rural India is often slower despite abundant solar potential. Reason (R): Rural communities face high initial costs of solar panels, poor grid integration, and limited technical support, which reduce adoption rates.",
    options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
    correct: 0
  },
  {
    id: 660,
    question: "The Montreal Protocol is related to:",
    options: ["Ozone layer protection", "Carbon credits", "Climate change", "Solid waste management"],
    correct: 0
  },
  {
    id: 661,
    question: "Assertion (A): Sustainability requires balancing environmental, economic, and social dimensions. Reason (R): Focusing only on environmental protection without considering social equity or economic growth may create unsustainable trade-offs.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
    correct: 0
  },
  {
    id: 662,
    question: "Assertion (A): The UN Sustainable Development Goals (SDGs) provide a universal framework for achieving sustainability. Reason (R): The SDGs address only poverty eradication and ignore climate change, biodiversity, and responsible consumption.",
    options: ["A is true, but R is false.", "Both A and R are true, but R is not the correct explanation of A.", "Both A and R are true, and R is the correct explanation of A.", "Both A and R are False"],
    correct: 0
  },
  {
    id: 663,
    question: "Which of the following industries in India is most commonly linked to Carbon Credit generation through Clean Development Mechanism (CDM)?",
    options: ["Renewable Energy Projects", "IT Sector", "Textile Sector", "Automobile Industry"],
    correct: 0
  },
  {
    id: 664,
    question: "Assertion (A): Carbon Footprint is measured in terms of equivalent CO₂ emissions. Reason (R): Different greenhouse gases (like CH₄, N₂O) are converted into CO₂ equivalents using their Global Warming Potential (GWP).",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    correct: 0
  },
  {
    id: 665,
    question: "The Water Footprint of a product considers: i) Blue water (surface/groundwater used) ii) Green water (rainwater used) iii) Grey water (polluted water requiring treatment)",
    options: ["i, ii and iii", "i and ii only", "i and iii only", "ii and iii only"],
    correct: 0
  },
  {
    id: 666,
    question: "Assertion (A): Many industries adopt ISO 14001 certification for environmental management. Reason (R): ISO 14001 provides guidelines for energy efficiency but does not address waste and water management.",
    options: ["A is true, but R is false", "Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is false, but R is true"],
    correct: 0
  },
  {
    id: 667,
    question: "Assertion (A): SDG 13 (Climate Action) is interconnected with SDG 7 (Affordable and Clean Energy). Reason (R): Transition to renewable energy directly reduces greenhouse gas emissions, thereby mitigating climate change.",
    options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is not the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
    correct: 0
  },
  {
    id: 668,
    question: "A coastal city in India experiences frequent urban flooding due to climate change–driven sea-level rise and unplanned development. Which set of interventions aligns with both SDG 11 (Sustainable Cities) and SDG 13 (Climate Action)?",
    options: ["Promoting green infrastructure, rainwater harvesting, and mangrove restoration", "Expanding impervious roads and widening highways", "Increasing diesel pump stations for flood control", "Relocating industries without considering urban planning"],
    correct: 0
  },
  {
    id: 669,
    question: "Which of the following combinations correctly matches regional environmental issue – SDG intervention area – possible solution? i) Indo-Gangetic Plain – Air pollution – Adoption of clean cooking fuels ii) Sub-Saharan Africa – Water scarcity – Drip irrigation and desalination iii) Small Island Nations – Climate vulnerability – Climate-resilient infrastructure iv) Western Europe – Desertification – Afforestation of tropical forests",
    options: ["i, ii, and iii only", "i and ii only", "ii and iv only", "All four (i, ii, iii, iv)"],
    correct: 0
  },
  {
    id: 670,
    question: "ISO 14000 standards are developed by:",
    options: ["International Organization for Standardization (ISO)", "United Nations", "World Trade Organization", "World Bank"],
    correct: 0
  },
  {
    id: 671,
    question: "Carbon credit is earned by:",
    options: ["Reducing greenhouse gas emissions", "Using more fossil fuels", "Increasing industrial waste", "Importing resources"],
    correct: 0
  },
  {
    id: 672,
    question: "The Millennium Development Goals (MDGs) were adopted in which year?",
    options: ["2000", "1992", "2010", "2015"],
    correct: 0
  },
  {
    id: 673,
    question: "How many goals were included in the Millennium Development Goals framework?",
    options: ["8", "10", "12", "15"],
    correct: 0
  },
  {
    id: 674,
    question: "The primary objective of the MDGs was to reduce which of the following by 2015?",
    options: ["Global poverty", "Industrial pollution", "Carbon emissions", "Population growth"],
    correct: 0
  },
  {
    id: 675,
    question: "The Millennium Development Goals were succeeded by which global agenda?",
    options: ["Sustainable Development Goals (SDGs)", "Paris Climate Agreement", "Kyoto Protocol", "Green Economy Initiative"],
    correct: 0
  },
  {
    id: 676,
    question: "The main international standard for Environmental Management Systems is:",
    options: ["ISO 14001", "ISO 9001", "ISO 45001", "ISO 50001"],
    correct: 0
  },
  {
    id: 677,
    question: "The primary purpose of an Environmental Management System is to:",
    options: ["Improve environmental performance", "Increase production speed", "Reduce employee turnover", "Enhance marketing strategy"],
    correct: 0
  },
  {
    id: 678,
    question: "The 'Plan-Do-Check-Act' (PDCA) cycle is associated with:",
    options: ["Continuous improvement in EMS", "Wastewater treatment", "Hazard identification", "Energy audits"],
    correct: 0
  },
  {
    id: 679,
    question: "In an EMS, environmental policy is usually:",
    options: ["A statement of the organization's commitment to the environment", "A financial target", "A safety regulation", "A marketing plan"],
    correct: 0
  },
  {
    id: 680,
    question: "What does the term 'water footprint' primarily measure?",
    options: ["Total volume of freshwater used directly and indirectly by an individual or organization", "Amount of wastewater generated", "Water pollution index", "Energy footprint"],
    correct: 0
  },
  {
    id: 681,
    question: "Which component of water footprint refers to rainwater consumed in the production process?",
    options: ["Green water footprint", "Blue water footprint", "Grey water footprint", "Black water footprint"],
    correct: 0
  },
  {
    id: 682,
    question: "The Brundtland Commission Report (1987) is famous for:",
    options: ["Definition of sustainable development", "SDG targets", "Environmental accounting", "Carbon footprint analysis"],
    correct: 0
  },
  {
    id: 683,
    question: "Which of the following sectors generally has the largest water footprint globally?",
    options: ["Agriculture sector", "Transport sector", "Service sector", "Industrial sector"],
    correct: 0
  },
  {
    id: 684,
    question: "The 'blue water footprint' refers to the use of which type of water?",
    options: ["Surface and groundwater used for production", "Rainwater used for crops", "Wastewater used for irrigation", "Recycled water usage"],
    correct: 0
  },
  {
    id: 685,
    question: "The 'grey water footprint' represents:",
    options: ["The volume of freshwater required to assimilate pollutants", "The amount of rainwater used for crops", "The recycled water volume used in industry", "The water used for cooling systems"],
    correct: 0
  },
  {
    id: 686,
    question: "The total water footprint of a product includes:",
    options: ["Green, blue, and grey water components", "Only blue water", "Only grey water", "Only groundwater"],
    correct: 0
  },
  {
    id: 687,
    question: "Virtual water refers to:",
    options: ["The hidden flow of water used in producing goods and services", "Water stored in virtual databases", "Recycled wastewater", "Surface water stored in dams"],
    correct: 0
  },
  {
    id: 688,
    question: "Reducing water footprint in agriculture can be achieved by:",
    options: ["Drip irrigation and crop selection", "Increasing fertilizer use", "Expanding irrigation areas", "Pumping more groundwater"],
    correct: 0
  },
  {
    id: 689,
    question: "Which organization publishes the global water footprint assessment reports?",
    options: ["Water Footprint Network", "World Bank", "UNFCCC", "UNEP"],
    correct: 0
  },
  {
    id: 690,
    question: "Carbon footprint primarily measures:",
    options: ["Total greenhouse gas emissions caused directly and indirectly by an individual, organization, or product", "Only carbon dioxide in the atmosphere", "Energy consumption of a household", "Water usage in production"],
    correct: 0
  },
  {
    id: 691,
    question: "Which of the following contributes the most to an individual's carbon footprint?",
    options: ["Transportation (cars, planes)", "Wearing clothes", "Watching TV", "Using smartphones"],
    correct: 0
  },
  {
    id: 692,
    question: "Which gases are included in the carbon footprint calculation?",
    options: ["CO₂, CH₄, N₂O, and other greenhouse gases", "Oxygen and nitrogen", "Hydrogen and helium", "Only CO₂"],
    correct: 0
  },
  {
    id: 693,
    question: "The Paris Agreement was signed in:",
    options: ["2015", "2016", "1987", "1992"],
    correct: 0
  },
  {
    id: 694,
    question: "Reducing carbon footprint can be achieved by:",
    options: ["Using renewable energy and energy-efficient appliances", "Increasing meat consumption", "Burning fossil fuels", "Deforestation"],
    correct: 0
  },
  {
    id: 695,
    question: "What is a carbon credit?",
    options: ["A permit allowing a company to emit a certain amount of CO₂ or equivalent greenhouse gases", "A tax on renewable energy", "A certificate for water usage", "A permit for deforestation"],
    correct: 0
  },
  {
    id: 696,
    question: "Carbon credits are mainly traded under which mechanism?",
    options: ["Cap-and-trade system", "Free market energy exchange", "Water conservation market", "Biodiversity offset system"],
    correct: 0
  },
  {
    id: 697,
    question: "The purpose of carbon credits is to:",
    options: ["Encourage reduction of greenhouse gas emissions", "Increase industrial production", "Promote deforestation", "Reduce water usage"],
    correct: 0
  },
  {
    id: 698,
    question: "Which is not an SDG?",
    options: ["Space exploration for all", "No poverty", "Gender equality", "Life on land"],
    correct: 0
  },
  {
    id: 699,
    question: "The 'Polluter Pays Principle' was first articulated in:",
    options: ["OECD guidelines", "Rio Declaration", "Paris Agreement", "Kyoto Protocol"],
    correct: 0
  },
  {
    id: 700,
    question: "The main cause of climate change is:",
    options: ["Increase in greenhouse gas emissions due to human activity", "Rotation of Earth", "Plate tectonics", "Solar eclipses"],
    correct: 0
  },
  {
    id: 701,
    question: "Example of a successful environmental management case study in India:",
    options: ["Patancheru effluent treatment initiative", "Dust Bowl management", "Exxon Valdez oil spill", "Chernobyl recovery"],
    correct: 0
  },
  {
    id: 702,
    question: "Which SDG promotes 'Decent Work and Economic Growth'?",
    options: ["8", "9", "10", "7"],
    correct: 0
  },
  {
    id: 703,
    question: "The 2030 Agenda for Sustainable Development was adopted by:",
    options: ["United Nations", "World Bank", "IMF", "WTO"],
    correct: 0
  },
  {
    id: 704,
    question: "The water footprint measures:",
    options: ["Total freshwater consumed directly and indirectly", "Only industrial water use", "Rainwater alone", "Ocean water level"],
    correct: 0
  },
  {
    id: 705,
    question: "Which is a major goal of industrial ecology?",
    options: ["Waste from one process becomes input for another", "Maximize extraction", "Promote landfills", "Focus on energy exports"],
    correct: 0
  },
  {
    id: 706,
    question: "In environmental management, 'EMS' stands for:",
    options: ["Environmental Management System", "Environmental Mapping Survey", "Energy Management Setup", "Environmental Monitoring Station"],
    correct: 0
  },
  {
    id: 707,
    question: "A company calculating its 'Scope 3 emissions' is focusing on:",
    options: ["Indirect emissions from supply chains", "Emissions from renewable sources", "Direct emissions from its own processes", "Vehicle emissions only"],
    correct: 0
  },
  {
    id: 708,
    question: "Which SDG emphasizes partnerships to achieve the goals?",
    options: ["17", "12", "11", "13"],
    correct: 0
  },
  {
    id: 709,
    question: "The Global Reporting Initiative (GRI) is associated with:",
    options: ["Sustainability reporting standards", "Carbon credit trading", "Ozone monitoring", "Fossil fuel exploration"],
    correct: 0
  },
  {
    id: 710,
    question: "Which is an example of local-level sustainability initiative?",
    options: ["Community-based rainwater harvesting", "UNFCCC meetings", "Paris Agreement", "G7 Summit"],
    correct: 0
  },
  {
    id: 711,
    question: "Who introduced the widely accepted definition of sustainable development?",
    options: ["Brundtland Commission", "UNFCCC", "IPCC", "UNEP"],
    correct: 0
  },
  {
    id: 712,
    question: "Sustainability is based on how many main pillars?",
    options: ["Three", "Two", "Four", "Five"],
    correct: 0
  },
  {
    id: 713,
    question: "Which of the following is not a pillar of sustainability?",
    options: ["Politics", "Environment", "Economy", "Society"],
    correct: 0
  },
  {
    id: 714,
    question: "The goal of sustainability is to maintain balance among:",
    options: ["People, Planet, and Profit", "Power, Politics, and Population", "Production, Policy, and Price", "Energy, Economy, and Ecology"],
    correct: 0
  }
];

        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 60 * 60; 
        this.timer = null;
        this.startTime = null;
        this.studentName = '';

        // Initialize after DOM is ready
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Wait for DOM elements to be available
        const startBtn = document.getElementById('startQuizBtn');
        const adminBtn = document.getElementById('adminLoginBtn');
        
        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuiz();
            });
        }

        if (adminBtn) {
            adminBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showAdminModal();
            });
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
        if (submitBtn) submitBtn.addEventListener('click', () => this.submitQuiz());

        const reviewBtn = document.getElementById('reviewAnswersBtn');
        const newQuizBtn = document.getElementById('newQuizBtn');

        if (reviewBtn) reviewBtn.addEventListener('click', () => this.showReview());
        if (newQuizBtn) newQuizBtn.addEventListener('click', () => this.newQuiz());

        const backBtn = document.getElementById('backToResultsBtn');
        if (backBtn) backBtn.addEventListener('click', () => this.showResults());

        const adminLoginSubmit = document.getElementById('adminLoginSubmit');
        const adminModalClose = document.getElementById('adminModalClose');
        const logoutBtn = document.getElementById('logoutBtn');
        const exportBtn = document.getElementById('exportBtn');

        if (adminLoginSubmit) adminLoginSubmit.addEventListener('click', () => this.adminLogin());
        if (adminModalClose) adminModalClose.addEventListener('click', () => this.hideAdminModal());
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.adminLogout());
        if (exportBtn) exportBtn.addEventListener('click', () => this.exportCSV());

        // Handle name input
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.startQuiz();
                }
            });
            
            // Ensure input focus works properly
            nameInput.addEventListener('click', () => {
                nameInput.focus();
            });
        }
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    shuffleQuestionOptions(question) {
        const shuffled = { ...question };
        const optionsWithIndex = question.options.map((option, index) => ({ option, originalIndex: index }));
        const shuffledOptions = this.shuffleArray(optionsWithIndex);
        
        shuffled.options = shuffledOptions.map(item => item.option);
        shuffled.correct = shuffledOptions.findIndex(item => item.originalIndex === question.correct);
        
        return shuffled;
    }

    prepareRandomQuestions() {
        const shuffledQuestions = this.shuffleArray(this.questions);
        const selectedQuestions = shuffledQuestions.slice(0, 100);
        
        this.currentQuestions = selectedQuestions.map(q => this.shuffleQuestionOptions(q));
        
        this.currentQuestions = this.shuffleArray(this.currentQuestions);
    }

    startQuiz() {
        const nameInput = document.getElementById('studentName');
        
        if (!nameInput || !nameInput.value.trim()) {
            alert('Please enter your name before starting the quiz.');
            if (nameInput) nameInput.focus();
            return;
        }

        this.studentName = nameInput.value.trim();
        this.prepareRandomQuestions();
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 60 * 60;
        this.startTime = Date.now();

        this.showScreen('quizScreen');
        this.displayQuestion();
        this.startTimer();
    }

    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 5 * 60) { // 5 minutes warning
                const timerElement = document.getElementById('timer');
                if (timerElement) {
                    timerElement.classList.add('warning');
                }
            }

            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNumber = this.currentQuestionIndex + 1;

        // Update question counter
        const counterElement = document.getElementById('questionCounter');
        if (counterElement) {
            counterElement.textContent = `Question ${questionNumber} of 100`;
        }

        // Update question text
        const questionTextElement = document.getElementById('questionText');
        if (questionTextElement) {
            questionTextElement.textContent = question.question;
        }

        // Update options
        const optionsContainer = document.getElementById('optionsContainer');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';

            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'answer';
                radio.value = index;
                radio.id = `option${index}`;

                const label = document.createElement('label');
                label.htmlFor = `option${index}`;
                label.textContent = option;

                optionDiv.appendChild(radio);
                optionDiv.appendChild(label);

                if (this.answers[question.id] === index) {
                    radio.checked = true;
                    optionDiv.classList.add('selected');
                }

                optionDiv.addEventListener('click', () => {
                    optionsContainer.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    optionDiv.classList.add('selected');
                    radio.checked = true;
                    
                    this.answers[question.id] = index;
                });

                optionsContainer.appendChild(optionDiv);
            });
        }

        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const progress = (questionNumber / 100) * 100;
            progressBar.style.width = `${progress}%`;
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.disabled = questionNumber === 1;
        
        if (nextBtn) {
            nextBtn.style.display = questionNumber === 100 ? 'none' : 'block';
        }
        
        if (submitBtn) {
            submitBtn.style.display = questionNumber === 100 ? 'block' : 'none';
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    submitQuiz() {
        if (this.timer) {
            clearInterval(this.timer);
        }

        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - this.startTime) / 1000);

        let correct = 0;
        let wrong = 0;
        let unanswered = 0;

        this.currentQuestions.forEach(question => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const scorePercentage = Math.round((correct / 100) * 100);

        this.saveResult({
            name: this.studentName,
            score: scorePercentage,
            correct: correct,
            wrong: wrong,
            unanswered: unanswered,
            timeTaken: timeTaken,
            date: new Date().toLocaleDateString(),
            answers: { ...this.answers },
            questions: [...this.currentQuestions]
        });

        this.displayResults(scorePercentage, correct, wrong, unanswered, timeTaken);
    }

    displayResults(scorePercentage, correct, wrong, unanswered, timeTaken) {
        const elements = {
            studentNameDisplay: document.getElementById('studentNameDisplay'),
            scorePercentage: document.getElementById('scorePercentage'),
            correctCount: document.getElementById('correctCount'),
            wrongCount: document.getElementById('wrongCount'),
            unansweredCount: document.getElementById('unansweredCount'),
            timeTaken: document.getElementById('timeTaken')
        };

        if (elements.studentNameDisplay) elements.studentNameDisplay.textContent = this.studentName;
        if (elements.scorePercentage) elements.scorePercentage.textContent = `${scorePercentage}%`;
        if (elements.correctCount) elements.correctCount.textContent = correct;
        if (elements.wrongCount) elements.wrongCount.textContent = wrong;
        if (elements.unansweredCount) elements.unansweredCount.textContent = unanswered;

        if (elements.timeTaken) {
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            elements.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        this.showScreen('resultsScreen');
    }

    showReview() {
        const reviewContainer = document.getElementById('reviewQuestions');
        if (!reviewContainer) return;
        
        reviewContainer.innerHTML = '';

        let correct = 0, wrong = 0, unanswered = 0;
        
        this.currentQuestions.forEach((question) => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const summaryElements = {
            reviewCorrectCount: document.getElementById('reviewCorrectCount'),
            reviewWrongCount: document.getElementById('reviewWrongCount'),
            reviewUnansweredCount: document.getElementById('reviewUnansweredCount')
        };

        if (summaryElements.reviewCorrectCount) summaryElements.reviewCorrectCount.textContent = correct;
        if (summaryElements.reviewWrongCount) summaryElements.reviewWrongCount.textContent = wrong;
        if (summaryElements.reviewUnansweredCount) summaryElements.reviewUnansweredCount.textContent = unanswered;

        this.currentQuestions.forEach((question, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review-question';

            const userAnswer = this.answers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isAnswered = userAnswer !== undefined;

            if (isAnswered) {
                reviewDiv.classList.add(isCorrect ? 'correct' : 'wrong');
            } else {
                reviewDiv.classList.add('unanswered');
            }

            reviewDiv.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Question ${index + 1}</span>
                    <span class="review-status">
                        ${isAnswered ? (isCorrect ? '✅' : '❌') : '❓'}
                    </span>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correct) {
                            className += ' correct';
                        } else if (optIndex === userAnswer && !isCorrect) {
                            className += ' selected-wrong';
                        }
                        return `<div class="${className}">${String.fromCharCode(65 + optIndex)}. ${option}</div>`;
                    }).join('')}
                </div>
            `;

            reviewContainer.appendChild(reviewDiv);
        });

        this.showScreen('reviewScreen');
    }

    showResults() {
        this.showScreen('resultsScreen');
    }

    newQuiz() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.classList.remove('warning');
        }
        
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.value = '';
        }
        
        this.showScreen('welcomeScreen');
    }

    saveResult(result) {
        try {
            let results = JSON.parse(localStorage.getItem('ESSQuizResults') || '[]');
            results.push(result);
            localStorage.setItem('ESSQuizResults', JSON.stringify(results));
        } catch (error) {
            console.error('Error saving result:', error);
        }
    }

    showAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) modal.classList.add('active');
    }

    hideAdminModal() {
    const modal = document.getElementById('adminModal');
    const usernameInput = document.getElementById('adminUsername');
    const passwordInput = document.getElementById('adminPassword');
    if (modal) modal.classList.remove('active');
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';
    }


    adminLogin() {
        const usernameInput = document.getElementById('adminUsername');
        const passwordInput = document.getElementById('adminPassword');
        
        if (!usernameInput || !passwordInput) return;
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'sam' && password === '2525') {
            this.hideAdminModal();
            this.showAdminDashboard();
        } else {
            alert('Invalid credentials. Please try again.');
        }   

    }

    adminLogout() {
        this.showScreen('welcomeScreen');
    }

    showAdminDashboard() {
        try {
            const results = JSON.parse(localStorage.getItem('ESSQuizResults') || '[]');
            
            const elements = {
                totalStudents: document.getElementById('totalStudents'),
                averageScore: document.getElementById('averageScore'),
                completionRate: document.getElementById('completionRate'),
                studentTableBody: document.getElementById('studentTableBody')
            };

            if (elements.totalStudents) {
                elements.totalStudents.textContent = results.length;
            }
            
            if (elements.averageScore) {
                const averageScore = results.length > 0 
                    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
                    : 0;
                elements.averageScore.textContent = `${averageScore}%`;
            }
            
            if (elements.completionRate) {
                const completionRate = results.length > 0 
                    ? Math.round((results.filter(r => r.correct + r.wrong + r.unanswered === 100).length / results.length) * 100)
                    : 0;
                elements.completionRate.textContent = `${completionRate}%`;
            }

            if (elements.studentTableBody) {
                elements.studentTableBody.innerHTML = '';

                results.slice(-20).reverse().forEach(result => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${result.name}</td>
                        <td>${result.score}%</td>
                        <td>${result.correct}</td>
                        <td>${result.wrong}</td>
                        <td>${result.unanswered}</td>
                        <td>${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}</td>
                        <td>${result.date}</td>
                    `;
                    elements.studentTableBody.appendChild(row);
                });
            }

            this.showScreen('adminScreen');
        } catch (error) {
            console.error('Error loading admin dashboard:', error);
            alert('Error loading dashboard data.');
        }
    }

    exportCSV() {
        try {
            const results = JSON.parse(localStorage.getItem('ESSQuizResults') || '[]');
            
            if (results.length === 0) {
                alert('No data to export.');
                return;
            }

            const headers = ['Name', 'Score (%)', 'Correct', 'Wrong', 'Unanswered', 'Time Taken', 'Date'];
            const csvContent = [
                headers.join(','),
                ...results.map(result => [
                    `"${result.name}"`,
                    result.score,
                    result.correct,
                    result.wrong,
                    result.unanswered,
                    `"${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}"`,
                    `"${result.date}"`
                ].join(','))
            ].join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ESS_quiz_results_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error exporting CSV:', error);
            alert('Error exporting data.');
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ESSQuizApp();
});