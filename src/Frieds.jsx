import { use } from "react";
import Fried from "./Friend";

export default function Friends({friendsPromise}) {
    const friends = use(friendsPromise);
    console.log(friends)
    return (
        <div className="card">
            <h3>Friends {friends.length} </h3>
            {
                friends.map(friend => <Fried key={friend.id}  friend ={friend}>  </Fried> )
            }
        </div>
    )
}