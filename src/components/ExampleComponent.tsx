import React, { useState, useCallback } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface ExampleComponentProps {
  title: string;
  users: User[];
  onUserSelect: (user: User) => void;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ 
  title, 
  users, 
  onUserSelect 
}) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const handleUserClick = useCallback((user: User): void => {
    setSelectedUserId(user.id);
    onUserSelect(user);
  }, [onUserSelect]);

  const filteredUsers = users.filter((user: User): boolean => 
    user.name.toLowerCase().includes('a')
  );

  return (
    <div className="example-component">
      <h2>{title}</h2>
      <div className="users-list">
        {filteredUsers.map((user: User) => (
          <div 
            key={user.id}
            className={`user-item ${selectedUserId === user.id ? 'selected' : ''}`}
            onClick={(): void => handleUserClick(user)}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleComponent; 