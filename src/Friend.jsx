 export default function Fried({friend}) {
  console.log(friend);
  const {name , email, id, phone} = friend;


    return (

 <div>
    <h4 className="card">Name:{name} </h4>
    <p> Email {email} </p>
    <p> ID: {id}</p>
    <p> Phone: {phone} </p>
 </div>

    )
}