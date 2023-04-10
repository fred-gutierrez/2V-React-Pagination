interface Props {
  totalSkills: number;
  skillsPerPage: number;
  setCurrentPage: any;
  currentPage: number;
}

export default function Pagination({
  totalSkills,
  skillsPerPage,
  setCurrentPage,
  currentPage,
}: Props) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalSkills / skillsPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav className="pagination-container">
      <ul className="ul-container">
        <li>
          <button
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            &lt;
            {/* &lt; equals to < */}
          </button>
        </li>
        {pages.map((page, index) => (
          <li key={index}>
            <button onClick={() => setCurrentPage(page)}>{page}</button>
          </li>
        ))}
        <li>
          <button
            onClick={() =>
              currentPage < Math.ceil(totalSkills / skillsPerPage) &&
              setCurrentPage(currentPage + 1)
            }
          >
            &gt;
            {/* &gt; equals to > */}
          </button>
        </li>
      </ul>
    </nav>
  );
}
