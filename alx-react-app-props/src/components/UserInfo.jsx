// Import the UserDetails component.
import UserDetails from './UserDetails';

// Define the UserInfo functional component.
// It no longer receives userData as a prop.
function UserInfo() {
  // This component now simply renders its child (UserDetails) directly.
  // UserDetails will get its data from the Context directly.
  return (
    <div style={{ padding: '10px', border: '1px dashed #ccc', margin: '10px 0' }}>
      <h4>User Information Wrapper</h4>
      <UserDetails />
    </div>
  );
}

// Export the UserInfo component.
export default UserInfo;