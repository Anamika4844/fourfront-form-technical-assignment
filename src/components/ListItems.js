function ListItems(props) {
  return (
    <li className="nav-item">
      <a className="nav-link active" aria-current="page">
        <i className={props.className} style={{ color: props.color }}></i>
      </a>
    </li>
  );
}

export default ListItems;
