 export function GetAbbreviation(description) {
    const mapping = {
      "Pont Alexandre III": "ALX",
      "Aquatics Centre": "AQC",
      "Bercy Arena": "BCY",
      "Bordeaux Stadium": "BOR",
      "Champ-de-Mars Arena": "CDM",
      "Trocadéro-Champions Park": "CHP",
      "La Chapelle Arena": "CPL",
      "Clichy-sous-bois": "CSB",
      "Chateauroux Shooting Ctr": "CTX",
      "Paris La Defense Arena": "DEF",
      "Eiffel Champ-de-Mars": "ECM",
      "Eiffel Tower Stadium": "EIF",
      "Elancourt Hill": "ELA",
      "Grand Palais": "GRP",
      "Grand Palais Pt AlxIII": "GRX",
      "Hôtel de Ville": "HDV",
      "Invalides": "INV",
      "Le Bourget Climbing Venue": "LBO",
      "La Concorde 1": "LC1",
      "La Concorde 2": "LC2",
      "La Concorde 3": "LC3",
      "La Concorde 4": "LC4",
      "La Concorde": "LCO",
      "La Courneuve": "LCS",
      "Le Golf National": "LGN",
      "Pierre Mauroy Stadium": "LIL",
      "Lyon Stadium": "LYO",
      "Marseille Marina": "MAM",
      "Marseille Stadium": "MRS",
      "La Beaujoire Stadium": "NAN",
      "Nice Stadium": "NIC",
      "North Paris Arena": "NPA",
      "Parc des Princes": "PDP",
      "Roland-Garros Stadium": "RGA",
      "South Paris Arena 1": "SP1",
      "South Paris Arena 4": "SP4",
      "South Paris Arena 6": "SP6",
      "South Paris Arena": "SPA",
      "Stade de France": "STA",
      "Geoffroy-Guichard Stadium": "STE",
      "Teahupo'o, Tahiti": "TAH",
      "Trocadéro": "TRO",
      "National Velodrome": "VE1",
      "BMX Stadium": "VE2",
      "Saint-Quentin Velopark": "VEL",
      "Château de Versailles": "VER",
      "Nautical St - Flat water": "VN1",
      "Nautical St - White water": "VN2",
      "Nautical Stadium": "VNS",
      "Yves-du-Manoir Stadium": "YDM",
    };
  
    return mapping[description] || 'N/A';
  }
  
  export function concatenateDisciplineVenue(discipline,venue){
    return `${discipline}-${venue}`;
  }


  // it has to be the same day , and a if statement if its the day after 
  //otherwise it should show ?

  export function calculateTimeDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    //conditional if the day is over ! dont forget
    const timeDifference = end - start; // Diff in milliseconds
  
    const minutesDifference = (timeDifference / (1000 * 60)); //  milliseconds to minutes
    // const hoursDifference = (minutesDifference / 60); // minutes to hours
    // hours present commas :'
    // if(hoursDifference % 2 == 0  || hoursDifference == 1){
    //     return hoursDifference;
    // }
        return minutesDifference;
  }


  // to try 
  // const startDate = "2024-07-27T15:00:00+02:00";
  // const endDate = "2024-07-27T16:00:00+02:00";

  export function extractTimeFromDate(dateString){
    const date =new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  }


export function getStatusColor(status){
  switch (status) {
    case 'GETTING_READY':
    case 'RUNNING':
    case 'SCHEDULED_BREAK':
      return 'lime';
    case 'FINISHED':
      return 'red';
    default:
      return 'blue'; // Couleur par défaut, à ajuster selon vos besoins
  }

}

