import Link from "next/link";
import React, { Suspense } from "react";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

const LoadingPage = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

const MealsPage = async () => {
  return (
    <>
      <header className={classes.header}>
        <div>
          <h1>
            Delicious meal, created{" "}
            <span className={classes.hightlight}>by you.</span>
          </h1>
        </div>
        <div>
          Choose your favorite recipt, and cook it yourself. It is easy and fun.
        </div>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share Your Favorite Receipt</Link>
        </p>
      </header>
      <main className={classes.main}>
        {/* suspense for leading state from react */}
        <Suspense
          fallback={<div className={classes.loading}>Fetching meals...</div>}
        >
          <LoadingPage />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
