self.addEventListener('message', function(event) {
    // assume the message is the JSON format type and has a port
    incomingCommand = event.data.command
    incomingMessage = event.data.message
    loopBackPort    = event.ports[0]
          //service workers close and reopen so there is no convenient way
          //to permenantly save and reuse the port. 
    
    // if something is undefined assume it is a simple string message
    if(undefined==incomingCommand|undefined==incomingMessage){
        incomingMessage = event.data
        console.log("SW message - ",incomingMessage);
        return
    }
        
    // JSON with command and message
    if (incomingCommand == "simple") {
        console.log("SW message - simple : ",incomingMessage);
        return
    }
    
    // JSON with command and message, and use the port to post back on    
    if (incomingCommand == "loopback") {
        console.log("SW message - loopback: ", incomingMessage);
        loopBackPort.postMessage({
            "message": "SW copy \' "+incomingMessage+" \' "
        });
        return
    }    
    console.log("SW message - unhandled type: "+incomingCommand)
})




























