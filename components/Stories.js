import faker from "faker";
import "tailwind-scrollbar";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div>
      {session && (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll scrollbar-thumb-black rounded-md">
          <Story img={session.user.image} username={session.user.username} />

          {suggestions.map((profile) => (
            <Story
              key={profile.id}
              img={`https://avatars.dicebear.com/api/micah/${session.user.username}.svg`}
              username={profile.username}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Stories;
