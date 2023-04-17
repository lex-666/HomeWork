const axios = require('axios');
const binanceUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
const coinbaseUrl = 'https://api.coinbase.com/v2/prices/BTC-USD/spot';
const krakenUrl = 'https://api.kraken.com/0/public/Ticker?pair=XBTUSD';

async function getPrices() {
  try {
    const [binanceResponse, coinbaseResponse, krakenResponse] = await Promise.all([
      axios.get(binanceUrl),
      axios.get(coinbaseUrl),
      axios.get(krakenUrl)
    ]);
    const binancePrice = binanceResponse.data.price;
    const coinbasePrice = coinbaseResponse.data.data.amount;
    const krakenPrice = krakenResponse.data.result.XXBTZUSD.c[0];
    console.log(`Binance BTC/USDT: ${binancePrice}`);
    console.log(`Coinbase BTC/USD: ${coinbasePrice}`);
    console.log(`Kraken BTC/USD: ${krakenPrice}`);
  } catch (error) {
    console.error(error);
  }
}

setInterval(getPrices, 30000); // обновлять данные каждые 30 секунд

