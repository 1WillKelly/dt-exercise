import React from 'react';
import Styles from './index.module.scss';

const SuggestionsList = (props) => {
    const {
        suggestions,
        inputValue,
        onSelectSuggestion,
        displaySuggestions
    } = props;

    if (inputValue && displaySuggestions) {
        if (suggestions.length > 0) {
        return (
            <ul className={Styles['suggestions-list']}>
            {suggestions.map((suggestion, index) => {
                return (
                <li
                    key={index}
                    className={Styles.suggestion}
                    onClick={() => onSelectSuggestion(index)}
                >
                    {suggestion}
                </li>
                );
            })}
            </ul>
        );
        } else {
        return <div className={Styles['no-suggestions']}>No products match this search...</div>;
        }
    }
    return <></>;
};
const AutoComplete = () => {
    const [inputValue, setInputValue] = React.useState("");
    const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);
    const [displaySuggestions, setDisplaySuggestions] = React.useState(false);
  
    const suggestions = [
        "Women's Tree Dashers",
        "Women's Wool Runner Casual",
        "Women's Trail Runners SWT",
        "Men’s Wool Dasher Fluffs",
        "Women's Wool Runners",
        "Women's Wool Pipers",
        "Women's Tree Loungers",
        "Women's Wool Loungers",
        "Women's Wool Dasher Mizzles",
        "Women's Wool Lounger Fluffs",
        "Women's Wool Piper Mids",
        "Women's Tree Runners Casual",
    ];

    const onChange = event => {
        const value = event.target.value;
        setInputValue(value);

    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
    );

        setFilteredSuggestions(filteredSuggestions);
        setDisplaySuggestions(true);
    };

    const onSelectSuggestion = index => {
        setInputValue(filteredSuggestions[index]);
        setFilteredSuggestions([]);
        setDisplaySuggestions(false);
    };

    return (
        <div role="search" className={Styles['autocomplete-wrapper']}>
            <input
                className={Styles['searchbar-input']}
                type="search"
                placeholder="Search by product name..."
                onChange={onChange}
                value={inputValue}
            />
            <SuggestionsList
                inputValue={inputValue}
                onSelectSuggestion={onSelectSuggestion}
                displaySuggestions={displaySuggestions}
                suggestions={filteredSuggestions}
            />
        </div>
    );
};

export default AutoComplete;
