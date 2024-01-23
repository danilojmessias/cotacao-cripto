import styles from "./footer.module.css";

export function Footer() {
  return (
    <div>
      <footer className={styles.container}>
        <hr />
        <p>
          <a href="github.com/danilojmessias">Feito por Danilo Messias</a>

          <a href="https://coinlib.io/apidocs">Powered by Coinlib API</a>
        </p>
      </footer>
    </div>
  );
}
