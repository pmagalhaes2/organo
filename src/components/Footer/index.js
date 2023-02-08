import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <section>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank">
              <img src="/images/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              <img src="/images/tw.png" alt="" />
            </a>
          </li>{" "}
          <li>
            <a href="https://instagram.com/" target="_blank">
              <img src="/images/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt=""></img>
      </section>
      <section>
        <p>Desenvolvido por Patricia Magalhães.</p>
      </section>
    </footer>
  );
};
