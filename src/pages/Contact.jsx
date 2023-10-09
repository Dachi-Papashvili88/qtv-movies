import styled from "styled-components";
const Contact = () => {
  return (
    <Wrapper>
      <h5>კონტაქტი</h5>
      <h1>დაგვიკაშვირდით</h1>
      <p>
        ქრისტიანული ფილმების საიტი | საიტზე განთავსებული იქნება ქრისტიანული
        ფილმები
      </p>
      <div className="contact">
        <h2>მისამართი</h2>
        <p>ვ. ბოჭორიშვილის #37Bთბილისი, საქართველო</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Contact;
