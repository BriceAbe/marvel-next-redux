import Link from "next/link";
const Joueurs = ({ name, key }) => {
  return (
    <Link href="/joueurs/[name]" as={`/joueurs/${name}`}>
      <li key={key}>{name}</li>
    </Link>
  );
};

export default Joueurs;
