"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button type="button" onClick={() => router.back()}>
      Kembali
    </Button>
  );
}
