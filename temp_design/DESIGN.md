---
name: Axiom Technical System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#434655'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#00687a'
  on-secondary: '#ffffff'
  secondary-container: '#57dffe'
  on-secondary-container: '#006172'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  h1:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.05'
    letterSpacing: -0.04em
  h1-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h3:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h4:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.3'
  data-display:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.0'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  small:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
  label:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

This design system is engineered for premium enterprise technology environments where clarity, technical precision, and editorial sophistication are paramount. The aesthetic moves away from generic SaaS "playfulness" toward an intelligent, authoritative, and structured interface.

The design style is **Precision Minimalism**. It leverages heavy whitespace, high-contrast typography, and a strict adherence to a technical grid. Visual interest is generated through the tension between geometric display type and functional UI surfaces rather than decorative ornamentation. The system should evoke a sense of deep capability and institutional trust.

## Colors

The palette is rooted in a high-contrast foundation of deep ink and pure paper white. 

- **Primary Brand (#2563EB):** Used for primary actions and active states. It represents momentum and intelligence.
- **Accent (#06B6D4):** Reserved for data visualization, technical highlights, or indicating specialized system status. Use sparingly to maintain a premium feel.
- **Surface (#F8FAFC):** Employed for subtle grouping of content and secondary containers to maintain a soft layered effect without heavy shadows.
- **Dark Section (#0B1220):** Used for immersive footer areas, sidebar navigation, or high-impact data dashboards to create a "command center" aesthetic.

## Typography

Typography is the primary driver of the system's character. **Space Grotesk** is used for high-impact headlines and numerical data, providing a technical, geometric edge. **Inter** handles all functional UI and long-form reading, ensuring maximum legibility across dense enterprise dashboards.

- **Headlines:** Use tight letter-spacing for larger sizes (H1-H2) to enhance the editorial feel.
- **Numerical Values:** Large metrics in dashboards should utilize Space Grotesk to emphasize precision.
- **Labels:** Use the uppercase `label` style for table headers and small metadata categories to create clear visual hierarchy.

## Layout & Spacing

The layout is built on a **12-column fixed-width grid** (max 1280px) for desktop, centered in the viewport. 

- **Vertical Rhythm:** Use the 4px base unit. Component-to-component spacing should lean towards `lg` (48px) and `xl` (80px) to prevent the "cluttered enterprise" look.
- **Grid Discipline:** All elements must align to the grid edges. Avoid floating elements; every container should have a structural relationship with the vertical columns.
- **Mobile Reflow:** On mobile, the grid collapses to 4 columns with 16px margins. Headlines should scale down according to the `h1-mobile` token.

## Elevation & Depth

This system avoids heavy drop shadows in favor of **Tonal Layering** and **Subtle Outlines**.

- **Level 0 (Background):** Pure #FFFFFF.
- **Level 1 (Surface):** #F8FAFC, used for cards or secondary navigation panels.
- **Outlines:** Use a consistent 1px border (#E5E7EB) to define boundaries. In dark sections, use a 1px border with 10% opacity white.
- **Focus States:** When an element is active or focused, use a 2px offset ring in the Primary Brand color (#2563EB) rather than a shadow.

## Shapes

The shape language is refined and intentional. While the "Rounded" setting is active, the system uses specific radius values to differentiate between small interactive components and large structural containers.

- **Cards:** 12px radius provides a sophisticated, modern container for content.
- **Inputs & Buttons:** 8px radius ensures interaction points feel approachable but disciplined.
- **Tags/Status Chips:** A tighter 4px radius is used to denote these as technical metadata rather than primary actions.

## Components

### Buttons
- **Primary:** Solid #2563EB background with #FFFFFF text. No shadow. On hover, darken the background slightly.
- **Secondary:** Transparent background with 1px #E5E7EB border and #111827 text.
- **Tertiary/Ghost:** No border or background. Use for low-priority actions in dense UIs.

### Input Fields
- Height should be fixed at 44px for desktop. 
- 1px border (#E5E7EB) with 8px radius.
- Use #F8FAFC as the background for "disabled" or "read-only" states.

### Cards
- Use white background with 1px #E5E7EB border and 12px radius. 
- Padding should be generous (24px or 32px) to maintain the editorial aesthetic.

### Data Tables
- Row height: 56px for standard, 48px for compact.
- Header row: Use `label` typography style with a subtle #F8FAFC background.
- Cell borders: Horizontal only (1px #E5E7EB). Avoid vertical grid lines to keep the view clean.

### Status Indicators
- Small 8px circles with #06B6D4 for "Active" and #E5E7EB for "Inactive". Always pair with a text label for accessibility.