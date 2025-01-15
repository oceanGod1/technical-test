import PrimaryButton from "../../PrimaryButton/PrimaryButton";

export default function Visuals({ heading, amount }) {
  return (
    <div className="p-4 bg-white rounded-md">
      <h4 className="font-normal text-xs text-color5">{heading}</h4>
      <p className="text-secondary font-medium text-base">{amount}</p>
      <hr />
    </div>
  );
}
