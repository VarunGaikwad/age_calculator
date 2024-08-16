import PropTypes from "prop-types";

ResultLabel.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
};

export default function ResultLabel({ value, label }) {
  return (
    <div className="font-bold text-5xl md:text-7xl italic my-2">
      <span className="text-primary-purple">{value}</span> <span>{label}</span>
    </div>
  );
}
