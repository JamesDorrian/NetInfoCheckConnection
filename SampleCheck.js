componentWillMount(){
  this.refresh((result) => {this.state.splash = result})
}

//LOGIC: Send a http request and use the response to determine the connectivity state
refresh(callback){ 
    httpAddress = 'https://www.galwaydaily.com' //the site i'm building the app for
    var xhr = new XMLHttpRequest();
    xhr.open('GET', httpAddress);
    xhr.onreadystatechange = (e) => {
      if (xhr.readyState !== 4) { //code for completed request
        return;
      }
      console.log("--- STATUS ---");
      console.log(xhr.status);
      if (xhr.status === 200) { //successful response
        callback(true);
        console.log('result goes here: ' + true)
      } else {                  //unsuccessful response
        /* NOTE: React native often reacts strangely to offline uses and as such,
        it may be necessary to directly set state here rather than to rely on a callback */
        callback(false)  //OR: this.state.splash = false
        
        console.log('result goes here: ' + false)
      }
    };
    xhr.send();
}
