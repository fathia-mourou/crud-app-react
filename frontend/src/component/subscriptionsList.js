import React,{useContext,useMemo} from "react";
import { Table } from 'flowbite-react';
import { UserContext } from "../context/user";
function SubscriptionsList() {
    const {user,deleteSub} = useContext(UserContext)
    // console.log(user)
    const subs = useMemo(()=>{
        return user?.subscriptions || []
    },[user?.subscriptions])
    const handleClick = (e,id)=>{
        e.preventDefault()
        deleteSub(id)

    }
    return (
        <div class="mb-20 mt-20">
        <container justifyContent="center" alignItems="center">
            <Table>
                <Table.Head>
                    <Table.HeadCell> Subscription </Table.HeadCell>
                    <Table.HeadCell> Date </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Delete
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {subs.length > 0  && subs.map(sub=>{
                        return ( <Table.Row key={sub._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                             {sub.subscription.name}
                         </Table.Cell>
                         <Table.Cell>
                            {sub.startDate}
                         </Table.Cell>
                         <Table.Cell>
                             <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                 <p>
                                     Edit
                                 </p>
                             </a>
                         </Table.Cell>
                         <Table.Cell>
                             <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer" onClick={(e)=>handleClick(e,sub._id)}>
                                 <p>
                                     Delete
                                 </p>
                             </a>
                         </Table.Cell>
                     </Table.Row>)
                    })
                   }
                </Table.Body>
            </Table>
        </container>
        </div>
    );
}

export default SubscriptionsList;