/*
 *  Using messagePorts to transfer messages to and from 
 *  Service worker
 *
 *  From Page to Service Worker
 *
 *    Use worker.postMessage(message)
 *
 *  If you want a return message add a MessageChannel port
 *  because you can't postMessage to the window from the
 *  service worker.
 *  
 *  But it's likely that messaging clients during
 *  service worker events is more useful. Hence I have
 *  simplified all this and I am saving it for reference
 *  
 */

// ************** message and event handlers *****************
function sendMessage(sw,message){
  var messageChannel = new MessageChannel();
  var appPort=messageChannel.port1
  var swPort=messageChannel.port2

  appPort.addEventListener('message', function(event) {
    console.log("APP function response - ", event.data.message);
    appPort.close()
  })
  appPort.start()         // need to use start with addEventListener
                          // but not needed with appPort.onmessage=... 
  
  sw.postMessage(message,[swPort])   //transfer needs to be an array hence []
}


// ************** Code ***************************
// Registering Service Worker
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(swr){
		console.log("sw registered: ",swr.active)
    
    //send message
    try{
        sw = navigator.serviceWorker.controller  //not always reliable
        note1 = "reload page again"              // prefer .ready promise
                              

        sw.postMessage("Hello World")    // post a simple message

        sendMessage(sw,{                 // use the function above
          "command": "simple",           // Use a JSON message format
          "message": "Hi SW, from Page"  // with command and message
        })
        
        sendMessage(sw,{                 // use the function above
          "command": "loopback",
          "message": "reflect this message"
        })
    } catch (err){console.log(err+" : "+note1)}

	})
}
