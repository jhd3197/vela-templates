# vela-templates

Developer starters and connection recipes, separate from the app catalog.
`starters/` contains editable SDK consumers; `recipes/` documents connections to
existing software and contains no installation commands or executable hooks.

Run `../vela-create-app/cli.mjs` with a new app ID, target
directory and optional `hub`, `compact` or `seamless` view. The CLI copies a
starter and rewrites its manifest; it never installs dependencies or software.
The packed CLI includes these starters and works without the Vela repository.

```text
node ../vela-create-app/cli.mjs my-notes ./my-notes seamless
```

Import the generated directory through the Vela Library. App JavaScript uses
only `_vela/sdk.js`, never engine internals. The desktop/mobile browser contract
suite exercises all three view modes. This is a standalone repository in the Vela ecosystem.

[Download starter archives](https://github.com/jhd3197/vela-templates/releases/latest).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md), [CHANGELOG.md](CHANGELOG.md),
[CONTRIBUTORS.md](CONTRIBUTORS.md) and [SECURITY.md](SECURITY.md).

## Support Vela

Vela is free and open source. If it saves you time, you can help keep it going:

- ⭐ [Star the repo](https://github.com/jhd3197/vela) — it costs nothing and helps a lot
- 💖 [GitHub Sponsors](https://github.com/sponsors/jhd3197)
- ☕ [Buy Me a Coffee](https://buymeacoffee.com/jhd3197)

### 💎 Crypto

| | Asset | Network | Address |
|:---:|---|---|---|
| <img src="docs/images/funding/usdt-trc20.png" width="110" alt="QR code for the USDT TRC-20 donation address" /> | **USDT** | **TRC-20** · Tron | `TTiCtqLauF1iSW2YGB3b78KmRxRqoLCgeL` |
| <img src="docs/images/funding/usdt-erc20.png" width="110" alt="QR code for the USDT and ETH ERC-20 donation address" /> | **USDT / ETH** | **ERC-20** · Ethereum | `0xD13D5355Fa214e8317fea2ff192a065BaeC13527` |
| <img src="docs/images/funding/btc.png" width="110" alt="QR code for the Bitcoin donation address" /> | **BTC** | **Bitcoin** | `bc1qatx67n3qxdvuv3arc9j8aytk34f22g02k9c7vr` |
| <img src="docs/images/funding/sol.png" width="110" alt="QR code for the Solana donation address" /> | **SOL** | **Solana** | `AWXzqtBEgUfteHPQtDegsZ6D5y57M3GGdKPD8rR7h6xu` |

## License

[MIT](LICENSE). Created and maintained by [Juan Denis](https://github.com/jhd3197).
