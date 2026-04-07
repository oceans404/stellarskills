# Input

## Shared States

### focus

- field:
  - background: Default/Background/Primary
  - border: Default/State/Focus
  - box-shadow:
    - x: 0
    - y: 0
    - blur: 0
    - spread: 4
    - color: Default/State/Focus
    - opacity: 12%

### error

- field:
  - background: Default/Background/Primary
  - border: Error/Border/Primary

- helper:
  - color: Error/Text/Primary

## Shared Slots

### right-button (optional)

- button: tertiary / SM (see button.md)
- position: inside field, right-aligned
- field padding-right: 0 (button fills the space)
- applies to: SM, MD, LG

### right-icon (optional)

- icon-size: Sizing/XS (12x18)
- icon-color: Default/Foreground/Primary
- position: inside field, right-aligned
- padding: space-4 space-10
- gap: space-4
- border-radius: 0 radius-4 radius-4 0
- purpose: decorative / indicator only (e.g. chevron-down for dropdown)
- not interactive
- applies to: SM, MD, LG

## Variants

### SM

#### Structure
- label
  - text
  - info-icon (optional)
- field
  - placeholder / value
  - right-button (optional, see shared slots)
  - right-icon (optional, see shared slots)
- helper-text

---

#### Layout

- container:
  - display: flex
  - flex-direction: column
  - gap: space-6

- label:
  - display: flex
  - align-items: center
  - gap: space-4

- field:
  - padding-y: space-4
  - padding-x: space-10
  - radius: radius-6
  - border-width: 1px

- helper:
  - margin-top: space-6

---

#### Typography

- label:
  - Text/XS/500
  - color: Default/Text/Secondary

- placeholder:
  - Text/XS/400
  - color: Default/Text/Secondary

- helper:
  - Text/XS/400
  - color: Default/Text/Secondary

---

#### States

##### placeholder (default)

- field:
  - background: Default/Background/Primary
  - border: Default/Border/Primary

##### disabled

- field:
  - background: Default/Background/Disabled
  - border: Default/Border/Primary

- placeholder:
  - color: Default/Text/Secondary

- helper:
  - color: Default/Text/Secondary

##### focus
- use shared focus state

##### error
- use shared error state

### MD

#### Structure
- label
  - text
  - info-icon (optional)
- field
  - placeholder / value
  - right-button (optional, see shared slots)
  - right-icon (optional, see shared slots)
- helper-text

---

#### Layout

- container:
  - display: flex
  - flex-direction: column
  - gap: space-8
  - width: 312px

- label:
  - display: flex
  - align-items: center
  - gap: space-4

- field:
  - padding-y: space-6
  - padding-x: space-12
  - radius: radius-6
  - border-width: 1px

- helper:
  - margin-top: space-6

---

#### Typography

- label:
  - Text/SM/500
  - color: Default/Text/Secondary

- placeholder:
  - Text/SM/400
  - color: Default/Text/Secondary

- helper:
  - Text/SM/400
  - color: Default/Text/Secondary

---

#### States

##### placeholder (default)

- field:
  - background: Default/Background/Primary
  - border: Default/Border/Primary

##### focus
- use shared focus state

##### error
- use shared error state

### LG

#### Structure
- label
  - text
  - info-icon (optional)
- field
  - placeholder / value
  - right-button (optional, see shared slots)
  - right-icon (optional, see shared slots)
- helper-text

---

#### Layout

- container:
  - display: flex
  - flex-direction: column
  - gap: space-8
  - width: 312px

- label:
  - display: flex
  - align-items: center
  - gap: space-4

- field:
  - padding-y: space-8
  - padding-x: space-16
  - radius: radius-6
  - border-width: 1px

- helper:
  - margin-top: space-6

---

#### Typography

- label:
  - Text/SM/500
  - color: Default/Text/Secondary

- placeholder:
  - Text/MD/400
  - color: Default/Text/Secondary

- helper:
  - Text/SM/400
  - color: Default/Text/Secondary
---

#### States

##### placeholder (default)

- field:
  - background: Default/Background/Primary
  - border: Default/Border/Primary

##### focus
- use shared focus state

##### error
- use shared error state

## Notes

- Focus and error states are shared across SM, MD, and LG.
- Right-button slot is shared across SM, MD, and LG. Uses tertiary SM button as defined in button.md.
- Right-icon is decorative/indicator only. Not interactive. Common use case: chevron-down for dropdown trigger.
- Disabled state is currently confirmed in SM. Confirm MD and LG separately if needed.
- Filled and destructive variants should be added after they are confirmed in Figma. 