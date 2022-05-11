import { useEffect, useState } from "react";

export function Parcial() {
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchContacts() {
      const contactsRaw = await fetch("http://localhost:8000/parcial");
      setContacts((await (contactsRaw as any).json()).contacts);
    }

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Seus contatos</h1>
      <h2>Contatos:</h2>
      <ul>
        {contacts.map((contact) => (
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
