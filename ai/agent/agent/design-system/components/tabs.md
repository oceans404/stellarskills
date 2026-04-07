# Tabs

## Sizes

### Container

| Size | Height (Primary) | Height (Secondary) | Height (Tertiary) | Item Spacing | Container Padding | Container Radius |
|------|------------------|--------------------|--------------------|--------------|-------------------|------------------|
| SM | 34px | 34px | 26px | 16px / 4px / 4px | 0 / 4px / 0 | none / 4px / 4px |
| MD | 44px | 44px | 32px | 20px / 8px / 8px | 0 / 6px / 0 | none / 6px / 6px |
| LG | 56px | 56px | 40px | 24px / 12px / 12px | 0 / 8px / 0 | none / 8px / 8px |

Note: Values shown as Primary / Secondary / Tertiary

### Tab Item (Primary Style)

| Size | Height | Padding X | Padding Y |
|------|--------|-----------|-----------|
| SM | 34px | space-8 | space-8 |
| MD | 44px | space-10 | space-12 |
| LG | 52px | space-12 | space-16 |

### Tab Item (Secondary Style)

| Size | Height | Padding X | Padding Y | Radius |
|------|--------|-----------|-----------|--------|
| SM | 26px | space-8 | space-4 | radius-4 |
| MD | 32px | space-10 | space-6 | radius-6 |
| LG | 36px | space-12 | space-8 | radius-8 |

### Tab Item (Tertiary Style)

Uses same specs as Secondary style tab items.

## Typography

| Size | Text Style |
|------|------------|
| SM | Text/XS/600 |
| MD | Text/SM/600 |
| LG | Text/SM/600 |

## Variants

### Primary

Underline-style tabs with bottom border indicator on current tab.

container:
  - background: Default/Background/Primary
  - border: none
  - radius: none

### Secondary

Pill-style tabs with background fill on current tab.

container:
  - background: Default/Background/Primary
  - border: none
  - radius: radius-4 / radius-6 / radius-8 (by size)
  - padding: space-4 / space-6 / space-8 (by size)

### Tertiary

Minimal pill-style tabs without container background.

container:
  - background: none
  - border: none
  - radius: radius-4 / radius-6 / radius-8 (by size)

## States

### Tab Item States (Primary Style)

default:
  - background: none
  - text-color: Default/Text/Primary
  - border: none

hover:
  - background: Default/State/Primary
  - text-color: Default/Text/Primary
  - border: none

current:
  - background: none
  - text-color: Brand/Foreground/Primary
  - border-bottom: 2px solid Brand/Foreground/Primary

disabled:
  - background: Default/Background/Tertiary
  - text-color: Default/State/Focus
  - border: none

### Tab Item States (Secondary Style)

default:
  - background: none
  - text-color: Default/Text/Primary
  - border: none

hover:
  - background: Default/State/Primary
  - text-color: Default/Text/Primary
  - border: none

current:
  - background: Brand/Background/Tertiary
  - text-color: Brand/Foreground/Primary
  - border: none

disabled:
  - background: Default/Background/Tertiary
  - text-color: Default/State/Focus
  - border: none

### Tab Item States (Tertiary Style)

Uses same states as Secondary style.

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Default/Background/Primary | #FCFCFC | Container background |
| Default/State/Primary | #EDEDED | Hover state background |
| Default/Background/Tertiary | #F3F3F3 | Disabled background |
| Default/Text/Primary | #171717 | Default text |
| Default/State/Focus | #8F8F8F | Disabled text |
| Brand/Foreground/Primary | #6E56CF | Current text, current border (Primary) |
| Brand/Background/Tertiary | #EDE9FE | Current background (Secondary) |

## Notes

- Primary style uses underline indicator for current state
- Secondary style uses pill background for current state
- Tertiary style is same as Secondary but without container background
- Tab items use Button component internally (Tab Primary / Tab Secondary variants)
- Brand/Background/Tertiary (#EDE9FE) is used for Secondary current state but not yet in color.md
