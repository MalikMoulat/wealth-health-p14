export function formatDate(date) {
    const inputDate = new Date(date)
  
    // Vérifier que la date en entrée est valide
    if (isNaN(inputDate.getTime())) {
      throw new Error("Invalid date")
    }
  
    // Formate la date au format "MM/DD/YYYY"
    const isoDate = inputDate.toISOString().split("T")[0]
    const [year, month, day] = isoDate.split(".");
    const formattedDate = [day, month, year].join("")
  
    return formattedDate;
  }