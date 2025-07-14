"use client";

import { Send } from "lucide-react";
import { useRef, useState } from "react";

import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MaskedInput } from "./ui/MaskedInput";

export default function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().length < 2) {
      toast.error("Пожалуйста, введите имя");
      nameRef.current?.focus();
      return;
    }

    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length !== 11 || !digitsOnly.startsWith("7")) {
      toast.error("Пожалуйста, введите корректный номер телефона");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone }),
    });

    setLoading(false);
    if (res.ok) {
      setName("");
      setPhone("");
      toast.success("Заявка отправлена!");
    } else {
      toast.error("Ошибка отправки. Попробуйте позже.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="mb-8 text-3xl font-bold">
        Оставьте заявку на обратный звонок
      </h3>
      <form
        onSubmit={handleSubmit}
        className="grid gap-8 text-lg md:grid-cols-3"
      >
        <Input
          ref={nameRef}
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <MaskedInput
          mask="+{7} (000) 000-00-00"
          value={phone}
          onAccept={(value) => setPhone(value)}
          placeholder="+7 (___) ___-__-__"
          className="placeholder:text-muted-foreground"
        />

        <Button
          type="submit"
          disabled={loading}
          className="flex cursor-pointer gap-2 text-lg"
        >
          <Send />
          {loading ? "Отправка..." : "Перезвоните мне"}
        </Button>
      </form>
    </div>
  );
}
