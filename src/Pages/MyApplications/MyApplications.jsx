import React, { Suspense } from "react";
import MyApplicationStats from "./MyApplicationStats";
import MyApplicationList from "./MyApplicationList";
import useAuth from "../../Hooks/useAuth";
import { myApplicationPromise } from "./../../api/myappplicationsApi";

const MyApplications = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <MyApplicationStats></MyApplicationStats>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <MyApplicationList
          myApplicationPromise={myApplicationPromise(user?.email)}
        ></MyApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
