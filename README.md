# <img width="32px" src="./public/images/wifi.png"> WiFi Card

Source Repo: https://github.com/bndw/wifi-card

Test your repo wiht the Folowing Website: https://wificard.io

Print a simple card with your WiFi login details. Tape it to the fridge, keep it in your wallet, hang on the wall for guests at home or in the hotel, etc.

<a href="https://wificard.io/">
   <img alt="wificard" src="https://user-images.githubusercontent.com/48166553/129261875-169841ab-e997-4596-af7f-ada0f68cd230.gif">
</a>

<a href="https://thiswebsitedoesnottrackyou.com/">
   <img width="402" alt="This website does not track you" src="https://user-images.githubusercontent.com/4248167/184430158-849d4b2c-de43-483f-86fe-0743b23bc40c.png">
</a>

## Running locally

Run the official Docker image on http://localhost:8080

```
make run
```

## Development

1. Make sure you have `yarn` installed
2. Run the live-reload server on http://localhost:3000
   ```
   make dev
   ```

This project uses [Prettier](https://prettier.io/) formatting. All pull requests must pass the automated lint checks before merging. Prettier format is run automatically as a pre-commit hook.

## Language Contribution Guide

We would love for you to contribute to different languages and help make it even better than it is today! As a language contributor, here are some steps we would like you to follow:

1. Add a translation to [`./src/translations.js`](./src/translations.js). Here's an example of the German translation:

   ```
   {
      id: 'de-DE',              // locale code
      name: 'German - Deutsch', // Display name in the format 'latinName - nativeName'
      rtl: false,               // Optional, true if this is a right-to-left language
      translation: {
         ...
      }
   }
   ```

2. Append an entry to the [Supported Languages](#supported-languages) table below.

## Supported Languages

| Language                     | Author Credit                                      |
| ---------------------------- | -------------------------------------------------- |
| English                      | [bndw](https://github.com/bndw)                    |
| German                       | [devofthings](https://github.com/devofthings)      |
| Swiss German                 | [ghostingexe](https://github.com/Ghostkingexe)     |

For more Languages go look here: https://github.com/bndw/wifi-card#supported-languages
