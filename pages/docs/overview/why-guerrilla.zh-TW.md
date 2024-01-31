---
title: Why Guerrilla
description: Guerrilla is a powerful SDK that provides developers with primitives to interact with devices, and create, organize, and manage testing in pure pyhton and readable manner.
---

# 動機

為什麼你應該選擇 Guerrilla?

## 背景故事

Guerrilla 最初被認為是來自三個不同團隊的專業人士的合作項目，後來成為一種創新解決方案，旨在開闢軟體開發的新路徑。 其核心目的是開發一個強大的 SDK、一個動態測試框架和一個多功能測試環境，所有這些都旨在增強自動化測試計劃。 這項策略性措施旨在加強軟體開發生命週期（SDLC）並大幅減輕手動測試團隊的負擔。

「Guerrilla」這個名字的選擇反映了團隊的獨特組成和精神。 成員們不僅僅致力於這個專案； 相反，他們以兼職的方式做出貢獻，為專案注入了非凡的靈活性和敏捷性。 這種設定使他們能夠在任務之間流暢地切換，並採用擺脫傳統公司規範的開發方法。

隨著時間的推移，儘管團隊組成不斷變化，Guerrilla 仍在不斷成熟和發展。 未來希望將 Guerrilla 轉變為內部自動化巨頭，並有可能跨入開源領域。 這項轉變旨在增強 Moxa 客戶的能力，為他們提供尖端的自動化解決方案，徹底改變他們的部署流程。

## 何時使用 Guerrilla?

### 自動化

如果您正在使用支援 Python 的框架建立自動化，Guerrilla 是您的絕佳選擇。

在需要重複性任務或複雜工作流程的場景中，透過編碼實現自動化比手動執行每個步驟要高效得多。 這種方法可以大大節省時間並減少人為錯誤。

```py
# Daily backup config for devices.

configs = [...]
today = date.today().strftime("%Y%m%d")

for config in configs:
  device = Device(**config)
  device.connct()
  device.export_config('tftp', '192.168.127.3', f'{today}_bak.ini')

```

### 測試

```py
device.config.hostname.set_hostname('New Name')

ret = device.show_system()

if 'New Name' not in ret.output:
  print('Set hostname failed.')

```

