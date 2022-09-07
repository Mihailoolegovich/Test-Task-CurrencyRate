import './Currency.css';
import { v4 as uuidv4 } from 'uuid';

export const Currency = props => {
  return (
    <div>
      <input
        className="platform_currency--input"
        value={props.inputValue}
        type="number"
        min={1}
        onChange={e => props.changeInput(e.currentTarget.value)}
      ></input>
      <select
        className="platform_currency--select"
        value={props.selectValue}
        id="have"
        name="size"
        onChange={e => props.selectChange(e.currentTarget.value)}
      >
        {props.currencyKeys.map(key => (
          <option
            key={uuidv4()}
            className="platform_currency--select__option"
            value={key}
          >
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};
