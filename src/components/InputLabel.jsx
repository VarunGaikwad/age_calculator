import PropTypes from "prop-types";

InputLabel.propTypes = {
  label: PropTypes.string,
  input: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  monthInput: PropTypes.string,
  yearInput: PropTypes.string,
};

export default function InputLabel({
  label,
  input,
  error,
  onChange,
  monthInput,
  yearInput,
}) {
  let flag = false;

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const isValidDay = (day, month, year) => {
    const daysInMonth = {
      1: 31,
      2: isLeapYear(year) ? 29 : 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };
    return day >= 1 && day <= daysInMonth[month];
  };

  if (error) {
    if (label === "Year") {
      flag =
        error &&
        (input.length !== 4 || Number(input) > new Date().getFullYear());
    } else if (label === "Month") {
      const month = Number(input || 0);
      flag = error && (month < 1 || month > 12);
    } else if (label === "Day") {
      flag =
        error &&
        !isValidDay(
          Number(input || 0),
          Number(monthInput || 0),
          Number(yearInput || 0)
        );
    } else {
      flag = error && input.length === 0;
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="uppercase">{label}</label>
      <input
        onChange={onChange}
        maxLength={label === "Year" ? 4 : 2}
        value={input}
        placeholder={label === "Day" ? "DD" : label === "Month" ? "MM" : "YYYY"}
        className={`w-20 md:w-40 p-4 rounded-lg outline-none ${
          flag ? "outline-primary-light-red" : "outline-neutral-light-grey"
        } focus:outline-primary-purple`}
      />
      <span
        className={`text-primary-light-red italic font-normal mb-10 text-xs ${
          flag ? "opacity-100" : "opacity-0"
        }`}
      >
        {label === "Day"
          ? "Must be a valid day"
          : label === "Month"
          ? "Must be a valid month"
          : "Must be in the past"}
      </span>
    </div>
  );
}
