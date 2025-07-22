function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '8px' }}>{props.name}</h2>
      <p style={{ margin: '4px 0' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ margin: '4px 0' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
