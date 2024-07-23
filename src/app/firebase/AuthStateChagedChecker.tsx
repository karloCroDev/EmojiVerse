// "use client";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase";
// import { useGlobalStore } from "../global-store";
// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";

// const AuthStateChagedChecker = () => {
//   const { push } = useRouter();
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUid(user.uid);
//         push("/main-page");
//       } else {
//       }
//     });

//     return () => unsub();
//   }, []);

//   const { setUid, uid } = useAuthStore((state) => state);
//   console.log(uid);
//   return null;
// };

// export default AuthStateChagedChecker;
