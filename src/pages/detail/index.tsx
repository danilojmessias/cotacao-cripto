import { useEffect, useState } from "react";
import styles from "./detail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/loading";

interface CoinProp {
  symbol: string;
  name: string;
  price: string;
  market_cap: string;
  low_24h: string;
  high_24h: string;
  total_volume: string;
  delta_24h: string;
  formatedPrice: string;
  formatedMarket: string;
  formatedLowprice: string;
  formatedHighprice: string;
  numberDelta: number;
  error?: string;
}
export function Detail() {
  const { cripto } = useParams();
  const [detail, setDetail] = useState<CoinProp>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    function getDataCoinDetail() {
      fetch(
        `https://sujeitoprogramador.com/api-cripto/coin/?key=c48d7aacd451eafd&symbol=${cripto}`
      )
        .then((response) => response.json())
        .then((data: CoinProp) => {
          if (data.error) {
            navigate("/error");
          }
          let price = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
          const resultData = {
            ...data,
            formatedPrice: price.format(Number(data.price)),
            formatedMarket: price.format(Number(data.market_cap)),
            formatedLowprice: price.format(Number(data.low_24h)),
            formatedHighprice: price.format(Number(data.high_24h)),
            numberDelta: parseFloat(data.delta_24h.replace(",", ".")),
          };
          setDetail(resultData);
          setLoading(false);
        })
        .catch(() => {
          navigate("/nocoin");
        });
    }
    getDataCoinDetail();
  }, [cripto]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.center}>{detail?.name} </h2>
      <p className={styles.center}>{detail?.symbol}</p>
      <section className={styles.content}>
        <p>
          <strong>Preço: </strong> {detail?.formatedPrice}
        </p>
        <p>
          <strong>Maior Preço 24h: </strong> {detail?.formatedHighprice}
        </p>
        <p>
          <strong>Menor Preço 24h: </strong> {detail?.formatedLowprice}
        </p>
        <p>
          <strong>Delta 24h: </strong>{" "}
          <span
            className={
              detail?.numberDelta && detail?.numberDelta >= 0
                ? styles.profit
                : styles.loss
            }
          >
            {detail?.delta_24h}
          </span>
        </p>
        <p>
          <strong>Valor Mercado: </strong> {detail?.formatedMarket}
        </p>
      </section>
    </div>
  );
}
