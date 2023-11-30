---
title: Connect to Linux Server
---

# Connecto to Linux Server

```py
from guerrilla.device import Device
config = {
    "name": "EDR-G9010",
    "type": "linux",
    "protocol": "ssh",
    "host": "localhost",
    "username": "root",
    "password": "rootpassword",
}
device = Device(config)
device.connect()
```

