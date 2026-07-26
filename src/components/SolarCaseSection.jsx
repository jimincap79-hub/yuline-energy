function SolarCaseSection() {
  return (
    <section id="solar" className="section cardSection">
      <h2>태양광 총 절감비용</h2>
      <p>빈 지붕을 수익 자산으로 전환하세요.</p>

<div className="imageGrid">
  <img src="/factory1.png" alt="공장 지붕 태양광 1" />
  <img src="/factory2.png" alt="공장 지붕 태양광 2" />
  <img src="/factory3.png" alt="공장 지붕 태양광 3" />
</div>

      <h3 className="tableTitle">자가소비 태양광 용량별 절감효과</h3>

      <table>
        <thead>
          <tr>
            <th>용량</th>
            <th>500kW</th>
            <th>1000kW</th>
            <th>2000kW</th>
            <th>3000kW</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>월평균절감</td>
            <td>1,210만원</td>
            <td>2,230만원</td>
            <td>4,120만원</td>
            <td>7,210만원</td>
          </tr>
          <tr>
            <td>연평균절감</td>
            <td>1억 4천만원</td>
            <td>2억 8천만원</td>
            <td>5억 6천만원</td>
            <td>8억 5천만원</td>
          </tr>
          <tr>
            <td>총 절감비용(20년)</td>
            <td>28억 3천만원</td>
            <td>56억 7천만원</td>
            <td>113억 5천만원</td>
            <td>170억 2천만원</td>
          </tr>
        </tbody>
      </table>

      <p className="note">
        ※ 상기 절감 효과는 일반적인 예상 수치이며, 실제와 다를 수 있습니다.
      </p>
    </section>
  );
}

export default SolarCaseSection;