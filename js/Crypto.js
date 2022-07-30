window.addEventListener("load", function(){
    let conn = new WebSocket("wss://markets-ws.api.bitcoin.com/v1/live-price");

    conn.addEventListener("open", function(){
        console.log("Connected!");
    });

    conn.addEventListener("message", function (e){
        console.log(e);
    });

    conn.addEventListener("close", function(){
        console.log("Disconnected!");
    });

    conn.addEventListener("error", function(){
        console.log("Unable to establish connection something went wrong!");
    });
})