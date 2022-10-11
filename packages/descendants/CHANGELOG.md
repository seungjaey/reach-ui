# @reach/descendants

## 0.18.0-pre.0

### Minor Changes

- We have simplified our build setup to remove a boatload of dependencies. Build output for all packages may look slightly different, though functionally packages that don't have explicit changes marked in the release notes have not changed. ([`c2a1794b`](https://github.com/reach/reach-ui/commit/c2a1794b6818822080f428a1cbe2cec2b4a0a218))

  This may affect you if you use `patch-package` to modify output code. If you need support for legacy browsers, the new bundle may not transpile the same ECMA features as before. In that case you may want to transpile Reach packages directly.

- All default exports have been removed. Replace all default imports with the appropriate documented named export. ([`79319a75`](https://github.com/reach/reach-ui/commit/79319a75a639db398c62ca3296896894eb3e539e))

### Patch Changes

- Fixed a tiny lil index ordering bug ([`79319a75`](https://github.com/reach/reach-ui/commit/79319a75a639db398c62ca3296896894eb3e539e))
- Updated dependencies:
  - `@reach/utils@0.18.0-pre.0`