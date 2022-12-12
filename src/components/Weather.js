import axios from "axios";
import React, { useState } from "react";
import ResultCard from "./ResultCard";
import {
  WeatherContainer,
  DataResult,
  InputContainer,
  SearchField,
  ResultContainer,
  Result,
} from "./Weather.Style";

function Weather() {
  const [city, setCity] = useState("");
  const [responseData, setResponseData] = useState("");
  const [loading, setLoading] = useState(false);

  const handelSubmit = async () => {
    setLoading(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const {
      data: { data },
    } = await axios.post(`http://localhost:5000/api/weather`, { city }, config);

    setResponseData(data);
    setLoading(false);
  };

  console.log(city);
  return (
    <WeatherContainer>
      <DataResult>
        <div className="meta-data">
          {loading ? (
            <h2>
              <span> &#176;</span> C <span className="location-name"></span>
            </h2>
          ) : (
            <>
              {responseData ? (
                <>
                  <h2>
                    <span> {responseData.main.temp} &#176; C</span>{" "}
                    <span className="location-name">
                      in {responseData.name}
                    </span>
                  </h2>
                </>
              ) : (
                <h2>
                  <span> &#176; C</span> <span className="location-name"></span>
                </h2>
              )}
            </>
          )}
        </div>
      </DataResult>

      <InputContainer>
        <ResultContainer>
          <h3>Realtime Weather Tracker</h3>
          <SearchField>
            <input
              type="text"
              placeholder="Enter City Name"
              className="input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="search-btn" onClick={handelSubmit}>
              Search
            </button>
          </SearchField>

          <h3>Weather Details</h3>

          {loading ? (
            <Result className="result__profile">
              <span className="result__name">Loading </span>
            </Result>
          ) : (
            <>
              {responseData ? (
                <>
                  <ResultCard label="City" data={responseData.name} />

                  <ResultCard
                    label="Current Temperature"
                    data={responseData.main.temp}
                    unit="C"
                  />
                  <ResultCard
                    label="Maximum Recorded"
                    data={responseData.main.temp_max}
                    unit="C"
                  />
                  <ResultCard
                    label="Minimum Recorded"
                    data={responseData.main.temp_min}
                    unit="C"
                  />
                  <ResultCard
                    label="Wind Speed"
                    data={responseData.wind.speed}
                    unit="Km/h"
                  />
                </>
              ) : (
                <Result className="result__profile">
                  <span className="result__name">
                    Please Enter a Valid City Name{" "}
                  </span>
                </Result>
              )}
            </>
          )}
        </ResultContainer>
      </InputContainer>
    </WeatherContainer>
  );
}

export default Weather;
