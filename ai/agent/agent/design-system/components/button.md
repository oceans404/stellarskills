## Button

### Sizes

SM:
- text: Text/XS/600
- height: 26px
- padding-y: space-4
- padding-x: space-8
- radius: radius-4

MD:
- text: Text/SM/600
- height: 32px
- padding-y: space-6
- padding-x: space-10
- radius: radius-6

LG:
- text: Text/SM/600
- height: 36px
- padding-y: space-8
- padding-x: space-12
- radius: radius-8

XL:
- text: Text/MD/600
- height: 48px
- padding-y: space-12
- padding-x: space-16
- radius: radius-8

### Slots

#### icon-left (optional)

- position: before text label
- gap: space-4
- icon-color: inherits text-color from variant
- stroke-width: 1.5px
- size by button size:
  - SM: 12x12px
  - MD: 14x14px
  - LG: 14x14px
  - XL: 16x16px

#### icon-right (optional)

- position: after text label
- gap: space-4
- icon-color: inherits text-color from variant
- stroke-width: 1.5px
- size by button size:
  - SM: 12x12px
  - MD: 14x14px
  - LG: 14x14px
  - XL: 16x16px

### Variants

primary:
  default:
    - background: Brand/Foreground/Primary
    - text-color: Color/Base/0
    - border: none
  hover:
    - background: Brand/Foreground/Secondary
    - text-color: Color/Base/0
    - border: none
  focused:
    - background: Brand/Foreground/Primary
    - text-color: Color/Base/0
    - border: none
    - shadow:
      - x: 0
      - y: 0
      - blur: 0
      - spread: 4
      - color: Brand/Foreground/Primary
      - opacity: 12%

secondary:
  default:
    - background: Default/Text/Primary
    - text-color: Color/Base/0
    - border: none
  hover:
    - background: Default/Text/Secondary
    - text-color: Color/Base/0
    - border: none
  focused:
    - background: Default/Text/Primary
    - text-color: Color/Base/0
    - border: none
    - shadow:
      - x: 0
      - y: 0
      - blur: 0
      - spread: 4
      - color: Default/State/Focus
      - opacity: 12%

tertiary:
  default:
    - background: Default/Background/Primary
    - text-color: Default/Text/Primary
    - border: 1px solid Default/Border/Primary
  hover:
    - background: Default/State/Primary
    - text-color: Default/Text/Primary
    - border: 1px solid Default/Border/Secondary
  focused:
    - background: Default/Background/Primary
    - text-color: Default/Text/Primary
    - border: 1px solid Default/Border/Primary
    - shadow:
      - x: 0
      - y: 0
      - blur: 0
      - spread: 4
      - color: Default/State/Focus
      - opacity: 12%

error:
  default:
    - background: Error/Background/Primary
    - text-color: Error/Text/Primary
    - border: 1px solid Error/Border/Primary
  hover:
    - background: Error/Background/Tertiary
    - text-color: Error/Text/Primary
    - border: 1px solid Error/Border/Secondary
  focused:
    - background: Error/Background/Primary
    - text-color: Error/Text/Primary
    - border: 1px solid Error/Border/Primary
    - shadow:
      - x: 0
      - y: 0
      - blur: 0
      - spread: 4
      - color: Default/State/Focus
      - opacity: 12%

destructive:
  default:
    - background: Destructive/Foreground/Primary
    - text-color: Color/Base/0
    - border: none
  hover:
    - background: Destructive/Foreground/Secondary
    - text-color: Color/Base/0
    - border: none
  focused:
    - background: Destructive/Foreground/Primary
    - text-color: Color/Base/0
    - border: none
    - shadow:
      - x: 0
      - y: 0
      - blur: 0
      - spread: 4
      - color: Destructive/Foreground/Primary
      - opacity: 12%

### States (global)

disabled:
  - background: Default/Background/Tertiary
  - text-color: Default/Foreground/Primary
  - border: 1px solid Default/Border/Primary

### Rules
- Always use exact values from Figma
- Do not infer or approximate
- Do not swap vertical/horizontal padding
- Only update the requested button size
- Do not modify unrelated components or files





### Notes

- Disabled text uses Default/Foreground/Primary (#8F8F8F = gray-09)
- Default/State/Focus is reserved for focus ring shadows only