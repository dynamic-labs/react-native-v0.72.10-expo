# React Native v0.72.10 + Expo example app

This repo uses React Native v0.72.10 and Expo to create a simple app that integrated with the [dynamic SDK](https://docs.dynamic.xyz/react-native/introduction)

The main change needed to make the v0.72.10 work with the dynamic SDK is to add the following to package.json:

```json
"overrides": {
  "@dynamic-labs/react-native-extension": {
    "react-native": ">=0.72.10",
    "react-native-webview": ">=13.2.2",
    "expo-linking": "~5.0.2"
  }
}
```

## Getting Started

### Install dependencies

```bash
npm install
```
### Add your Dynamic Env ID

You can create your own Dynamic environment by signing up at [Dynamic](https://dynamic.xyz/). Once you have created an environment, you can find the environment ID in the Dynamic dashboard.

Then add the environment ID to the `App.js` file.

```javascript
const dynamic = createClient({
  environmentId: "--- env id ---",
}).extend(ReactNativeExtension());
```

### Run the app

```bash
npm run start
```
