import React from "react";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function TestRoute() {
  await delay(3000);
  return (
    <div>
      <div>Test Page</div>
    </div>
  );
}

export default TestRoute;
