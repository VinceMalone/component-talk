# Conventions — Naming

Why?

- **Consistency** and **predictability**
  - If I am consuming a component library and know that `size` is a commonly used prop name—for sizing—then I can quickly check if a component is _sizable_.
- Reduce need for ad hoc documentation—the paradigm can be documented once.

---

# Conventions — Naming

## Callback props

Prefix callback props with "on"; e.g. `onSave`, `onCancel`, `onSetup`.

## Native equivalent

If there is a native equivalent prop, emulate that name; e.g. `disabled`, `selected`, `href`.

<Notes>
<Small size="16px">

## Native equivalent

- why?
  - same reasons for "Naming Conventions" - consistency and predictability
  - e.g. using a similar, but different, word as `disabled` may imply that it works differently than traditional disabled functionality
- **caveat:** be careful not to override element props that are trying to be passed along

</Small>
</Notes>

---

# Conventions — Naming — Enums

When possible, avoid using names that imply a sequence. Attempt to use semantic names that describe the _context_.

- For example `compact`/`normal` vs `small`/`medium`
  - `normal` makes sense as a _default_ value
- This will help avoid scenarios such as: <!-- `xs`, `s`, `m`, `xm`, `l`, `xl`, `xxl` -->
  - `s, m, l`
  - `s, m, l, xl`
  - `xs, s, m, l, xl, xxl`
  - `xs, s, m, xm, l, xl, xxl`

---

# Conventions — Naming — Enums

examples...

<!-- `page` and `action` imply the context in which the sizes are to be used rather than ad hoc preference -->

```tsx
// avoid
<Spinner size="large" />
<Spinner size="button" />

// preferred
<Spinner size="page" />
<Spinner size="action" />
```
