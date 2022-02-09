export const Comment = (props) => {
  return (
    <>
      <li>
        {props.nick}: {props.comment}
      </li>
    </>
  );
};
