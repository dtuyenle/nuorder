const searchIssues = async(searchTerm) => {
  const url = `https://api.github.com/search/issues?q=${searchTerm}+in:title+repo:facebook/react&per_page=20`;
  let issues = [];
  try {
    const data = await fetch(url);
    const jsonData = await data.json();
    issues = jsonData.items;
  } catch (err) {
    console.error(err);
  }
  return issues;
};

export default searchIssues;
