"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function DebugTokenPage() {
  useEffect(() => {
    async function getToken() {
      const supabase = createClient();

      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log("ACCESS TOKEN:", session?.access_token);
    }

    getToken();
  }, []);

  return <div>Open the browser console.</div>;
}