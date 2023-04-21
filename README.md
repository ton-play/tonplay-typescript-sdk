# TON Play Typescript SDK

```bash
npm install ton-play-sdk
```

```ts
const xAuthTonplay = process.env.X_AUTH_TONPLAY?.toString();
const tonPlay = new TonPlayClient(xAuthTonplay);
```

```ts
const tokenValidationData: CheckTokenResponseDTO = await tonPlay.checkToken(USER_JWT);
```

```ts
tonPlay.checkToken(USER_JWT).then(data => console.log(data));
/*
CheckTokenResponseDTO { valid: false, active: false, userUid: null }
*/
```