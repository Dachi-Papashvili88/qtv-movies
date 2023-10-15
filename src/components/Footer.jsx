import styled from "styled-components"

const Footer = () => {
    return (
        <Wrapper>
        <div>
        <p>&copy; {new Date().getFullYear()} | ქრისტიანული ფილმები</p>
        </div>
        </Wrapper>
    )
}
const Wrapper = styled.div `
background-color: var(--clr-primary-lighter);
font-family: var(--lowercase-font);
height: 100px;
color: var(--be-text);
font-size: 0.9rem;
display: flex;
justify-content: center;
align-items: center;

`
export default Footer