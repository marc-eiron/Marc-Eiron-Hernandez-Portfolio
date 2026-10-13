function Footer({ name }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {year} {name}. Built with React.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
