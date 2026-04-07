# Design System Rules

## Core Principles

- Always use design tokens (no raw hex values)
- Never infer values that are not defined
- Never approximate spacing, color, or typography
- Follow existing component structure strictly
- Do not modify unrelated components

---

## Tokens

- All colors must reference tokens (e.g. Default/Text/Primary)
- Do not use hex values directly
- If a token is missing, define it in foundations first

---

## Components

- Always follow the structure:
  Structure → Layout → Typography → States

- Do not skip sections
- Do not merge states together
- Each state must be explicitly defined

---

## States

- Treat each state independently (default, hover, focus, error, disabled)
- Do not assume behavior between states
- Only update the requested state

---

## Layout

- Use spacing tokens only (no px unless defined)
- Respect vertical and horizontal spacing separately
- Do not swap padding-x and padding-y

---

## Typography

- Always use typography tokens (e.g. Text/SM/600)
- Do not define font-size manually

---

## Extensibility

- Components must be extendable (sizes, states, variants)
- Do not hardcode values that prevent reuse

## Base Colors
- Color/Base/0 = #FFFFFF (use as literal, no CSS variable)
- Color/Base/1 = #000000 (use as literal, no CSS variable)

## Focus Ring

- Focus ring always uses the variant's primary color at 12% opacity
- box-shadow: 0 0 0 4px <variant-color> @ 12%
- primary: rgba(110, 86, 207, 0.12)
- secondary: rgba(143, 143, 143, 0.12)
- tertiary: rgba(143, 143, 143, 0.12)
- error: rgba(143, 143, 143, 0.12)
- destructive: rgba(229, 72, 77, 0.12)ㅇ