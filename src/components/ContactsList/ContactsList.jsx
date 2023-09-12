import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { Container } from './ContactsList.styled';

const ContactsList = ({ contacts, handleDelete }) => {
  return (
    <Container>
      {contacts.map(item => {
        return <Contact {...item} key={item.id} handleDelete={handleDelete} />;
      })}
    </Container>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
