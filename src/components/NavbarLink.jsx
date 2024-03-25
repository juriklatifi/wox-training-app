function NavbarLink({ href, title, active }) {
  
    return (
      <li className="nav-item">
        <a className={`nav-link ${active ? 'active' : ''}`} href={href}>
          {title}
        </a>
      </li>
    );
  }