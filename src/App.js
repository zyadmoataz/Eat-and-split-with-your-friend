import Friends from "./Friends";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showFriend, setShowFriend] = useState(false);
  const [friend, setFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowFriend() {
    setShowFriend((show) => !show);
  }

  function handleNewFriend(friend) {
    setFriend((f) => [...f, friend]);
    setShowFriend(false); //close add form after adding 1 friend
  }

  function handleSelection(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend)); //optional chaning cause when it will be null
    setShowFriend(false); //to close th add friend form when we open this form
  }

  function handleSplitBill(value) {
    setFriend((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null); //to close form after we submit
  }
  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friend={friend}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showFriend && <FormAddFriend onNewFriend={handleNewFriend} />}

        <Button onClick={handleShowFriend}>
          {showFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
