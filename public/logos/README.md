# Logos

Place institutional logos here (`ri-muhc.svg`, `mcgill.svg`).

They are currently rendered as labelled placeholder tiles in
`components/Footer.tsx` — replace `<LogoPlaceholder …>` with:

```tsx
// eslint-disable-next-line @next/next/no-img-element
<img src={withBasePath('/logos/ri-muhc.svg')} alt="RI-MUHC" className="h-14 w-auto" />
```

⚠️ Check RI-MUHC and McGill University brand guidelines before publishing
their logos, and confirm permitted usage with the relevant communications office.
