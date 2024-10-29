//option 2 : using data loaded
import PropTypes from 'prop-types';
const jobLoader = async ({ params }) => {
   const res = await fetch(`/api/jobs/${params.id}`);
   const data = await res.json();
  return data;

};

jobLoader.propTypes = {
   deleteJob: PropTypes.any,
};
export default jobLoader