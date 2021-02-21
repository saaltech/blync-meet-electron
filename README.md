# Jifmeet Electron

Desktop application for Jifmeet built with Electron.

## Features

- Builtin auto-updates
- Always-On-Top window

## Installation

| Windows | macOS |
| -- | -- |
| [Download](https://github.com/saaltech/blync-meet-electron/releases/latest/download/jifmeet.exe) | [Download](https://github.com/saaltech/blync-meet-electron/releases/latest/download/jifmeet.dmg) |


## Development

#### Installing dependencies

Install Node.js 12 first (or if you use [nvm](https://github.com/nvm-sh/nvm), switch to Node.js 12 by running `nvm use`).

<details><summary>Extra dependencies for Windows</summary>

```bash
npm install --global --production windows-build-tools
npm config set msvs_version 2017
```

Add python.exe path to the `Path` system env variable (if not already present) 
</details>

Install all required packages:

```bash
npm install
```

#### Starting in development mode

```bash
export WEB_APP_URL=https://dev-jifmeet.saal.ai
npm start 
```

The debugger tools are available when running in dev mode and can be activated with keyboard shortcuts as defined here https://github.com/sindresorhus/electron-debug#features.

It can also be displayed automatically from the `SHOW_DEV_TOOLS` environment variable such as:

```bash
SHOW_DEV_TOOLS=true npm start
```

or from the application `--show-dev-tools` command line flag.

## Building the distribution
This step will create a draft release in github under releases. Set the appropriate version in package.json before doing so

##### Requirements
1. GH_TOKEN(Github token): We will need this token to be set in bash_profile(mac) and environment variable(windows) to publish the distribution to this repo's release page.
2. [Code signing](https://www.electron.build/code-signing) for auto updates/downloads


##### DEV/QA/Staging
Mac
```bash
export WEB_APP_URL=https://dev-jifmeet.saal.ai
```

Windows
```bash
set WEB_APP_URL=https://dev-jifmeet.saal.ai
```

For Dev build/packaging (via abr)
```bash
npm run dist-dev
```

For QA build/packaging (via abr)
```bash
npm run dist-qa
```

For Pre-prod build/packaging (via abr)
```bash
npm run dist-preprod
```

##### Production

```bash
npm run dist
```

## Known issues

### Windows

A warning will show up mentioning the app is unsigned upon first install. This is expected.

### macOS

On macOS Catalina a warning will be displayed on first install. The app won't open unless "open" is pressed. This dialog is only shown once.
Builtin auto-updates are not yet handled in macOS due to unsigned build.
