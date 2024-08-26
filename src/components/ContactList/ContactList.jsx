import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";

import { getContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector(getContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
