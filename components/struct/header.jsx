import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from "next/link"
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

const Header = () => {
  return (
    <header className=' top-0 w-full bg-blend-lighten border-b border-gray-800  flex justify-between h-20 items-center p-6'>
        <nav>
            <Link href="/">
            <Image  src='/logo2.jpg'  alt='Ai logo' width={140} height={60} className='h-12 m-4 w-auto object-contain rounded-xl ' />
            </Link>

            </nav>
            <div className='flex items-center   space-x-2 md:space-x-4 '>
              <SignedIn>
                <Link href="/insights">
                <Button className='bg-blue-300  ' variant="outline" >
                  <LayoutDashboard className='h-4 w-4'/>  <span className=' hidden md:block'>Industry Insights</span>
                </Button>
                </Link>
              

              <DropdownMenu>
              <DropdownMenuTrigger>
                <Button className='bg-blue-300' >
                  <StarsIcon className='h-4 w-4 '/>  <span className=' hidden md:block'>Growth Tools</span>
                  <ChevronDown className='h-4 w-4'/>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                
                <DropdownMenuItem>
                  <Link href="/resume" className='flex items-center gap-2'>
                  <Button className="w-full">
                    <FileText className='h-4 w-4'/><span>Build Resume</span>
                  </Button>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem>
                  <Link href="/cover" className='flex items-center gap-2'>
                  <Button className="w-full">
                    <PenBox /><span className='h-4 w-full'>Cover Letter     </span>
                  </Button>
                  </Link>
                </DropdownMenuItem>
                
                <DropdownMenuItem>
                  <Link href="/interview" className='flex items-center gap-2'>
                  <Button className="w-full">
                    <GraduationCap className='h-4 w-14'/><span>Interview Prep</span>
                  </Button>
                  </Link>
                </DropdownMenuItem>
                
              </DropdownMenuContent>
            </DropdownMenu>
            </SignedIn>
         
          <SignedOut>
            <SignInButton>
              <Button  mode="modal" variant="outline">Sign In</Button>
              
            </SignInButton>
         </SignedOut>
         <SignedIn> 
           <UserButton    
                appearance={{
                  elements:{
                    avatarBox:'h-10 w-10',
                    userButtonPopoverCard: 'shadow-xl',
                    userPreviewMainIdentifier: 'font-semibold',
                  }
            }}
            afterSignOutUrl="/"
            />
         </SignedIn>
          
          </div>
    </header>
  )
}

export default Header