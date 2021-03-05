
function parse(response) {
  if (response.ok) {
    return response.json();
  }

  return {};
}

export default parse;
