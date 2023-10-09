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
background-color: var(--clr-footer);
height: 100px;
color: #dce1de;
display: flex;
justify-content: center;
align-items: center;

`
export default Footer