import React, { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  plan: 'free' | 'pro' | 'business'
  subscription?: {
    status: 'active' | 'inactive' | 'trial'
    nextBilling?: string
    amount?: string
  }
}

interface UserContextType {
  user: User | null
  isAuthenticated: boolean
  login: (userData: User) => void
  logout: () => void
  updateUser: (updates: Partial<User>) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = (userData: User) => {
    try {
      // Validate required fields
      if (!userData.id || !userData.email || !userData.name) {
        throw new Error('Invalid user data: missing required fields')
      }
      
      setUser(userData)
      setIsAuthenticated(true)
      localStorage.setItem('cursor_user', JSON.stringify(userData))
    } catch (error) {
      console.error('Error during login:', error)
      throw error
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('cursor_user')
  }

  const updateUser = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates }
      setUser(updatedUser)
      localStorage.setItem('cursor_user', JSON.stringify(updatedUser))
    }
  }

  // Check for existing user on mount
  React.useEffect(() => {
    try {
      const savedUser = localStorage.getItem('cursor_user')
      if (savedUser) {
        const userData = JSON.parse(savedUser)
        // Validate user data structure
        if (userData && userData.id && userData.email) {
          setUser(userData)
          setIsAuthenticated(true)
        } else {
          // Invalid user data, clear it
          localStorage.removeItem('cursor_user')
        }
      }
    } catch (error) {
      console.error('Error loading user data:', error)
      localStorage.removeItem('cursor_user')
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, isAuthenticated, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext