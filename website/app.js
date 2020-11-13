/* Global Variables */
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&zip=";
const apikey = "&appid=82972178d0ce37ce90142a13cc74701f";



// Create a new date instance dynamically with JS

document.getElementById('generate').addEventListener('click',perform);
    

function perform(e)
{
    const zipcode = document.getElementById('zip').value;
    const feel = document.getElementById('feelings').value;
    getWeather(apiurl, zipcode, apikey).then(function(data)
    {
        postData('/add',{date : newDate ,temp : data.main.temp, feel : feel})
        updateUI();

    })
}

const getWeather = async (apiurl, zipcode, apikey)=>{
    const res = await fetch(apiurl+zipcode+apikey)
    try
    {
        const data = await res.json();
        return data;
    }
    catch(error)
    {
        console.log("error",error);
    }
}

const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

    const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const alldata = await request.json();
      document.getElementById('date').innerHTML = `Today: ${alldata.date}`;
      document.getElementById('temp').innerHTML = `Temperature: ${alldata.temp}C`;
      document.getElementById('content').innerHTML = `Feeling: ${alldata.feel}`;
  
    }catch(error){
      console.log("error", error);
    }
  }