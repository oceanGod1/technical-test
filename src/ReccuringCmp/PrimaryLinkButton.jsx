import LinkButton from "./LinkButton";

export default function PrimaryLinkButton({ content }) {
  return (
    <LinkButton
      content={content}
      classes="px-customP1 py-5 rounded-customRadius1 text-white text-lg text-nowrap font-medium bg-primary ${classes}"
    />
  );
}
