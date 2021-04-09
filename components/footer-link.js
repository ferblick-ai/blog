export default function FooterLink({ text, link }) {
  return (
    <a
      href={link}
      className="mx-3 font-bold hover:underline">
      {text}
    </a>
  )
}
