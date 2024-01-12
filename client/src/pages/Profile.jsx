import React, { useEffect, useCallback } from "react";

function Profile() {
  const url = "https://srijan2024.onrender.com/api/getUser";
  const fetchUser = useCallback(async () => {
    await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage["token"]}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data);
        // console.log(ans);
        // console.log(res.json());
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return <div>Profile</div>;
}

export default Profile;
