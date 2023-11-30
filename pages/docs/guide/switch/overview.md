---
title: Connect to Switch
---

# Connecto to Switch

```py
from guerrilla.device import Device
config = {
    "name": "EDR-G9010",
    "type": "switch",
    "protocol": "ssh",
    "host": "192.168.127.253",
    "username": "admin",
    "password": "moxa",
}
device = Device(config)
device.connect()
```

