var counter = 0;
var connections = [];
onconnect = function(e) {
   var port = e.ports[0];
   port.onmessage = function(j) {
       counter++;
       for (var i=0; i < connections.length; i++) {
           connections[i].postMessage({
               speaker: j.data.guid,
               message: j.data.message,
               counter: counter
           });
       }
   }
   port.start();
   connections.push(port);
}
