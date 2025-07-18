// Import createContext from React.
// createContext is used to create a Context object.
import React from 'react';

// Create a new Context object.
// This object will contain a Provider and a Consumer.
// The default value (null in this case) is used when a component
// consumes the context but there is no matching Provider above it in the tree.
const UserContext = React.createContext(null);

// Export the UserContext so it can be imported and used by other components.
export default UserContext;
