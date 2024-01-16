// Input date string

export const dateConvert = ( dateString ) =>{
    
    // Create a Date object
    const dateObject = new Date(dateString);
    
    // Map month numbers to month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    // Extract individual components of the date
    const day = dateObject.getDate();
    const month = monthNames[dateObject.getMonth()];
    const year = dateObject.getFullYear();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    
    // Format the date in a more readable form
     const formattedDate = `${day < 10 ? '0' + day : day},${month},${year} ${hours}:${minutes}`;

     return formattedDate
}
    
    
    