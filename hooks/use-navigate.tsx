"use client";
import { Button, Link as LinkHero } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const useNavigate = () => {
  const router = useRouter();
  return {
    navigateBack: () => router.back(),
    navigateTo: (target: string) => router.push(target),
    renderComponentNavigate: (props: {
      type: "back-button" | "button" | "link" | "back-link";
      target?: string;
      children?: React.ReactNode;
    }) =>
      props.type == "button" ? (
        <Button onClick={() => router.push(props.target ?? "")}>{props.children}</Button>
      ) : props.type == "back-button" ? (
        <Button onClick={() => router.back()}>Kembali</Button>
      ) : props.type == "back-link" ? (
        <LinkHero onClick={() => router.back()}>Kembali</LinkHero>
      ) : (
        <Link href={props.target ?? ""}>{props.children}</Link>
      ),
  };
};

export default useNavigate;
