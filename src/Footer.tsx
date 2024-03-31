/**
 * Footer that displays the current year + link to portfolio.
 *
 * App -> Footer
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-primarytext z-12 mt-24 border-t p-2 flex justify-center">
      <small>
        Justin Clark © {currentYear} | Built by{" "}
        <a href="https://justinclark.bio">Justin Clark</a>
      </small>
    </div>
  );
};

export default Footer;
