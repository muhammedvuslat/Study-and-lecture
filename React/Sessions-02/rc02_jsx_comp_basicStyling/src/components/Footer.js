// Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
// JSX icerisinde degiskenler {} icerisinde gosterilir.
// Footer component

const Footer = () => {
  return <footer>Copyright by MVC {new Date().getFullYear()}</footer>;
};
export default Footer;
