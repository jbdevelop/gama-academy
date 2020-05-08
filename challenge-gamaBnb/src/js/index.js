const fetchJSON = async (url) => await (await fetch(url)).json()

function appendStays(json) {
  const stays = document.querySelector("#stays")  
  let container = ""      
  let article = ""

  let aux = 1;
  for (let i=0; i<json.length; i++) {      
  
    const capitalizeWords = json[i].name
                    .toLowerCase()
                    .split(' ')
                    .map(word => `${word[0].toUpperCase()}${word.slice(1)}`) 
                    .join(' ') 

    const name = (capitalizeWords.length > 30 ? capitalizeWords.substring(0, 27) + "..." : capitalizeWords)
    
    if(aux % 3 === 0) {      
      article += 
      `
      <article class="card">      
        <div class="card__body">
          <img src=${json[i].photo} alt="">
        </div>
        <div class="card__bottom">
          <div class="card__bottom-type">${json[i].property_type}</div>
          <div class="card__bottom-description">${name}</div>
          <div class="card__bottom-price">
            <strong class="card__coin">R$</strong>
            <strong class="card__pricePerDay">${json[i].price}</strong>
            <strong class="card__priceTotal"></strong>
          </div>
        </div>    
      </article>   
      `
      container = document.createElement("div")
      container.className = "container"

      container.innerHTML = article      
      article = ""
      //stays.innerHTML += container       
      stays.appendChild(container)      
    } else {
      article += 
      `
      <article class="card">      
        <div class="card__body">
          <img src=${json[i].photo} alt="">
        </div>
        <div class="card__bottom">
          <div class="card__bottom-type">${json[i].property_type}</div>
          <div class="card__bottom-description">${name}</div>
          <div class="card__bottom-price">
            <strong class="card__coin">R$</strong>
            <strong class="card__pricePerDay">${json[i].price}</strong>
            <strong class="card__priceTotal"></strong>
          </div>
        </div>    
      </article>   
      `
    }
    aux++
  } 
  
}

function getDate(date = new Date()) {    
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()      
  let increaseMonth = Number(date.getMonth() + 1)
  let month = increaseMonth < 10 ? `0${increaseMonth}` : increaseMonth  
  const year = date.getFullYear()

  return `${year}-${month}-${day}`
}

function getDaysInTravel() {
  const checkIn = new Date(document.querySelector("#checkIn").value)
  const checkOut = new Date(document.querySelector("#checkOut").value)

  var timeDiff = Math.abs(checkIn.getTime() - checkOut.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));   

  const pricePerDay = document.getElementsByClassName("card__pricePerDay")
  const priceTotal = document.getElementsByClassName("card__priceTotal")
  
  for (let p in pricePerDay) {    
    priceTotal[p].innerHTML = ` | ${diffDays} noite(s) - R$ ${pricePerDay[p].innerHTML * diffDays}`             
  }
}

function setInputDateConfig(id, date) {  
  const inputDate = document.querySelector(id)
  inputDate.value = date  
  inputDate.min = date
}

async function main() {  
  setInputDateConfig("#checkIn", getDate())  

  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 1);  
  setInputDateConfig("#checkOut", getDate(dayAfter))   
  
  const url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72"  
  const json = await fetchJSON(url)
  
  appendStays(json)      
}