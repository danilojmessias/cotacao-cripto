import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

import Loading from "../../components/loading";

interface CoinsProps {
  name: string;
  symbol: string;
  delta_24h: string;
  price: string;
  volume_24h: string;
  market_cap: string;
  formatedPrice: string;
  formatedMarket: string;
  numberDelta: number;
}

interface DataProps {
  coins: CoinsProps[];
}

export function Home() {
  const [coins, setCoins] = useState<CoinsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDataCoins() {
      fetch("https://sujeitoprogramador.com/api-cripto/?key=c48d7aacd451eafd")
        .then((response) => response.json())
        .then((data: DataProps) => {
          const sliceResult = data.coins.slice(0, 25);
          let price = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
          const formatResult = sliceResult.map((coins) => {
            const formated = {
              ...coins,
              formatedPrice: price.format(Number(coins.price)),
              formatedMarket: price.format(Number(coins.market_cap)),
              numberDelta: parseFloat(coins.delta_24h.replace(",", ".")),
            };
            return formated;
          });

          setCoins(formatResult);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    getDataCoins();
  }, []);

  if (loading) return <Loading />;

  return (
    <main className={styles.container}>
      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
          </tr>
        </thead>

        <tbody id="tbody">
          {coins.map( coin => (
            <tr key={coin.name} className={styles.tr}>
              <td className={styles.tdLabel} data-label="Moeda">
                <Link className={styles.link} to={`/detail/${coin.symbol}`}>
                  <span>{coin.name}</span> | {coin.symbol}
                </Link>
              </td>
              <td className={styles.tdLabel}  data-label="Mercado">
               {coin.formatedMarket}
              </td>
              <td className={styles.tdLabel} data-label="Preço">
                {coin.formatedPrice}
              </td>
              <td className={coin.numberDelta >= 0 ? styles.tdProfit : styles.tdLoss}  data-label="Volume">
                <span>{coin.delta_24h}</span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </main>
  );
}
