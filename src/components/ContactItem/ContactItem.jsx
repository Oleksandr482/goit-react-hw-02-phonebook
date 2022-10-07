import { Btn, ListItem, P } from 'components/App.styled';
import PropTypes from 'prop-types';
import React from 'react';

export const ContactItem = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <P>
            {contact.name}: {contact.number}
          </P>
          <Btn
            type="button"
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            Delete
          </Btn>
        </ListItem>
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
