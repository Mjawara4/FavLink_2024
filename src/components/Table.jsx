import PropTypes from 'prop-types';

function Table({ links }) {
    const rows = links.map((data, index) => (
        <tr key={index}>
            <td>{data.name}</td>
            <td><a href={data.URL} target="_blank" rel="noopener noreferrer">{data.URL}</a></td>
        </tr>
    ))
    
    return (
      <table>
        <thead>
          <tr>
            <th>Link Name</th>
            <th>Link URL</th>
          </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </table>
    )
}

Table.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
  })).isRequired,
};

export default Table