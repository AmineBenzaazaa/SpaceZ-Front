# SpaceZ-Front

Front end of **Space Z**, a React Native (Expo) mobile app for a crypto wallet / staking platform. It is a client only: all data comes from a separate REST API whose URL is set in `src/config.js`.

## Screens (from the code)

- **Auth:** onboarding, sign in, sign up, email verification (OTP), key screen
- **Main tabs:** Home, Swap, Wallet, Team, Statistics
- **Other screens:** staking, deposit / withdraw, wallet deposit / withdraw (QR code, copy address), reward withdrawal, offers, statement, notifications, team levels and level details, profile, change password

The app talks to API endpoints such as `/user/login`, `/user/signup`, `/user/verify-email`, `/wallet/balance`, `/wallet/tokenlist`, `/wallet/withdraw`, `/swap`, `/swap/qoute`, `/stake`, `/stats` and `/home/data`.

## Tech stack

- Expo SDK 49, React Native 0.72, React 18
- React Navigation 6 (stack, bottom tabs) and react-navigation-shared-element
- Axios for HTTP, expo-secure-store / AsyncStorage for local storage
- react-native-svg, react-native-qrcode-svg, lottie-react-native, react-native-toast-message
- EAS Build / EAS Update (`eas.json`, `app.json`)

## Project structure

```
App.js                 navigation (auth stack + bottom tabs + detail screens)
app.json, eas.json     Expo / EAS configuration
ios/                   generated native iOS project
src/
  assets/              fonts, icons, images, Lottie animations
  components/          reusable UI (Button, Input, OtpInput, PhoneInput, Modal, Header...)
  constants/           colors, countries, links
  context/             AuthContext, DashboardContext, OtpContext
  screens/app/
    auth/              Onboarding, Signin, Signup, Verification, Key
    dashboard/         Home, Swap, Wallet, Team, Statistics, Staking, Deposit, Withdraw...
    user/              Profile, UpdatePassword
  config.js            BASE_URL of the backend API
```

## Getting started

Prerequisites: Node.js, npm, and either the Expo Go app, an Android emulator or Xcode (for iOS).

```bash
npm install
npm start          # expo start
npm run android    # expo run:android
npm run ios        # expo run:ios
npm run web        # expo start --web
npm run lint
```

Set the backend URL in `src/config.js` (`BASE_URL`) before running.

## Environment variables

None. Configuration is in `src/config.js`, `src/constants/links.js` and `app.json`.
