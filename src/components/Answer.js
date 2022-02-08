export const Answer = (props) => {
  return (
    <>
      <li>
        {props.nick}: {props.answer} - likes 0
      </li>
      <button>Like</button>
    </>
  );
};
