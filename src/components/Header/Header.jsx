import './Header.css';
import PropTypes from 'prop-types';

export const Header = props => {
  return (
    <header>
      <ul className="header-container">
        <li className="header_currency">
          <h2 className="header_currency--name">EUR</h2>
          <p className="header_currency--course">{props.eurCurrency}</p>
        </li>
        <li className="header_currency">
          <h2 className="header_currency--name">USD</h2>
          <p className="header_currency--course">{props.usdCurrency}</p>
        </li>
      </ul>
    </header>
  );
};

Header.propTypes = {
  usdCurrency: PropTypes.number.isRequired,
  eurCurrency: PropTypes.number.isRequired,
};
