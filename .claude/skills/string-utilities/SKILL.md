# String utilities

This feature exports three utility functions for string transformations and parsing: `fileNameToKebabCase()`, `slugify()`, and `domainFromUrl()`.

## fileNameToKebabCase

```typescript
export function fileNameToKebabCase(name: string): string
```

Converts a filename to kebab-case while preserving its file extension.

The function:

1. Splits the filename into name and extension.
2. Converts the name part to kebab-case using `scule`'s `kebabCase()`.
3. URL-encodes the result with `encodeURIComponent()`.
4. Appends the original extension.

The result is safe to use in URLs and filenames.

Example: `"My Document.pdf"` becomes `"my-document.pdf"`.

## slugify

```typescript
export function slugify(text: string): string
```

Converts plain text into a URL-safe slug. It removes diacritical marks (accents) and converts to kebab-case.

The function:

1. Normalizes the text with `normalize('NFD')` (decomposed form).
2. Removes diacritical marks using a regex.
3. Converts to kebab-case using `scule`'s `kebabCase()`.

The result has no spaces, accents, or special characters — only lowercase letters, numbers, and hyphens.

Example: `"Café au Lait"` becomes `"cafe-au-lait"`.

## domainFromUrl

```typescript
export function domainFromUrl(url: string | null | undefined): string | undefined
```

Extracts the domain name from a URL.

The function:

1. Returns `undefined` if the input is `null`, `undefined`, or empty.
2. Uses a regex to find the domain, ignoring the protocol (`http://`, `https://`) and `www.` prefix.
3. Returns the domain name, or an empty string if the regex does not match.

The input can have a protocol or be bare (e.g., both `"https://example.com"` and `"example.com"` work).

Example: `"https://www.example.com/path"` becomes `"example.com"`.
