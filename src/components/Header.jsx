function Header() {
  return (
    <header className="header">
      <a href="#home" className="headerLogo">
        <img
          src="/yullin-logo.png"
          alt="율린에너지"
          className="headerLogoImage"
        />
      </a>

      <nav className="navMenu" aria-label="주요 메뉴">
        <a href="#home">홈</a>
        <a href="#benefits">지원혜택</a>
        <a href="#management">자산관리</a>
        <a href="#projects">시공사례</a>
        <a href="#contact" className="contactMenu">
          문의하기
        </a>
      </nav>
    </header>
  );
}

export default Header;