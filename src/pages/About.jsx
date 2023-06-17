import React, { useState } from "react";
import { Navigate } from "react-router-dom";
export default function About() {
  const [user, setUser] = useState("mario");
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio pariatur
        provident iste dolorum ipsam commodi tempora dolore, voluptas qui itaque
        aspernatur incidunt repellat hic, modi deserunt. Repellat placeat odio
        dolorum.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio pariatur
        provident iste dolorum ipsam commodi tempora dolore, voluptas qui itaque
        aspernatur incidunt repellat hic, modi deserunt. Repellat placeat odio
        dolorum.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio pariatur
        provident iste dolorum ipsam commodi tempora dolore, voluptas qui itaque
        aspernatur incidunt repellat hic, modi deserunt. Repellat placeat odio
        dolorum.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
