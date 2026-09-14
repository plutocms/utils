# Currency formatting

This feature exports `formatCurrency()`, a function to format numbers as localized currency strings.

## Function signature

```typescript
export function formatCurrency(value: number, options?: Options): string
```

## Supported currencies

The function supports three currencies:

- `USD` — United States Dollar (locale: `en-US`, symbol: `$`).
- `BRL` — Brazilian Real (locale: `pt-BR`, symbol: `R$`).
- `CAD` — Canadian Dollar (locale: `en-CA`, symbol: `$`).

## Options

Pass an optional `options` object as the second argument:

- `currency` — which currency code to use. Defaults to `'USD'`.
- `spaceBetween` — add a space between the symbol and the number. Defaults to `true`. For example, `'$ 10.00'` instead of `'$10.00'`.
- `prefix` — how to show the currency symbol. Accepts `'symbol'` (the symbol itself, like `$`) or `'code'` (the three-letter code, like `USD`). Defaults to `'symbol'`. This maps to Intl's `currencyDisplay` option.
- `trailingZero` — show two decimal places (e.g., `10.00`) or omit zeros for whole amounts (e.g., `10`). Defaults to `true`, which always shows two decimals.

## Behavior

The function uses the JavaScript `Intl.NumberFormat` API to format the number according to the target locale. This ensures correct placement of the symbol, decimal separator, and thousands separator for each currency and locale.

If `spaceBetween` is true, the function adds a space between the currency symbol and the number using a regex replace.

## Examples

```typescript
formatCurrency(1000) // → '$ 1,000.00' (USD, default)
formatCurrency(1000, { currency: 'BRL' }) // → 'R$ 1.000,00' (BRL uses different separators)
formatCurrency(1000, { spaceBetween: false }) // → '$1,000.00'
formatCurrency(1000.5, { trailingZero: false }) // → '$ 1,000.50' (zeros kept for decimal part)
formatCurrency(1000, { trailingZero: false }) // → '$ 1,000' (whole amounts show no decimals)
formatCurrency(1000, { prefix: 'code' }) // → 'USD 1,000.00'
```
