# Electoronic-Veterinary-App-React-Native-Client

Electoronic Veterinary App React Native Client is an application containing JavaScript, Java. The checked-in dependency manifests use React, React Native. Source modules cover `AllAppointmentsScreen`, `AppointmentDetailScreen`, `NewAppointmentScreen`, `UpcomingAppointmentsScreen`, `ChangePasswordScreen`, `ForgotPasswordScreen`, `ResetPasswordScreen`, `SignInScreen`, `SignUpScreen`, `AllClinicsScreen`.

## Repository layout

- `__tests__/` — 1 tracked file(s).
- `android/` — 48 tracked file(s); source examples: `android/app/src/debug/java/com/evetclient/ReactNativeFlipper.java`, `android/app/src/main/java/com/evetclient/MainActivity.java`.
- `ios/` — 15 tracked file(s).
- `src/` — 113 tracked file(s); source examples: `src/components/shared/AppointmentItem.js`, `src/components/shared/ClinicListItem.js`.

## Local setup

Run each package setup block from the repository root. For workspace repositories, install dependencies at the root before running application-specific scripts.

Clone this repository and enter its directory:

```sh
git clone https://github.com/stanleyHayes/Electoronic-Veterinary-App-React-Native-Client.git
cd Electoronic-Veterinary-App-React-Native-Client
```

### Node package: `package.json`

Use Node.js and npm.

```sh
npm install
```

- `npm run start` — runs the declared `start` script (`react-native start`).
- `npm run lint` — runs the declared `lint` script (`eslint .`).
- `npm run test` — runs the declared `test` script (`jest`).

## Source entry points

- [.eslintrc.js](.eslintrc.js)
- [.prettierrc.js](.prettierrc.js)
- [App.js](App.js)
- [android/app/src/debug/java/com/evetclient/ReactNativeFlipper.java](android/app/src/debug/java/com/evetclient/ReactNativeFlipper.java)
- [android/app/src/main/java/com/evetclient/MainActivity.java](android/app/src/main/java/com/evetclient/MainActivity.java)
- [android/app/src/main/java/com/evetclient/MainApplication.java](android/app/src/main/java/com/evetclient/MainApplication.java)
- [babel.config.js](babel.config.js)
- [index.js](index.js)

## Development notes

Commands above come from the tracked manifests and source layout. External services and runtime configuration may be required. Documentation updates do not establish that the application is deployed or that its tests pass.
