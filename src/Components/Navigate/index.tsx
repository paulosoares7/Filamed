import { useState } from 'react';
import './styles.css'


export function Navigate() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a onClick={toggleMenu} href="#informacoes">Sobre</a></li>
        <li><a onClick={toggleMenu} href="#mapa">Hospitais</a></li>
        <li><a onClick={toggleMenu} href="#servicos">Serviços</a></li>
        <li><a onClick={toggleMenu} href="#faqs">FAQs</a></li>
        <li><a onClick={toggleMenu} href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}
