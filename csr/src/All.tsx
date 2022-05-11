import { useEffect, useState } from "react";

export function All() {
  const [contacts, setContacts] = useState<any[] | null>(null);

  useEffect(() => {
    async function fetchContacts() {
      const contactsRaw = await fetch("http://localhost:8000/all");
      setContacts((await (contactsRaw as any).json()).contacts);
    }

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Seus contatos</h1>
      <h2>Contatos:</h2>
      {contacts && (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.name}>
              <h3>{contact.name}</h3>
              <p>{contact.phone}</p>
              <p>{contact.company}</p>
            </li>
          ))}
        </ul>
      )}

      {!contacts && <h4>Carregando...</h4>}
    </div>
  );
}
