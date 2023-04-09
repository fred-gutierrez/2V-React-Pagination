export default function Pagination() {
  return (
    <nav className="pagination-container">
      <ul className="ul-container">
        <li>
          <button>
            &lt;
            {/* &lt; equals to < */}
          </button>
        </li>
        <li>
          <button>1</button>
        </li>
        <li>
          <button>
            &gt;
            {/* &gt; equals to > */}
          </button>
        </li>
      </ul>
    </nav>
  );
}
