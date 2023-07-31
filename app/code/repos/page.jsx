
async function fetchRepos() {
  const response = await fetch('https://odin-strapi-backend.onrender.com/api/posts');
  const repos = await response.json();
  return repos;
};

const ReposPage = async () => {
  const repos = await fetchRepos();
  return  <div className="container">
    <div>{ repos.data.length }</div>
    <ul>
      {repos.data.map((repo) => (
        <li key={repo.attributes.Title}>

            <h4>{ repo.attributes.Title }</h4>
            <p>{ repo.attributes.Detail }</p>

        </li>
      ))}
    </ul>
  </div>
};

export default ReposPage
