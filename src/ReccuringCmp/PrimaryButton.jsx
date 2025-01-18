import GenericButton from "./GenericButton";

export default function PrimaryButton({ content }) {
  return (
    <GenericButton
      content={content}
      classes="px-customP1 py-5 rounded-customRadius1 text-white text-lg font-medium bg-primary"
    />
  );
}
