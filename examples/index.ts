import { TonPlayClient } from "ton-play-sdk";
import { examples } from "./examples";
import dotenv from 'dotenv';
import { BuyItemRequestDTO } from "ton-play-sdk/dist/Models";
dotenv.config();

const xAuthTonplay = process.env.X_AUTH_TONPLAY?.toString();
if (!xAuthTonplay) throw new Error('Please check if .env file exists and has valid data');
const gameKey = xAuthTonplay.split(':')[0];

const buyerAddress = process.env.BUYER?.toString();
if (!buyerAddress) throw new Error('Please check if .env file exists and has valid data');

const buyAmount = 1;

const tonPlay = new TonPlayClient(xAuthTonplay);

tonPlay.getSalesByGame(gameKey).then(items => {
    console.log('Currently there are ' + items.length + ' items on sale.');
    return items.length > 0 ? items[0] : Promise.reject('There is nothing on sale now');
}).then(itemOnSale => tonPlay.buy(new BuyItemRequestDTO({
    type: itemOnSale.type,
    address: itemOnSale.address,
    sellerAddress: itemOnSale.seller!.address!,
    amount: buyAmount,
    buyerAddress: buyerAddress,
}))).then(response => console.log('Link to buy: ' + response.url)).catch(r => console.log('Error: ' + r));

examples(tonPlay).catch(r => console.log('### EXAMPLES failed: ' + JSON.stringify(r)));