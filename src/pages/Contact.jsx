import styled from "styled-components";
const Contact = () => {
  return (
    <Wrapper>
      <div className="section">
        <h5>კონტაქტი</h5>
        <h1>დაგვიკაშვირდით</h1>
        <p>
          ქრისტიანული ფილმების საიტი | საიტზე განთავსებული იქნება მხოლოდ
          ქრისტიანული ფილმები
        </p>
      </div>
      <div className="contact-container">
        <div className="contact">
          <h2>მისამართი</h2>
          <p>ვ. ბოჭორიშვილის #37Bთბილისი, საქართველო</p>
        </div>
        <div className="contact">
          <h2>ელ.ფოსტა</h2>
          <p>info@qtv.ge</p>
          <p>www.qtv.ge@gmail.com</p>
        </div>
        <div className="contact">
          <h2>ტელეფონი</h2>
          <p>551 59 55 99</p>
          <p>551 59 55 99 (WhatsApp)</p>
        </div>
      </div>
      <div className="social-page">
        <h3>სოციალური გვერდები</h3>
        <p>facebook</p>
        <p>youtube</p>
        <p>instagram</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section {
    text-align: center;
  }
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    background-color: #ffffff;
    padding: 1em;
    border-radius: 5px;
    box-shadow: 0px 3px 10px 0px rgba(11, 11, 77, 0.14);
  }

  .contact:hover {
    box-shadow: 0px 2px 70px 0px rgba(11, 11, 77, 0.14);
  }

  @media (min-width: 768px) {
    .contact {
      width: 330px;
    }

    .contact-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 3em;
    }
  }
`;

export default Contact;
