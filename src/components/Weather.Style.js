import styled from "styled-components";
import Background from "./weather.png";

export const WeatherContainer = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 62% 1fr;
`;

export const DataResult = styled.div`
  position: relative;
  background: url(${Background}) no-repeat center/cover;
  object-fit: cover;

  .meta-data {
    position: absolute;
    top: 550px;
    left: 30px;
    h2 {
      color: black;
      font-size: 3rem;
    }

    .location-name {
      font-size: 1rem;
      color: inherit;
      font-weight: 500;
      margin-left: 0.4rem;
    }
  }
`;

export const InputContainer = styled.section`
  background: #be93c5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #7bc6cc,
    #be93c5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #7bc6cc,
    #be93c5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const SearchField = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px 0 20px;
  .input {
    height: 40px;
    border: none;
    width: 430px;
    border-radius: 5px;
  }

  .input::-webkit-input-placeholder {
    padding-left: 6px;
  }

  .search-btn {
    width: 100px;
    padding: 0.6rem;
    background-color: #5cd2fb;
    margin-left: 0.5rem;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
`;

export const ResultContainer = styled.div`
  h3 {
    color: #fff;
    margin: 5px 20px;
  }

  // bare minimuu styles
`;

export const Result = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 10px 30px 10px 10px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  cursor: pointer;
  margin: 5px 20px;

  background-color: #fff;

  .result__name {
    color: #979cb0;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.64px;
    margin-left: 12px;
  }

  .result__value {
    color: #35d8ac;
    font-weight: 900;
    font-size: 18px;
    text-align: right;

    & > span {
      opacity: 0.8;
      font-weight: 600;
      font-size: 12px;
      margin-left: 3px;
    }
  }
`;
