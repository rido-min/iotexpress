const express = require('express')
const hub = require('azure-iothub')
const connectionString = 'HostName=StrangerThings.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=XFgZcgv+lJSGfqO2RhMTn6ljpy7s4Zm0qf94GSYrRR8='

const router = express.Router();

router.get('/deviceCount', function(req, res) {
    const registry = hub.Registry.fromConnectionString(connectionString)
    registry.getRegistryStatistics(function (err, stats) {
        if (err) console.error(err.message)
        res.json(stats.totalDeviceCount)
    })
})
module.exports = router;