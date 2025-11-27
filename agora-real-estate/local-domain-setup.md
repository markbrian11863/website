# Setting Up Custom Local Domain for Mark Brian Real Estate

## Quick Setup for Local Domain

Since domain names cannot contain spaces, here are your options:

### Option 1: Local Domain (Free - Development Only)
- `markbriankongoli.local`
- `mark-brian-kongoli.local`
- `markbrian-kongoli.local`

### Option 2: Real Domain (Paid - Live Website)
- `markbriankongoli.com`
- `mark-brian-kongoli.com`
- `markbriankongoli.co.ke` (Kenya domain)

## For Local Development:

1. **Add to hosts file** (requires admin access):
   ```
   sudo nano /etc/hosts
   ```
   Add this line:
   ```
   192.168.43.199 markbriankongoli.local
   ```

2. **Then access via:**
   - `http://markbriankongoli.local:3002`

## For Live Website (Real Domain):

1. **Buy domain** from providers like:
   - Namecheap, GoDaddy, or Domain.co.ke (for Kenya)
   
2. **Deploy website** to hosting service:
   - Netlify (free)
   - Vercel (free)
   - HostGator, etc.

3. **Point domain** to hosting service

Which option would you prefer?