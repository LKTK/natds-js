# Using a CDN

You can try using our Design System components for React with minimal front-end infrastructure.

## ⚠️ This feature is experimental

* We discourage using this approach in production, since this is experimental, and the client has to download the
entire library, regardless of which components your project will use, affecting performance and bandwidth utilization.

* The UMD links are using the latest tag to point to the latest version of the library.
This pointer is unstable, it shifts as we release new versions.
You should consider pointing to a specific version, such as `v7.5.0`.

## CDN Link

Natura Design System components library for React is available over CDN.

We provide a Universal Module Definition (UMD) file via `jsdelivr`:

https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web

```html
<script
    crossorigin="anonymous"
    src="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web">
</script>
```

jsdelivr is our recommended way, since it have [more pops and CDN/DNS redundancy](https://www.jsdelivr.com/network).

For more info and examples, check our [CDN documentation](./docs/cdn-links.md).

## Importing directly on HTML

### For development

```html
<script crossorigin="anonymous" src="https://cdn.jsdelivr.net/npm/react/umd/react.development.min.js"></script>
<script crossorigin="anonymous" src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.development.min.js"></script>
<script crossorigin="anonymous" src="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web"></script>
```

Remember that you should use these React versions only for development, and are not suitable for production.

### For production

Minified and optimized production versions of React are available together with our Design System library at:

```html
<script crossorigin="anonymous" src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>
<script crossorigin="anonymous" src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"></script>
<script crossorigin="anonymous" src="https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web"></script>
```

### Why the `crossorigin` Attribute?

If you serve React and Natura Design System from a CDN, we recommend you to keep the
[`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin) attribute set:

```html
<script crossorigin="anonymous" src="..."></script>
```

## Importing with `single-spa` import mapping

CDN can be great for some micro frontend cases with `single-spa`:

```json
{
  "imports": {
    "@natura-cosmeticos/natds-web": "https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web"
  }
}
```
