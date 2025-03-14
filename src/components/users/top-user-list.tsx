
import { User } from '@prisma/client';
import React from 'react'
import UserAvatar from '../UserAvatar';

type Props = {
    users: User[];
}

const TopUserList = ({users}: Props) => {
  return (
    <div className='flex w-full flex-col px-4'>
        <div className="pt-6">
            <h2 className='text-xl font-semibold'>Top Preformers</h2>
        </div>
        <ul className="flex flex-col gap-4 pt-10">
            {users.map((item)=>(
                <li className="flex items-center justify-start gap-3">
                    <UserAvatar avatarUrl={item.avatarUrl} className="flex-none" />
                        <div>
                            <p className="line-clamp-1 break-all font-semibold hover:underline">
                                {item.displayName}
                            </p>
                            <p className="line-clamp-1 break-all text-muted-foreground">
                                @{item.username}
                            </p>
                        </div>
                </li>
            ))}
        </ul>
       
    </div>
  )
}

export default TopUserList