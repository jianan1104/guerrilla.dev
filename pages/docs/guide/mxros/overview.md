---
title: Connect to Router
---

# Connecto to Router

```py
from guerrilla.device import Device
config = {
    "name": "EDR-G9010",
    "type": "mxros",
    "protocol": "ssh",
    "host": "192.168.127.254",
    "username": "admin",
    "password": "moxa",
}
device = Device(config)
device.connect()
```

