import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onNewFriend }) {
  const [friendName, setFriendName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48"); //attach id to the image to get everytime the same image

  const id = crypto.randomUUID(); //its generating a random ids right in the browser

  function handleSubmit(e) {
    e.preventDefault();
    if (!friendName || !image) return;
    const newFriend = {
      name: friendName,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };
    onNewFriend(newFriend);
    setFriendName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type="text"
        placeholder="Enter friend name"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />

      <label>Image URL</label>
      <input
        type="text"
        placeholder="http://pravatar.cc/48"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
