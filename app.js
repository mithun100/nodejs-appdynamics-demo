//Please ensure to change the XXXX values with proper values.This snippet has the information to connect with AppDynamics controller
require("appdynamics").profile({
    controllerHostName: 'xxxx.saas.appdynamics.com',
    controllerPort: 443, 
    controllerSslEnabled: true,  // Set to true if controllerPort is SSL
    accountName: 'xxxx',
    accountAccessKey: 'xxxx', //required
    applicationName: 'Mithun_Hello_World_Express',
    tierName: 'Tier1', 
    nodeName: 'Node1',
    logging: {
        logfiles: [
             {'filename': 'nodejs_agent_%N.log', 'level': 'TRACE'},
             {'filename': 'nodejs_agent_%N.protolog', 'level': 'TRACE', 'channel': 'protobuf'}
         ]
     } 
   });
   
 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
