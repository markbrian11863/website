// Mock authentication service - replace with real backend integration

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupData {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface User {
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

// Mock user database
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    plan: 'pro',
    subscription: {
      status: 'active',
      nextBilling: '2024-02-15',
      amount: '$1.00'
    }
  }
]

export const authService = {
  // Mock login function
  async login(credentials: LoginCredentials): Promise<{ user: User; token: string }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find(u => u.email === credentials.email)
        if (user && credentials.password === 'password') {
          resolve({
            user,
            token: 'mock-jwt-token'
          })
        } else {
          reject(new Error('Invalid email or password'))
        }
      }, 1000) // Simulate network delay
    })
  },

  // Mock signup function
  async signup(data: SignupData): Promise<{ user: User; token: string }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if user already exists
        const existingUser = mockUsers.find(u => u.email === data.email)
        if (existingUser) {
          reject(new Error('User with this email already exists'))
          return
        }

        // Create new user
        const newUser: User = {
          id: String(Date.now()),
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          plan: 'free',
          subscription: {
            status: 'trial',
            nextBilling: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            amount: 'Free Trial'
          }
        }

        mockUsers.push(newUser)
        resolve({
          user: newUser,
          token: 'mock-jwt-token'
        })
      }, 1000)
    })
  },

  // Mock social login functions
  async loginWithGoogle(): Promise<{ user: User; token: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user: User = {
          id: 'google-' + Date.now(),
          name: 'Google User',
          email: 'user@gmail.com',
          avatar: 'https://ui-avatars.com/api/?name=Google+User&background=ff6b6b&color=fff',
          plan: 'free',
          subscription: {
            status: 'trial'
          }
        }
        resolve({ user, token: 'mock-google-token' })
      }, 1000)
    })
  },

  async loginWithGitHub(): Promise<{ user: User; token: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user: User = {
          id: 'github-' + Date.now(),
          name: 'GitHub User',
          email: 'user@github.com',
          avatar: 'https://ui-avatars.com/api/?name=GitHub+User&background=333&color=fff',
          plan: 'free',
          subscription: {
            status: 'trial'
          }
        }
        resolve({ user, token: 'mock-github-token' })
      }, 1000)
    })
  },

  // Mock password reset
  async resetPassword(email: string): Promise<{ message: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'Password reset email sent' })
      }, 1000)
    })
  },

  // Mock token validation
  async validateToken(token: string): Promise<User | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (token === 'mock-jwt-token') {
          resolve(mockUsers[0])
        } else {
          resolve(null)
        }
      }, 500)
    })
  }
}

export default authService