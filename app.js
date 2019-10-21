window.addEventListener('load',()=> {
    let long=24.7037952;
    let lat=59.407548;
   // let long;
    //let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long =positin.coords.longtude;
            lat=position.coords.latitude;
            console.log("Long: ", long)
            console.lat("lat: ", lat)
            
        })
    }
    const proxy="https://cors-anywhere.herokuapp.com/";
    const api=`${proxy}https://api.darksky.net/forecast/dba336fcefa49c4ea571475c7fbf006d/${lat},${long}`;
    
    fetch(api)
    .then(response => {
        console.log(response.json());
    });




})