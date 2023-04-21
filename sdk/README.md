# TON Play SDK

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

TON Play SDK allows you to implement solutions for managing digital assets and the in-game marketplace. 

TON Play allows developers to add blockchain elements to any mobile or web game. Additionally, you can port any web game to launch directly inside Telegram via a Web App.

## API Key
To get your API-key follow [the link](https://docs.tonplay.io/digital-assets-api/api-key)

## Usage
```typescript
import { TonPlayClient } from "ton-play-sdk";

const apiKey = 'api:key';
const tonplayClient = new TonPlayClient(apiKey);

tonplayClient.checkToken("j.w.t").then(data => console.log(data));

/*
CheckTokenResponseDTO { valid: false, active: false, userUid: null }
*/

```

[npm-downloads-image]: https://badgen.net/npm/dm/ton-play-sdk
[npm-downloads-url]: https://npmcharts.com/compare/ton-play-sdk?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/ton-play-sdk
[npm-install-size-url]: https://packagephobia.com/result?p=ton-play-sdk
[npm-url]: https://npmjs.org/package/ton-play-sdk
[npm-version-image]: https://badgen.net/npm/v/ton-play-sdk