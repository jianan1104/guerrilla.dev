---
title: Why Guerrilla
description: Guerrilla is a powerful SDK that provides developers with primitives to interact with devices, and create, organize, and manage testing in pure pyhton and readable manner.
---

# The Motivation

Why should you choose Guerrilla?

## Backstory

Originally conceived as a collaborative venture by professionals from three distinct teams, Guerrilla emerged as an innovative solution, designed to forge new paths in software development. Its core purpose was to develop a robust SDK, a dynamic testing framework, and a versatile testing environment, all geared towards enhancing automated test initiatives. This strategic move was aimed at bolstering the Software Development Life Cycle (SDLC) and significantly reducing the burden on manual testing teams.

The choice of the name 'Guerrilla' reflects the unique composition and ethos of the team. Members were not solely dedicated to this project; instead, they contributed on a part-time basis, infusing the project with remarkable flexibility and agility. This setup enabled them to fluidly switch between tasks and adopt development methodologies that broke free from conventional corporate norms.

As time progressed, despite the ebb and flow of its team composition, Guerrilla has continued to mature and evolve. Looking ahead, there is a strong aspiration to transform Guerrilla into an in-house automation powerhouse for Moxa, potentially taking a leap into the realm of open-source. This shift aims to empower Moxa’s clientele, offering them a cutting-edge automation solution that can revolutionize their deployment processes.


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

