import ListOfFriends from "./ListOfFriends";

export default function Friends({ friend, onSelection, selectedFriend }) {
  return (
    <ul className="sidebar ul">
      {friend.map((friend) => (
        <ListOfFriends
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
