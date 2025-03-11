import "./index.css";

const UserProfile = (props) => {
  const { userDetails, deleteUser } = props;
  const { imageUrl, name, role, uniqueNo } = userDetails;

  const onDelete = () => {
    deleteUser(uniqueNo);
  };

  return (
    <li className="profile-card">
      <img src={imageUrl} className="profile-image" />
      <div className="user-details-info">
        <h1 className="user-heading">{name}</h1>
        <p className="user-info">{role}</p>
      </div>
      <button onClick={onDelete}>
        <img
          src="https://techcult.com/wp-content/uploads/2023/01/cross-symbol-on-facebook.png"
          className="cross-image"
          alt="cross"
        />
      </button>
    </li>
  );
};
export default UserProfile;
