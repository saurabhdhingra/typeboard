"use client";

import { FormEvent, useState, useTransition } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Document() {
  const [input, setInput] = useState("");
  const [isUpdating, startTransition] = useTransition();

    const updateTitle = (event: FormEvent) => {
       event.preventDefault();
    }

  return (
    <div>
      <div>
        <form onSubmit={updateTitle}>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button disabled={isUpdating}>{isUpdating ? "Updating..." : "Update"}</Button>
        </form>
      </div>
      <div></div>
    </div>
  );
}
export default Document;
