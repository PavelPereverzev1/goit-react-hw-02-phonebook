import PropTypes from 'prop-types';
import { Container } from './Contact.styled';

const Contact = ({ id, name, number, handleDelete }) => {
  return (
    <Container>
      <span className="name">{name} :</span>
      <span className="number">{number}</span>
      <button
        id={id}
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </Container>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
