export const Comment = (props) => {
  return (
    <>
      {/* creating a comment  */}
      <li>
        {props.nick}: {props.comment}
      </li>
    </>
  );
};
