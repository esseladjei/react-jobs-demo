//option 2 : using data loaded
import PropTypes from 'prop-types';
import getApiUrl from '../../getApiUrl';
const jobLoader = async ({ params }) => {
   const res = await fetch(`${getApiUrl()}/jobs/${params.id}`);
   const data = await res.json();
   return data;
};

jobLoader.propTypes = {
   deleteJob: PropTypes.any,
};
export default jobLoader;
