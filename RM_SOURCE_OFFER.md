# Robben Media Documenso Source Offer

This public repository is the corresponding source for Robben Media's modified
Documenso Community Edition deployment at `https://sign.builtbyrobben.com`.

## Upstream

- Upstream: `https://github.com/documenso/documenso`
- Base commit: `400b6a24f17916247d8baa4091b5877295334569`
- License: AGPL-3.0 (see upstream `LICENSE`)

## Robben Media patch

The `robben/retry-backoff` branch adds bounded retry delays to the local
background-job provider. It prevents a transient SMTP `421` response from
immediately consuming all retry attempts. The patch introduces delays of one,
five, and fifteen minutes for successive retries.

This repository intentionally excludes all deployment configuration containing
secrets, database exports, agreements, signing certificates, and mail
credentials. The running image is published only from this source after CI
validation.
