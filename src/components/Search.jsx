import styled from "styled-components";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleIconClick = () => {
    setIsEditing(true);
  };

  const handleSearchInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <SearchWrapper>
      {isEditing ? (
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onBlur={handleSearchInputBlur}
          autoFocus
        />
      ) : (
        <SearchIcon onClick={handleIconClick} />
      )}
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  @media (max-width: 758px) {
    margin-top: 15px;
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
    border: none;
  }
`;

const SearchInput = styled.input`
  border: none;
  padding: 5px;
  font-size: 1rem;
  width: 40px;
`;

const SearchIcon = styled(AiOutlineSearch)`
  cursor: pointer;

  :hover {
    color: var(--clr-active);
  }
`;
