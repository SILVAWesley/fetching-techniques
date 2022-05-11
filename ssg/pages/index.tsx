export default function Parcial({ contacts }: any) {
  return (
    <div>
      <h1>Seus contatos</h1>
      <h2>Contatos:</h2>
      <ul>
        {contacts.map((contact: any) => (
          <li key={contact.name}>
            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
            <p>{contact.company}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const contactsRaw = await fetch("http://localhost:8000/parcial");
  const contacts = (await (contactsRaw as any).json()).contacts;

  console.log("Executou a função parcial");

  return {
    props: {
      contacts,
    },
    revalidate: 60,
  };
}
