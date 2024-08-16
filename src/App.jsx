import { useState } from "react";
import InputLabel from "./components/InputLabel";
import ResultLabel from "./components/ResultLabel";

export default function App() {
  const [userInput, setUserInput] = useState({
      date: "",
      month: "",
      year: "",
    }),
    [resultOutput, setResultOutput] = useState({
      days: "--",
      months: "--",
      years: "--",
    }),
    [error, setError] = useState(false),
    onSubmitClick = () => {
      setError(true);
      setResultOutput({ days: "--", months: "--", years: "--" });
      const { date, month, year } = userInput;
      if (date && month && year) {
        const result = onCalculateAge(new Date(year, month - 1, date));
        setResultOutput({ ...result });
        setError(false);
      }
    },
    onCalculateAge = (birthDate, referenceDate = new Date()) => {
      birthDate = new Date(birthDate);

      let years = referenceDate.getFullYear() - birthDate.getFullYear();
      let months = referenceDate.getMonth() - birthDate.getMonth();
      let days = referenceDate.getDate() - birthDate.getDate();

      // Adjust for negative days
      if (days < 0) {
        months--; // Borrow a month
        const previousMonth = new Date(
          referenceDate.getFullYear(),
          referenceDate.getMonth(),
          0
        ).getDate();
        days += previousMonth;
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      return { years, months, days };
    };

  return (
    <div className="grid place-content-center h-screen p-5">
      <div className="bg-neutral-off-white p-10 rounded-2xl rounded-br-12xl">
        <div className="flex gap-4">
          <InputLabel
            label="Day"
            input={userInput.date}
            monthInput={userInput.month}
            yearInput={userInput.year}
            onChange={(e) => {
              setUserInput({
                ...userInput,
                date: e.target.value.replace(/\D/g, ""),
              });
              setError(false);
            }}
            error={error}
          />
          <InputLabel
            onChange={(e) => {
              setUserInput({
                ...userInput,
                month: e.target.value.replace(/\D/g, ""),
              });
              setError(false);
            }}
            label="Month"
            input={userInput.month}
            error={error}
          />
          <InputLabel
            onChange={(e) => {
              setUserInput({
                ...userInput,
                year: e.target.value.replace(/\D/g, ""),
              });
              setError(false);
            }}
            label="Year"
            input={userInput.year}
            error={error}
          />
        </div>
        <div className="mt-2 flex relative">
          <span className="flex-1 h-[0.005rem] w-full bg-neutral-smokey-grey rounded-full" />
          <img
            className="arrow_icon"
            src="./icon-arrow.svg"
            alt=""
            onClick={onSubmitClick}
          />
        </div>
        <div className="mt-14">
          <ResultLabel label={"years"} value={resultOutput.years} />
          <ResultLabel label={"months"} value={resultOutput.months} />
          <ResultLabel label={"days"} value={resultOutput.days} />
        </div>
      </div>
      <footer className="fixed p-2 bottom-0 left-0 right-0 text-base font-medium">
        <p className="text-center text-neutral-smokey-grey">
          Challenge by{" "}
          <a
            className="text-neutral-off-black hover:text-primary-purple"
            href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q/hub"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="text-neutral-off-black hover:text-primary-purple"
            href="https://www.frontendmentor.io/profile/VarunGaikwad"
          >
            @VarunGaikwad
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
