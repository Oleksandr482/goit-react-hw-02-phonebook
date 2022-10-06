import PropTypes from 'prop-types';
import React from 'react';

export const ContactItem = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            type="button"
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
