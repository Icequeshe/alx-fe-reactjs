// Import the UserInfo component.
import UserInfo from './UserInfo';

// Define the ProfilePage functional component.
// It no longer receives userData as a prop.
function ProfilePage() {
  // This component now simply renders its child (UserInfo) directly.
  // UserInfo (and subsequently UserDetails) will get data from the Context.
  return (
    <div style={{ padding: '20px', border: '2px solid #007bff', borderRadius: '10px', margin: '20px auto', maxWidth: '500px' }}>
      <h2>User Profile Page</h2>
      <UserInfo />
    </div>
  );
}

// Export the ProfilePage component.
export default ProfilePage;
