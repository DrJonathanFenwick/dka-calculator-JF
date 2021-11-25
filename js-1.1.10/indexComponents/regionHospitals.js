//each variable contains an array of the hospitals in that region - used by checkregion function in js/index.js

var northernIreland = [
    "Altnagelvin Area Hospital, Londonderry",
    "Antrim Area Hospital, Antrim",
    "Causeway Hospital, Coleraine",
    "Craigavon Area Hospital, Craigavon",
    "Daisy Hill Hospital, Newry",
    "Royal Belfast Hospital for Sick Children, Belfast",
    "South West Acute Hospital, Enniskillen",
    "Ulster Hospital, Dundonald"
];

var scotland = [
    //awaiting list
    "Awaiting list of Scottish Hospitals..."
];

var wales = [
    "Bronglais General Hospital",
    "Glan Clwyd Hospital",
    "Glangwili General Hospital",
    "Grange University Hospital",
    "Morriston Hospital",
    "Neath Port Talbot Hospital",
    "Prince Charles Hospital",
    "Princess of Wales Hospital",
    "Royal Glamorgan Hospital",
    "University Hospital of Wales",
    "Withybush General Hospital",
    "Wrexham Maelor Hospital",
    "Ysbyty Gwynedd"
];

var eastMidlands = [
    "Boston Pilgrim Hospital",
    "Chesterfield Royal",
    "Derby Hospitals",
    "Grantham and District Hospital",
    "Kettering General Hospital",
    "Leicester Royal Infirmary",
    "Lincoln County Hospital",
    "Northampton General Hospital",
    "Nottingham University Hospitals",
    "Sherwood Forest Hospitals"
];

var eastOfEngland = [
    "Addenbrookes Hospital", 
    "Basildon and Thurrock University Hospital", 
    "Bedford Hospital", 
    "Broomfield Hospital",
    "Colchester Hospital", 
    "East & North Herts", 
    "Hinchingbrooke Health Care", 
    "Ipswich Hospital", 
    "James Paget University Hospital", 
    "Luton & Dunstable University Hospital", 
    "Norfolk & Norwich University Hospital", 
    "Peterborough City Hospital", 
    "Princess Alexandra Hospital", 
    "Queen Elizabeth Hospital Kings Lynn", 
    "Queen Elizabeth II Hospital", 
    "Southend University Hospital", 
    "Watford General Hospital",
    "West Suffolk Hospital"
];

var northEastAndNorthCumbria = [
    "Bishop Aukland Hospital",
    "Darlington Memorial Hospital",
    "Friarage Hospital",
    "Great North Children's Hospital",
    "North Tyneside General Hospital",
    "Queen Elizabeth Hospital",
    "South Tyneside District Hospital",
    "Sunderland Royal Hospital",
    "The Cumberland Infirmary",
    "The James Cook University Hospital",
    "University Hospital of Hartlepool",
    "University Hospital of North Durham",
    "University Hospital of North Tees",
    "West Cumberland Hospital"
];

var northWest = [
    "Alder Hey Children’s",
    "Blackpool Teaching Hospitals",
    "Bolton",
    "Central Manchester University Hospitals",
    "Countess of Chester Hospital",
    "East Cheshire",
    "East Lancashire Hospitals",
    "Lancashire Teaching Hospitals",
    "Mid Cheshire Hospitals",
    "Salford Royal",
    "Southport and Ormskirk Hospital",
    "St Helens and Knowsley Teaching Hospitals",
    "Stockport",
    "Tameside & Glossop Integrated Care",
    "The Pennine Acute Hospitals",
    "University Hospital of South Manchester",
    "University Hospitals of Morecambe Bay",
    "Warrington and Halton Hospitals",
    "Wirral University Teaching Hospital",
    "Wrightington Wigan and Leigh"
];

var	southEastCoastAndLondonPartnership = [
    "Barnet General Hospital",
    "Buckland Hospital",
    "Central Middlesex",
    "Chelsea and Westminster",
    "Conquest Hospital",
    "Croydon University Hospital",
    "Darent Valley Hospital",
    "Ealing Hospital",
    "East Surrey Hospital",
    "Eastbourne District General Hospital",
    "Epsom Hospital",
    "Evelina London Children’s Hospital",
    "Frimley Park Hospital",
    "Great Ormond Street Hospital for Children",
    "Hillingdon Hospitals",
    "Kent and Canterbury Hospital",
    "King George Hospital",
    "King's College Hospital",
    "Kingston Hospital",
    "Lewisham Hospital",
    "Maidstone Hospital",
    "Medway Maritime Hospital",
    "Newham University Hospital",
    "North Middlesex University Hospital",
    "Northwick Park",
    "Princess Royal University Hospital",
    "Queen Elizabeth Hospital",
    "Queen Elizabeth The Queen Mother Hospital",
    "Queen Mary's Hospital",
    "Queen's Hospital",
    "Royal Alexandra Children's Hospital",
    "Royal Free London",
    "Royal Surrey County Hospital",
    "Royal Victoria Hospital",
    "St George’s Hospital",
    "St Helier Hospital",
    "St. Mary’s Hospital",
    "St. Peter's Hospital",
    "St. Richards Hospital",
    "The Royal London Hospital",
    "The Whittington Hospital",
    "Tunbridge Wells Hospital",
    "University College Hospital",
    "West Middlesex University Hospital",
    "Whipps Cross University Hospital",
    "William Harvey Hospital",
    "Worthing Hospital"
];

var southWest = [
    "Gloucestershire Hospitals",
    "Great Western Hospitals",
    "Northern Devon Hospital",
    "Plymouth Hospitals",
    "Royal Cornwall Hospitals",
    "Royal Devon and Exeter Hospitals",
    "Royal United Hospitals Bath",
    "South Devon Healthcare",
    "Taunton and Somerset",
    "University Hospitals Bristol",
    "Yeovil District Hospital"  
];

var thamesValley = [
    "Frimley Health",
    "John Radcliffe Hospital",
    "Milton Keynes Hospital",
    "Royal Berkshire",
    "Stoke Mandeville Hospital",
    "Wycombe Hospital"
];

var wessex = [
    "Basingstoke and North Hampshire Hospital",
    "Dorset County Hospital",
    "Poole Hospital",
    "Queen Alexandra Hospital",
    "Royal Hampshire County Hospital",
    "Salisbury District Hospital",
    "Southampton General Hospital",
    "St. Mary's Hospital"
];

var westMidlands = [
    "Alexandra Hospital",
    "Birmingham Children’s Hospital",
    "Birmingham City Hospital",
    "Burton Hospitals",
    "County Hospital (Stafford)",
    "County Hospital (Wye Valley)",
    "George Eliot Hospital",
    "Good Hope Hospital",
    "Heartlands Hospital",
    "Hospital of St Cross",
    "Kidderminster Hospital",
    "New Cross Hospital",
    "Princess Royal Hospital",
    "Royal Shrewsbury Hospital",
    "Royal Stoke University Hospital",
    "Russells Hall Hospital",
    "Sandwell General Hospital",
    "Solihull Hospital",
    "South Warwickshire",
    "University Hospital Coventry",
    "Walsall Manor Hospital",
    "Worcestershire Royal Hospital"
];

var yorkshireAndHumber = [
    "Airedale General Hospital",
    "Barnsley Hospital",
    "Bassetlaw Hospital",
    "Bradford Royal Infirmary",
    "Calderdale Royal Hospital",
    "Dewsbury and District Hospital",
    "Diana, Princess of Wales Hospital",
    "Doncaster Royal Infirmary",
    "Harrogate District Hospital",
    "Huddersfield Royal Infirmary",
    "Hull Royal Infirmary",
    "Leeds Children's Hospital",
    "Pinderfields General Hospital",
    "Pontefract General Infirmary",
    "Rotherham Hospital",
    "Scarborough Hospital",
    "Scunthorpe General Hospital",
    "Sheffield Children's Hospital",
    "St.Luke's Hospital",
    "The York Hospital"
];

var testing = [
    "[Testing purposes only]"
];