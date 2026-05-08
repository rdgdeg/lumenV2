import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Notice, NoticeFormData, CondolenceMessage } from "@/types";
import { initialNotices } from "@/data/notices";

interface NoticeContextType {
  notices: Notice[];
  addNotice: (data: NoticeFormData) => void;
  updateNotice: (id: string, data: NoticeFormData) => void;
  deleteNotice: (id: string) => void;
  messages: CondolenceMessage[];
  addMessage: (msg: Omit<CondolenceMessage, "id" | "date">) => void;
  getMessagesForNotice: (noticeId: string) => CondolenceMessage[];
}

const NoticeContext = createContext<NoticeContextType | null>(null);

export function NoticeProvider({ children }: { children: ReactNode }) {
  const [notices, setNotices] = useState<Notice[]>(initialNotices);
  const [messages, setMessages] = useState<CondolenceMessage[]>([
    {
      id: "m1",
      noticeId: "1",
      authorName: "Marie Dupont",
      authorEmail: "marie@email.be",
      message: "Nos sinceres condoleances a toute la famille. Monique etait une personne exceptionnelle. Nos pensees vous accompagnent.",
      date: "2026-05-07T10:30:00",
    },
    {
      id: "m2",
      noticeId: "1",
      authorName: "Jean Lambert",
      authorEmail: "jean@email.be",
      message: "Je garde un excellent souvenir de Monique. Toutes mes condoleances aux proches.",
      date: "2026-05-07T14:15:00",
    },
  ]);

  const addNotice = useCallback((data: NoticeFormData) => {
    const newNotice: Notice = { id: Date.now().toString(), ...data };
    setNotices((prev) => [newNotice, ...prev]);
  }, []);

  const updateNotice = useCallback((id: string, data: NoticeFormData) => {
    setNotices((prev) => prev.map((n) => (n.id === id ? { ...n, ...data } : n)));
  }, []);

  const deleteNotice = useCallback((id: string) => {
    setNotices((prev) => prev.filter((n) => n.id !== id));
    setMessages((prev) => prev.filter((m) => m.noticeId !== id));
  }, []);

  const addMessage = useCallback((msg: Omit<CondolenceMessage, "id" | "date">) => {
    const newMsg: CondolenceMessage = {
      ...msg,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    setMessages((prev) => [newMsg, ...prev]);
  }, []);

  const getMessagesForNotice = useCallback(
    (noticeId: string) => messages.filter((m) => m.noticeId === noticeId).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [messages]
  );

  return (
    <NoticeContext.Provider value={{ notices, addNotice, updateNotice, deleteNotice, messages, addMessage, getMessagesForNotice }}>
      {children}
    </NoticeContext.Provider>
  );
}

export function useNotices() {
  const ctx = useContext(NoticeContext);
  if (!ctx) throw new Error("useNotices must be used within NoticeProvider");
  return ctx;
}
