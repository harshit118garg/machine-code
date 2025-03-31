import { useEffect, useState } from "react";
import './styles.css'

const API_URL = `https://restcountries.com/v3.1/name`;

export default function AutoComplete() {
  const [countryName, setCountryName] = useState("india");
  const [countries, setCountries] = useState<string[]>([]);
  const [showSuggestBox, setShowSuggestionBox] = useState(false);
  const [cache, setCache] = useState<{ [key: string]: string[] }>({});

  const fetchCountries = async () => {
    let query = countryName.trim().toLowerCase();
    if (!query) return setCountries([]);

    if (cache[query]) {
      console.log("from cache");
      setCountries(cache[query]);
      return;
    }
    try {
      console.log("api call");
      const apiData = await fetch(`${API_URL}/${query}`);
      if (!apiData.ok) {
        setCountries([]);
        return;
      }
      const resposne = await apiData.json();

      const list = resposne?.map(
        (c: { name: { official: any } }) => c.name.official
      );

      // console.log('list ', list);
      setCache((prevCache) => ({ ...prevCache, [query]: list }));
      setCountries(list);
    } catch (error) {
      console.log("unable to fetch data");
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetchCountries();
    }, 300);

    return () => clearTimeout(timeOut);
  }, [countryName]);

  return (
    <div className="container">
      <div className="auto-complete-input">
        <input
          type="text"
          name="countryName"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          onFocus={() => setShowSuggestionBox(true)}
          onBlur={() => setTimeout(() => setShowSuggestionBox(false), 300)}
        />
        {countryName && <span onClick={() => setCountryName("")}>X</span>}
      </div>
      {countryName && showSuggestBox && countries && (
        <div className="suggestion-box" onMouseDown={(e) => e.preventDefault()}>
          {countries.map((c, i) => {
            return (
              <div
                className="country-name"
                role="option"
                onClick={() => {
                  setCountryName(c);
                  setShowSuggestionBox(false);
                }}
                key={i}
              >
                {c}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
