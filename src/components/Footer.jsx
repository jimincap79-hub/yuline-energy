function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerLogoArea">
          <img
            src="/yullin-logo.png"
            alt="율린에너지 로고"
            className="footerLogo"
          />
        </div>

        <div className="footerAddress">
          <div className="footerIcon">📍</div>
          <div>
            <span>주소</span>
            <p>
              경기도 남양주시 다산지금로
              <br />
              16번길 43, 310호
            </p>
          </div>
        </div>

        <div className="footerInfoGrid">
          <div className="footerInfoItem">
            <div className="footerIcon">💼</div>
            <div>
              <span>사업자번호</span>
              <p>220-88-31352</p>
            </div>
          </div>

          <div className="footerInfoItem">
            <div className="footerIcon">☎</div>
            <div>
              <span>전화번호</span>
              <p>1566-3368</p>
            </div>
          </div>

          <div className="footerInfoItem">
            <div className="footerIcon">👤</div>
            <div>
              <span>대표자</span>
              <p>신명호</p>
            </div>
          </div>

          <div className="footerInfoItem">
            <div className="footerIcon">🖨</div>
            <div>
              <span>팩스번호</span>
              <p>031-566-3367</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;