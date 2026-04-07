# Design System Review Checklist

Use this checklist when reviewing component implementations against the design system specs.

---

## 1. Token Usage (Critical)

### Colors
- [ ] No hardcoded hex values (e.g., `#FFFFFF`, `#171717`)
- [ ] All colors use semantic tokens (e.g., `Default/Text/Primary`)
- [ ] Semantic tokens mapped to correct CSS variables (see mapping.md)
- [ ] Light/dark mode tokens are correctly applied

### Spacing
- [ ] No arbitrary pixel values for padding/margin/gap
- [ ] Uses defined spacing tokens only:
  - `space-4` (4px)
  - `space-6` (6px)
  - `space-8` (8px)
  - `space-10` (10px)
  - `space-12` (12px)
  - `space-16` (16px)
- [ ] Padding-x and padding-y are not swapped
- [ ] Vertical and horizontal spacing are correctly applied

### Typography
- [ ] No manual font-size definitions
- [ ] Uses typography tokens:
  - `Text/XS/600` (12px / 18px)
  - `Text/SM/600` (14px / 20px)
  - `Text/MD/600` (16px / 24px)
- [ ] Font weight matches token specification (400, 500, 600)
- [ ] Line height matches token specification

### Border Radius
- [ ] Uses defined radius tokens:
  - `radius-4` (4px)
  - `radius-6` (6px)
  - `radius-8` (8px)
- [ ] Radius matches component size spec

---

## 2. Component Structure

- [ ] Follows structure order: Structure → Layout → Typography → States
- [ ] No sections skipped
- [ ] Each state explicitly defined (not merged)
- [ ] Component matches spec hierarchy from component/*.md

---

## 3. States

### Required States
- [ ] Default state defined
- [ ] Hover state defined (if interactive)
- [ ] Focus state defined (if interactive)
- [ ] Disabled state defined (if applicable)
- [ ] Error state defined (if applicable)

### State Rules
- [ ] Each state treated independently
- [ ] No assumed behavior between states
- [ ] Only requested state updated (no side effects)
- [ ] State-specific colors use correct tokens:

| State | Background Token | Border Token | Text Token |
|-------|------------------|--------------|------------|
| Default | Default/Background/Primary | Default/Border/Primary | Default/Text/Primary |
| Hover | Default/State/Primary | Default/Border/Secondary | Default/Text/Primary |
| Focus | Default/Background/Primary | Default/State/Focus | Default/Text/Primary |
| Disabled | Default/Background/Tertiary | Default/Border/Primary | Default/Foreground/Primary |
| Error | Error/Background/Primary | Error/Border/Primary | Error/Text/Primary |

### Focus Ring
- [ ] Focus ring uses correct shadow spec:
  - x: 0, y: 0, blur: 0, spread: 4px
  - color: appropriate token at 12% opacity
- [ ] Focus ring does not replace border

---

## 4. Button-Specific Checks

### Sizes
| Size | Height | Padding-Y | Padding-X | Radius | Text |
|------|--------|-----------|-----------|--------|------|
| SM | 26px | space-4 | space-8 | radius-4 | Text/XS/600 |
| MD | 32px | space-6 | space-10 | radius-6 | Text/SM/600 |
| LG | 36px | space-8 | space-12 | radius-8 | Text/SM/600 |
| XL | 48px | space-12 | space-16 | radius-8 | Text/MD/600 |

### Icon-Only Sizes
| Size | Dimensions | Padding | Icon Size |
|------|------------|---------|-----------|
| SM | 26x26px | space-6 | 12x12px |
| MD | 32x32px | space-8 | 14x14px |
| LG | 36x36px | space-10 | 14x14px |
| XL | 48x48px | space-16 | 16x16px |

### Variants
- [ ] Primary: Brand/Foreground/Primary background, Color/Base/0 text
- [ ] Secondary: Default/Text/Primary background, Color/Base/0 text
- [ ] Tertiary: Default/Background/Primary background, Default/Text/Primary text, 1px border
- [ ] Error: Error/Background/Primary background, Error/Text/Primary text, 1px border
- [ ] Destructive: Destructive/Foreground/Primary background, Color/Base/0 text

---

## 5. Input-Specific Checks

### Sizes
| Size | Padding-Y | Padding-X | Radius | Label | Placeholder |
|------|-----------|-----------|--------|-------|-------------|
| SM | space-4 | space-10 | radius-6 | Text/XS/500 | Text/XS/400 |
| MD | space-6 | space-12 | radius-6 | Text/SM/500 | Text/SM/400 |
| LG | space-8 | space-16 | radius-6 | Text/SM/500 | Text/MD/400 |

### Structure
- [ ] Label positioned above field
- [ ] Helper text positioned below field
- [ ] Container gap matches size spec (space-6 for SM, space-8 for MD/LG)
- [ ] Border width is 1px

### Optional Slots
- [ ] Right-button uses tertiary SM button spec
- [ ] Right-icon is 12x12px, non-interactive
- [ ] Icon color uses Default/Foreground/Primary

---

## 6. Icon Checks

### Size by Context
| Context | Size | Stroke Width |
|---------|------|--------------|
| Base (source) | 24x24px | 2.0px |
| Button SM | 12x12px | 1.5px |
| Button MD | 14x14px | 1.5px |
| Button LG | 14x14px | 1.5px |
| Button XL | 16x16px | 1.5px |
| Input field | 12x12px | 1.5px |

### Rules
- [ ] Icon color inherited from parent (not hardcoded)
- [ ] Stroke width scales with icon size
- [ ] stroke-cap: round
- [ ] stroke-join: round
- [ ] fill: none (stroke-only)
- [ ] Gap between icon and text: space-4

---

## 7. Semantic Token Mapping Verification

Cross-reference all tokens against mapping.md:

### Brand Tokens
| Token | CSS Variable |
|-------|--------------|
| Brand/Foreground/Primary | --sds-clr-lilac-09 |
| Brand/Foreground/Secondary | --sds-clr-lilac-10 |

### Default Tokens
| Token | CSS Variable |
|-------|--------------|
| Default/Text/Primary | --sds-clr-gray-12 |
| Default/Text/Secondary | --sds-clr-gray-10 |
| Default/Foreground/Primary | --sds-clr-gray-09 |
| Default/Background/Primary | --sds-clr-gray-01 |
| Default/Background/Tertiary | --sds-clr-gray-03 |
| Default/Border/Primary | --sds-clr-gray-06 |
| Default/Border/Secondary | --sds-clr-gray-07 |
| Default/State/Primary | --sds-clr-gray-04 |
| Default/State/Focus | --sds-clr-gray-09 |

### Error Tokens
| Token | CSS Variable |
|-------|--------------|
| Error/Background/Primary | --sds-clr-red-02 |
| Error/Background/Tertiary | --sds-clr-red-03 |
| Error/Text/Primary | --sds-clr-red-11 |
| Error/Border/Primary | --sds-clr-red-06 |
| Error/Border/Secondary | --sds-clr-red-07 |

### Destructive Tokens
| Token | CSS Variable |
|-------|--------------|
| Destructive/Foreground/Primary | --sds-clr-red-09 |
| Destructive/Foreground/Secondary | --sds-clr-red-10 |

### Base Colors
| Token | Value |
|-------|-------|
| Color/Base/0 | #FFFFFF (light) / #000000 (dark) |
| Color/Base/1 | #000000 (light) / #FFFFFF (dark) |

---

## 8. Layout Rules

- [ ] Uses flexbox/grid appropriately
- [ ] Correct flex-direction (row vs column)
- [ ] Correct alignment (align-items, justify-content)
- [ ] Gap uses spacing tokens
- [ ] No magic numbers for widths/heights (unless spec-defined)

---

## 9. Extensibility

- [ ] Component supports all defined sizes
- [ ] Component supports all defined variants
- [ ] Component supports all defined states
- [ ] No hardcoded values preventing reuse
- [ ] Props are typed correctly

---

## 10. Code Quality

- [ ] No inline styles with hardcoded values
- [ ] CSS custom properties used for theming
- [ ] Transitions use --sds-anim-transition-default
- [ ] No !important overrides (unless necessary)
- [ ] BEM naming convention followed

---

## 11. Accessibility

- [ ] Focus states are visible
- [ ] Color contrast meets WCAG standards
- [ ] Interactive elements are keyboard accessible
- [ ] Disabled states are visually distinct
- [ ] aria-* attributes used appropriately

---

## Review Summary Template

```
## Component: [Name]
## Size/Variant: [e.g., Button MD Primary]
## Date: [YYYY-MM-DD]

### Token Compliance
- [ ] Colors: PASS / FAIL
- [ ] Spacing: PASS / FAIL
- [ ] Typography: PASS / FAIL
- [ ] Radius: PASS / FAIL

### State Compliance
- [ ] Default: PASS / FAIL
- [ ] Hover: PASS / FAIL
- [ ] Focus: PASS / FAIL
- [ ] Disabled: PASS / FAIL
- [ ] Error: PASS / FAIL (if applicable)

### Issues Found
1. [Issue description]
2. [Issue description]

### Recommendations
1. [Recommendation]
2. [Recommendation]

### Verdict: APPROVED / NEEDS CHANGES
```

---

## Quick Reference: Common Mistakes

1. **Hardcoded hex values** - Always use CSS variables
2. **Wrong spacing values** - Check component spec for exact padding
3. **Swapped padding** - padding-x ≠ padding-y
4. **Missing focus ring** - All interactive elements need focus state
5. **Wrong disabled color** - Use Default/Foreground/Primary (#8F8F8F)
6. **Icon color hardcoded** - Icons inherit from parent text-color
7. **Wrong border on hover** - Tertiary buttons change border color on hover
8. **Missing 12% opacity on focus shadow** - Focus ring uses 12% opacity
