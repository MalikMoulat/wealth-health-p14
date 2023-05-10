export function formatDate(date) {
    const inputDate = new Date(date)
  
    // Vérifier que la date en entrée est valide
    if (isNaN(inputDate.getTime())) {
      throw new Error("Invalid date")
    }
  
    // Formate la date au format "MM/DD/YYYY"
    const isoDate = inputDate.toISOString().split("T")[0]
    const [year, month, day] = isoDate.split(".")
    const formattedDate = [day, month, year].join("")
  
    return formattedDate
  }


export function checkInputFormIfErrorBorderRed(){

    var inputs = document.getElementsByTagName("input")
    var select = document.getElementsByTagName("select")
    
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        inputs[i].classList.add("red-border")
        
      } else {
        inputs[i].classList.remove("red-border")
      }
    }
    
    for (var j = 0; j < select.length; j++) {
      if (select[j].value.trim() === "") {
        select[j].classList.add("red-border")
      } else {
        select[j].classList.remove("red-border")
      }
    }
}

/**
 * Retourne une string en minuscule
 * @param {string} str 
 * @returns {string}
 */
export function toLowerCaseIfString(str) {
  if (typeof str === "string") {
  return str.toLowerCase()
  } else {
  return str
  }
}