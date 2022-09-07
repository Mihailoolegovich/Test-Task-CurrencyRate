import './Header.css';

export const Header = ({ usdCurrency, eurCurrency }) => {
  return (
    <>
      <header>
        <ul className="header-container">
          <li className="header_currency">
            <h2 className="header_currency--name">EUR</h2>
            <span className="header_currency--course">{eurCurrency}</span>
          </li>
          <li className="header_currency">
            <h2 className="header_currency--name">USD</h2>
            <span className="header_currency--course">{usdCurrency}</span>
          </li>
        </ul>
      </header>
    </>
  );
};
