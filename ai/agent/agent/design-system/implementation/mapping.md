
# Token Mapping

Maps semantic tokens (used in components) to primitive CSS variables (defined in foundations/color.md).

---

## Brand

| Semantic Token              | CSS Variable           | Notes              |
|-----------------------------|------------------------|--------------------|
| Brand/Foreground/Primary    | --sds-clr-lilac-09     | Main brand color ✓ |
| Brand/Foreground/Secondary  | --sds-clr-lilac-10     | Hover state ✓      |

---

## Default

| Semantic Token                | CSS Variable           | Notes                        |
|-------------------------------|------------------------|------------------------------|
| Default/Text/Primary          | --sds-clr-gray-12      | Primary text ✓               |
| Default/Text/Secondary        | --sds-clr-gray-10      | Secondary text               |
| Default/Foreground/Primary    | --sds-clr-gray-09      | Disabled text ✓ (#8F8F8F)    |
| Default/Background/Primary    | --sds-clr-gray-01      | Page / surface background ✓  |
| Default/Background/Tertiary   | --sds-clr-gray-03      | Disabled background ✓        |
| Default/Border/Primary        | --sds-clr-gray-06      | Default border ✓             |
| Default/Border/Secondary      | --sds-clr-gray-07      | Hover border ✓               |
| Default/State/Primary         | --sds-clr-gray-04      | Hover surface ✓              |
| Default/State/Focus           | --sds-clr-gray-09      | Focus ring (#8F8F8F, 12% opacity) |

---

## Error

| Semantic Token            | CSS Variable           | Notes              |
|---------------------------|------------------------|--------------------|
| Error/Background/Primary  | --sds-clr-red-02       | Error surface      |
| Error/Background/Tertiary | --sds-clr-red-03       | Error hover        |
| Error/Text/Primary        | --sds-clr-red-11       | Error text         |
| Error/Border/Primary      | --sds-clr-red-06       | Error border       |
| Error/Border/Secondary    | --sds-clr-red-07       | Error hover border |

---

## Destructive

| Semantic Token                  | CSS Variable           | Notes                  |
|---------------------------------|------------------------|------------------------|
| Destructive/Foreground/Primary  | --sds-clr-red-09       | Destructive action     |
| Destructive/Foreground/Secondary| --sds-clr-red-10       | Destructive hover      |

---

## Color (Base)

| Semantic Token  | Value     | Notes      |
|-----------------|-----------|------------|
| Color/Base/0    | #FFFFFF   | Pure white |
| Color/Base/1    | #000000   | Pure black |

---

## ⚠️ Needs Confirmation

Confirm these when working on error/destructive components:

- `Error/Background/Primary` → red scale step (likely red-02)
- `Error/Background/Tertiary` → red scale step (likely red-03)
- `Error/Text/Primary` → red scale step (likely red-11)
- `Error/Border/Primary` → red scale step (likely red-06)
- `Error/Border/Secondary` → red scale step (likely red-07)
- `Destructive/Foreground/Primary` → red scale step (likely red-09)
- `Destructive/Foreground/Secondary` → red scale step (likely red-10)
- `Default/Background/Secondary` → gray step (likely gray-02)