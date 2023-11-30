---
title: Why Guerrilla
description: Guerrilla is a powerful SDK that provides developers with primitives to interact with devices, and create, organize, and manage testing in pure pyhton and readable manner.
---

# The Motivation

Why should you choose Guerrilla?

## Backstory

TBD


## When to use Guerrilla?

### Automation

If you're building a automation with a framework that supports Python, Guerrilla is a great choice for you.

In scenarios where repetitive tasks or complex workflows are required, automation through coding is significantly more efficient than manually executing each step. This approach can considerably save time and reduce human errors.

```py
# Daily backup config for devices.

configs = [...]
today = date.today().strftime("%Y%m%d")

for config in configs:
  device = Device(**config)
  device.connct()
  device.export_config('tftp', '192.168.127.3', f'{today}_bak.ini')

```

### Testing

```py
device.config.hostname.set_hostname('New Name')

ret = device.show_system()

if 'New Name' not in ret.output:
  print('Set hostname failed.')

```

