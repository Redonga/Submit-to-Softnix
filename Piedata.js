async function loadData (x){
    
    const url = 'https://covid19.traffy.in.th/api/state-covid19';
    const response = await fetch(url,{mode : 'no-cors'});
    const data = await response.json();
    const database = data.results;
    console.log(database)
    
    for (let x=0 ; x<database.length ; x++){
        const data_AllAirline = database[x].totalAirlinePUI;
        const data_BKKAirport = database[x].totalBKKAirportPUI;
        const data_DMKAirport = database[x].totalDMKAirportPUI;
        const data_HKTAirport = database[x].totalHKTAirportPUI;
        const data_CNXAirport = database[x].totalCNXAirportPUI;
        const data_URTAirport = database[x].totalURTAirportPUI;
        const data_UBPAirport = database[x].totalUBPAirportPUI;
        const data_UTPAirport = database[x].totalUTPAirportPUI;
        const data_UTHAirport = database[x].totalUTHAirportPUI;
        // console.log(`${data_AllAirline}  ${data_BKKAirport}  ${data_DMKAirport} ${data_HKTAirport} ${data_CNXAirport} ${data_URTAirport} ${data_UBPAirport} ${data_UTPAirport} ${data_UTHAirport} `)
    }
    
}

loadData();

