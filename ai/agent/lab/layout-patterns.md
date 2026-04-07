# Laboratory Layout Patterns

Layout patterns and component usage rules specific to the Stellar Laboratory application.

---

## 1. Page Structure

### Overall Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                         Header                                   │
│  [←] [Logo] Stellar [Lab]           [☀] [Network ▾] [Connect]  │
├──────────────────┬──────────────────────────────────────────────┤
│                  │                                               │
│     Sidebar      │              Main Content                     │
│                  │                                               │
│  ┌────────────┐  │  ┌─────────────────────────────────────────┐ │
│  │ Navigation │  │  │  Page Title (H1)                        │ │
│  │ Items      │  │  │  Description text                       │ │
│  │            │  │  │                                         │ │
│  │            │  │  │  [Primary Action Button]                │ │
│  │            │  │  │                                         │ │
│  │            │  │  │  ┌─────────────────────────────────┐   │ │
│  │            │  │  │  │  Alert / Info Banner            │   │ │
│  │            │  │  │  └─────────────────────────────────┘   │ │
│  │            │  │  │                                         │ │
│  │            │  │  │  Form Fields / Content                  │ │
│  │            │  │  │                                         │ │
│  └────────────┘  │  └─────────────────────────────────────────┘ │
│                  │                                               │
│  ┌────────────┐  │                                               │
│  │ Footer     │  │                                               │
│  │ Links      │  │                                               │
│  └────────────┘  │                                               │
└──────────────────┴──────────────────────────────────────────────┘
```

### Grid System

| Region | Width | Behavior |
|--------|-------|----------|
| Header | 100% | Fixed at top |
| Sidebar | 296px | Fixed width, hidden on mobile (<1040px) |
| Main Content | Fluid | Min 672px, max 1280px, centered |

---

## 2. Header

### Structure

```
Header
├── Left Group
│   ├── Back Button (IconButton, tertiary)
│   ├── Logo (Stellar mark)
│   ├── Brand Text ("Stellar")
│   └── Product Badge ("Lab", secondary variant)
│
└── Right Group
    ├── Theme Toggle (sun/moon icon)
    ├── Network Selector (dropdown)
    │   ├── Status Dot (green/yellow/red)
    │   ├── Network Label
    │   └── Chevron Down
    └── Connect Wallet Button (secondary)
```

### Specifications

| Element | Token/Value |
|---------|-------------|
| Height | 52px (desktop), 56px (mobile) |
| Padding | 8px 24px (desktop), 12px 16px (mobile) |
| Background | Default/Background/Primary |
| Border | 1px solid Default/Border/Primary (bottom) |
| Gap (groups) | 24px |
| Gap (within groups) | 8px |

### Component Usage

- **Back Button**: `IconButton` with `Icon.ArrowLeft`, tertiary variant
- **Logo**: `Logo.Stellar` from SDS
- **Brand Text**: Semi-bold, 16px
- **Lab Badge**: `Badge` component, secondary variant, SM size
- **Theme Toggle**: `ThemeSwitch` component
- **Network Selector**: Custom dropdown with `NetworkIndicator`
- **Connect Wallet**: `Button` component, secondary variant, MD size

---

## 3. Sidebar

### Structure

```
Sidebar
├── Navigation Section (scrollable)
│   ├── NavItem (Introduction) - can be active
│   ├── NavItem (View XDR) - expandable
│   │   └── Nested Items
│   ├── NavItem (Account) - expandable
│   │   ├── Create account keypair
│   │   ├── Fund account
│   │   ├── Create muxed account
│   │   └── Parse muxed account
│   ├── NavItem (Transactions) - expandable
│   ├── NavItem (API explorer) - expandable
│   ├── NavItem (Smart contracts) - expandable
│   └── NavItem (Network limits) - leaf
│
└── Footer Section (fixed)
    ├── Language Selector
    │   ├── Globe Icon
    │   ├── "Language: English"
    │   └── Chevron Down
    ├── Documentation Link
    ├── Feedback Link
    └── GitHub Link
```

### Specifications

| Element | Token/Value |
|---------|-------------|
| Width | 296px |
| Background | Default/Background/Primary |
| Border | 1px solid Default/Border/Primary (right) |
| Padding (nav section) | 24px |
| Padding (footer) | 16px 24px |
| Gap (nav items) | 4px |
| Gap (footer items) | 4px |

### Navigation Item States

| State | Background | Text Color | Border |
|-------|------------|------------|--------|
| Default | transparent | Default/Text/Primary | none |
| Hover | Default/State/Primary | Default/Text/Primary | none |
| Active | Brand/Background/Tertiary (lilac-04) | Brand/Foreground/Primary (lilac-11) | 3px left accent |
| Active Parent | transparent | Default/Text/Primary | none |

### Nav Item Specifications

| Property | Value |
|----------|-------|
| Padding | 8px 12px |
| Border Radius | 6px |
| Font Size | 14px |
| Font Weight | Medium (500) |
| Line Height | 20px |
| Chevron Size | 16x16px |

### Nested Items

- Indent: 12px from parent
- Left border: 1px solid Default/Border/Primary
- Padding-left: 12px additional

---

## 4. Main Content Area

### Page Layout Pattern

```
Main Content
├── Page Header
│   ├── Title (H1, MD size)
│   └── Description (optional, SM text)
│
├── Primary Action Section (optional)
│   └── Primary Button
│
├── Alert/Banner Section (optional)
│   └── Alert component
│
├── Form/Content Section
│   ├── Form fields or content
│   └── ...
│
└── Results Section (optional)
    └── Cards, tables, or output
```

### Specifications

| Property | Value |
|----------|-------|
| Max Width | 1280px |
| Min Width | 672px (content clamp) |
| Padding | 24px (desktop), 16px (mobile) |
| Gap (sections) | 24px (lg), 16px (md), 12px (sm) |
| Alignment | Centered horizontally |

### Typography Hierarchy

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Page Title (H1) | Text/MD (16px) or larger | Semi-bold (600) | Default/Text/Primary |
| Section Title (H2) | Text/SM (14px) | Semi-bold (600) | Default/Text/Primary |
| Body Text | Text/SM (14px) | Regular (400) | Default/Text/Secondary |
| Helper Text | Text/XS (12px) | Regular (400) | Default/Text/Secondary |

---

## 5. Common Page Patterns

### Simple Action Page

Used for: Keypair Generator, Fund Account

```
┌─────────────────────────────────────────┐
│ Page Title                              │
│ Description text explaining the feature │
│                                         │
│ [Primary Action Button]                 │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ ⚠ Warning/Info Alert               │ │
│ │ Additional context or warnings      │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ Results appear here after action        │
└─────────────────────────────────────────┘
```

### Form Page

Used for: Build Transaction, Sign Transaction

```
┌─────────────────────────────────────────┐
│ Page Title                              │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Form Section 1 (Card)               │ │
│ │ ┌─────────────────────────────────┐ │ │
│ │ │ Input Field                     │ │ │
│ │ └─────────────────────────────────┘ │ │
│ │ ┌─────────────────────────────────┐ │ │
│ │ │ Input Field                     │ │ │
│ │ └─────────────────────────────────┘ │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Form Section 2 (Card)               │ │
│ │ ...                                 │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [Submit Button]                         │
└─────────────────────────────────────────┘
```

### Explorer/List Page

Used for: API Explorer, Smart Contract List

```
┌─────────────────────────────────────────┐
│ Page Title                              │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Filters / Search                    │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Result Item 1                       │ │
│ └─────────────────────────────────────┘ │
│ ┌─────────────────────────────────────┐ │
│ │ Result Item 2                       │ │
│ └─────────────────────────────────────┘ │
│ ...                                     │
└─────────────────────────────────────────┘
```

### Results Card Page

Used for: Keypair Generator (after generation), Account Info Display

```
┌─────────────────────────────────────────┐
│ Page Title                              │
│ Description text                        │
│                                         │
│ [Re-generate / Refresh Button]          │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Results Card                        │ │
│ │                                     │ │
│ │ Label                               │ │
│ │ ┌─────────────────────────────[📋]┐ │ │
│ │ │ Public Key value...              │ │ │
│ │ └─────────────────────────────────┘ │ │
│ │                                     │ │
│ │ Label                               │ │
│ │ ┌───────────────────────[👁][📋]┐ │ │
│ │ │ ••••••••••••••••••••••••••••   │ │ │
│ │ └─────────────────────────────────┘ │ │
│ │                                     │ │
│ │                    [Save keypair 💾]│ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ ⚠ Warning Alert                    │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

#### Results Card Specifications

| Element | Specification |
|---------|---------------|
| Card Background | Default/Background/Primary |
| Card Border | 1px solid Default/Border/Primary |
| Card Radius | radius-8 |
| Card Padding | 24px |
| Field Gap | 16px (space-16) |
| Label | Text/XS/500, Default/Text/Secondary |
| Value Field | Read-only input with monospace font |
| Action Buttons | Icon-only, tertiary, SM size |
| Save Button | Tertiary, SM size, with icon-right |

#### Field Action Icons

| Icon | Purpose | Position |
|------|---------|----------|
| Copy (📋) | Copy to clipboard | Right side, always visible |
| Eye (👁) | Toggle visibility | Right side, for sensitive data |
| Eye-off | Hide content | Replaces eye when visible |

### Multi-Step Form Page

Used for: Build Transaction, Sign Transaction workflows

```
┌─────────────────────────────────────────────────────────────┐
│ ┌─────────────────────┬─────────────────────┐               │
│ │ Tab 1 (active)      │ Tab 2               │               │
│ └─────────────────────┴─────────────────────┘               │
│                                                             │
│ Page Title                                    [Clear all]   │
│                                                             │
│ ┌───────────────────────────────────┐  ┌──────────────────┐│
│ │ Form Content                      │  │ Workflow Stepper ││
│ │                                   │  │                  ││
│ │ Source account ⓘ                  │  │ ① Build tx      ││
│ │ ┌────────────────────[Get addr]─┐ │  │                  ││
│ │ │ Input value...                │ │  │ ② Simulate tx   ││
│ │ └───────────────────────────────┘ │  │                  ││
│ │ Helper text with link             │  │ ③ Sign tx       ││
│ │                                   │  │                  ││
│ │ Sequence number ⓘ                 │  │ ④ Submit tx     ││
│ │ ┌─────────────────[Fetch next]──┐ │  │                  ││
│ │ │ Input value...                │ │  └──────────────────┘│
│ │ └───────────────────────────────┘ │                      │
│ │                                   │                      │
│ │ Memo (optional) ⓘ                 │                      │
│ │ ┌──────┬──────┬────┬──────┬─────┐│                      │
│ │ │ None │ Text │ ID │ Hash │ Ret ││                      │
│ │ └──────┴──────┴────┴──────┴─────┘│                      │
│ │                                   │                      │
│ │ ┌─────────────────────────────┐   │                      │
│ │ │ Operation 0            ─────│   │                      │
│ │ │ Operation type ⓘ            │   │                      │
│ │ │ ┌─────────────────────────┐ │   │                      │
│ │ │ │ Select operation type ▾ │ │   │                      │
│ │ │ └─────────────────────────┘ │   │                      │
│ │ └─────────────────────────────┘   │                      │
│ │                                   │                      │
│ │ [Add operation ⊕] [📤]            │                      │
│ │                                   │                      │
│ └───────────────────────────────────┘                      │
│                                                             │
│ [Next: Simulate transaction]              [Save tx 💾]     │
└─────────────────────────────────────────────────────────────┘
```

#### Page Header with Actions

| Element | Position | Specification |
|---------|----------|---------------|
| Page Title | Left | H1, MD size, semi-bold |
| Clear All | Right | Text link, Default/Text/Secondary |
| Gap | Between | justify-content: space-between |

#### Workflow Stepper

| Property | Value |
|----------|-------|
| Position | Fixed right side of form area |
| Width | ~180px |
| Step Number | Circular badge, 24px |
| Active Step | Filled background (secondary) |
| Inactive Step | Outline only |
| Step Label | Text/SM/500 |
| Gap | 16px between steps |

#### Tab Navigation

| Property | Value |
|----------|-------|
| Position | Above page title |
| Style | Underline tabs |
| Active | Brand/Foreground/Primary, 2px bottom border |
| Inactive | Default/Text/Secondary, no border |
| Padding | 12px 16px |
| Gap | 0 (tabs touch) |

---

## 6. Advanced Component Patterns

### Input with Inline Button

Used when input needs associated action (fetch, validate, etc.)

```
┌─────────────────────────────────────────┐
│ Label ⓘ                                 │
├─────────────────────────────────────────┤
│ Input value...              │ [Action] │
├─────────────────────────────────────────┤
│ Helper text                             │
└─────────────────────────────────────────┘
```

| Element | Specification |
|---------|---------------|
| Input | Standard input, right padding for button |
| Button | Tertiary, SM size, inside input border |
| Button Position | Absolute right, vertically centered |
| Separation | No visual gap, button appears inline |

### Segmented Control

Used for mutually exclusive options (Memo type, Network selection)

```
┌────────┬────────┬────────┬────────┬────────┐
│  None  │  Text  │   ID   │  Hash  │ Return │
│ (sel)  │        │        │        │        │
└────────┴────────┴────────┴────────┴────────┘
```

| Property | Value |
|----------|-------|
| Container | 1px solid Default/Border/Primary |
| Border Radius | radius-6 |
| Segment Padding | 8px 16px |
| Selected Background | Default/Background/Primary |
| Unselected Background | Default/Background/Tertiary |
| Selected Text | Default/Text/Primary, medium weight |
| Unselected Text | Default/Text/Secondary |
| Dividers | 1px solid Default/Border/Primary |

### Nested Operation Card

Used for repeatable/removable form sections

```
┌─────────────────────────────────────────┐
│ Operation 0                        [─]  │
├─────────────────────────────────────────┤
│ Operation type ⓘ                        │
│ ┌─────────────────────────────────────┐ │
│ │ Select operation type            ▾ │ │
│ └─────────────────────────────────────┘ │
│ Helper text with documentation link     │
└─────────────────────────────────────────┘
```

| Element | Specification |
|---------|---------------|
| Card Header | Badge-style label + collapse/remove icon |
| Header Badge | Tertiary badge with "Operation N" |
| Collapse Icon | Icon.Minus or similar, tertiary SM |
| Card Padding | 16px |
| Border | 1px solid Default/Border/Primary |
| Border Radius | radius-8 |
| Background | Default/Background/Primary |

### Add Operation Button

```
[Add operation ⊕]  [📤]
```

| Element | Specification |
|---------|---------------|
| Add Button | Tertiary, SM, icon-left (Plus) |
| Import Button | Tertiary, SM, icon-only (Upload) |
| Gap | 8px between buttons |
| Position | Below last operation card |

### Footer Actions

```
[Next: Simulate transaction]        [Save transaction 💾]
```

| Element | Position | Specification |
|---------|----------|---------------|
| Next/Submit | Left | Tertiary, MD size |
| Save | Right | Tertiary, MD size, icon-right (Save) |
| Layout | Flex, space-between |
| Margin Top | 24px from last content |

---

## 7. Basic Component Usage Rules

### Buttons

| Context | Variant | Size |
|---------|---------|------|
| Primary page action | Secondary | MD |
| Form submit | Secondary | MD |
| Secondary action | Tertiary | MD |
| Destructive action | Destructive | MD |
| In-card action | Tertiary | SM |
| Icon-only action | Tertiary (icon-only) | SM/MD |

### Alerts

| Type | Variant | Usage |
|------|---------|-------|
| Info | Primary | General information |
| Warning | Warning | Security warnings, cautions |
| Error | Error | Validation errors, failures |
| Success | Success | Confirmations |

### Cards

- Used for grouping related form fields
- Used for displaying results
- Background: Default/Background/Primary
- Border: 1px solid Default/Border/Primary
- Border Radius: radius-8
- Padding: 16px or 24px

### Form Fields

- Stack vertically with gap: space-12 or space-16
- Labels above fields
- Helper text below fields
- Error messages in Error/Text/Primary color

---

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Changes |
|------------|-------|---------|
| Desktop | > 1040px | Full layout with sidebar |
| Tablet/Mobile | ≤ 1040px | Sidebar hidden, mobile nav |

### Mobile Adaptations

1. **Header**
   - Back button hidden (use mobile nav)
   - Brand text hidden (logo only)
   - Network selector collapsed
   - Hamburger menu added

2. **Sidebar**
   - Hidden by default
   - Slides in from left as overlay
   - Full height modal

3. **Content**
   - Padding reduced to 16px
   - Full width (no max-width constraint)
   - Cards stack vertically

---

## 9. Spacing Guidelines

### Section Spacing

| Gap | Token | Usage |
|-----|-------|-------|
| 4px | space-4 | Tight: icon-text, inline elements |
| 8px | space-8 | Small: form field internal |
| 12px | space-12 | Medium: related elements |
| 16px | space-16 | Default: between form fields |
| 24px | space-24 | Large: between sections |

### Box Component Usage

```tsx
// Section container
<Box gap="lg" direction="column">
  {/* Section content */}
</Box>

// Form fields
<Box gap="md" direction="column">
  <Input />
  <Input />
</Box>

// Inline elements
<Box gap="sm" direction="row" align="center">
  <Icon />
  <Text />
</Box>
```

---

## 10. Z-Index Layers

| Layer | Z-Index | Usage |
|-------|---------|-------|
| Base content | 0 | Main content area |
| Sidebar | 10 | Fixed sidebar |
| Header | 20 | Fixed header |
| Dropdowns | 30 | Network selector, etc. |
| Modals | 40 | Modal dialogs |
| Tooltips | 50 | Tooltips, popovers |
| Notifications | 60 | Toast notifications |

---

## 11. Animation Guidelines

### Transitions

- Default duration: `var(--sds-anim-transition-default)`
- Used for: hover states, focus states, color changes

### Sidebar Expand/Collapse

- Duration: 200ms
- Easing: ease-in-out
- Chevron rotation: 0° → 90° (or 180° for down)

### Page Transitions

- Keep minimal for performance
- Avoid full-page transitions
- Content should appear immediately

---

## Quick Reference

### Common Layout Classes

```scss
.LabLayout              // Root container
.LabLayout__header      // Header wrapper
.LabLayout__sidebar     // Sidebar wrapper
.LabLayout__container   // Content container
.LabLayout__content     // Content inner wrapper
```

### Box Component Gaps

| Gap Prop | Value |
|----------|-------|
| xs | 4px |
| sm | 8px |
| md | 12px |
| lg | 16px |
| xl | 24px |
| xxl | 32px |
